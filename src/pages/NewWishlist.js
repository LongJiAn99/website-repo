import React, { useState, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useAuth } from "../contexts/AuthContext";
import Alert from "react-bootstrap/Alert";
import { useHistory } from "react-router-dom";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import PhotoSizeSelectActualIcon from "@material-ui/icons/PhotoSizeSelectActual";
import { storage } from "../config/firebase";
import CreateIcon from '@material-ui/icons/Create';
import firebase from "firebase/app";
import "firebase/firestore";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Box,
  Typography,
  Container,
  MenuItem,
} from "@material-ui/core";

export default function NewWishlist() {
  const classes = useStyles();
  const titleRef = useRef();
  const descRef = useRef();
  const priceRef = useRef();
  const { currentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const backToListing = "< Back to Wishlist";
  const [images, setImages] = useState([]);
  const [urls, setUrls] = useState([]);
  const [category, setCategory] = useState("");
  const db = firebase.firestore();
  const [size, setSize] = useState(0);

  const handleBack = () => {
    history.goBack();
  };

  const handleChange = (e) => {
    for (let i = 0; i < e.target.files.length; i++) {
      const newImage = e.target.files[i];
      /* newImage["id"] = Math.random();  not sure if needed*/
      setImages((prevState) => [...prevState, newImage]);
    }
  };

  const handleCategory = (event) => {
    setCategory(event.target.value);
  };

  async function handleUpload() {
    const promises = [];
    images.map((image) => {
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      promises.push(uploadTask);
      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (error) => {
          console.log(error);
        },
        async () => {
          await storage
            .ref("images")
            .child(image.name)
            .getDownloadURL()
            .then((url) => {
              setUrls((prevState) => [...prevState, url]);
            });
        }
      );
    });
    Promise.all(promises).catch((err) => console.log(err));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (category == '') {
      return setError("Please enter a category")
    }

    if (titleRef.current.value == '') {
      return setError("Please enter a title for your listing")
    }

    if (descRef.current.value == '') {
      return setError("Please enter a rough description of your listing")
    }

    try {
      setError("");
      setLoading(true);

      db.collection(currentUser.uid).add({
        title: titleRef.current.value,
        id: currentUser.uid,
        price: priceRef.current.value,
        desc: descRef.current.value,
        photos: urls,
        type: 'wishlist',
        category: category,
      });

      db.collection(category).add({
        title: titleRef.current.value,
        id: currentUser.uid,
        price: priceRef.current.value,
        desc: descRef.current.value,
        photos: urls,
        type: 'wishlist',
        category: category,
      });
    } catch {
      setError("Failed to add item");
    }
    setLoading(false);
    alert("Successfully added item");
    history.goBack()
  }

  return (
    <>
      <Button className={classes.button} onClick={handleBack}>
        {backToListing}
      </Button>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <div className={classes.row}>
            <Typography component="h1" variant="h5" className={classes.title}>
              Describe your desired product to us!
            </Typography>
            <Avatar variant="rounded" className={classes.avatar}>
              <CreateIcon />
            </Avatar>
          </div>
          {error && <Alert variant="danger"> {error} </Alert>}
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  id="category"
                  required
                  select
                  label="Category"
                  value={category}
                  onChange={handleCategory}
                  helperText="Please select the category your item belongs to"
                  variant="outlined"
                >
                  {categories.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="title"
                  label="Title"
                  name="title"
                  inputRef={titleRef}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="price"
                  label="Expected price range"
                  name="price"
                  inputRef={priceRef}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  multiline
                  variant="outlined"
                  required
                  rows={5}
                  fullWidth
                  id="desc"
                  label="Describe your ideal product/service as detailed as possible to help our buisnesses!"
                  name="desc"
                  inputRef={descRef}
                />
              </Grid>
              <Grid item xs={12} sm={8}>
                <input
                  accept="image/*"
                  className={classes.input}
                  id="contained-button-file"
                  multiple
                  type="file"
                  onChange={handleChange}
                />
                <label htmlFor="contained-button-file">
                  <Button
                    variant="contained"
                    color="default"
                    className={classes.button}
                    startIcon={<PhotoSizeSelectActualIcon />}
                    component="span"
                  >
                    Choose Images
                  </Button>
                </label>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Button
                  variant="contained"
                  color="default"
                  className={classes.button}
                  startIcon={<CloudUploadIcon />}
                  onClick={handleUpload}
                >
                  Upload
                </Button>
              </Grid>
              <Grid item xs={12}>
                <p className={classes.text}>
                  *Remember to upload after choosing your images to view them
                  before clicking on Add to wishlist
                </p>
              </Grid>
            </Grid>
            <br />
            {urls.map((url, i) => (
              <img
                key={i}
                style={{ width: "50px" }}
                src={url}
                alt="firebase-image"
              />
            ))}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={loading}
              className={classes.submit}
              onClick={handleSubmit}
            >
              Add to wishlist
            </Button>
          </form>
        </div>

        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  row: {
    display: "flex",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.text.secondary,
    height: "35px",
    width: "35px",
    marginBottom: "15px",
  },
  title: {
    paddingTop: "7px",
    fontFamily: "Poppins",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    color: "black",
    backgroundColor: "#2DE5F7",
    fontSize: "15px",
    fontWeight: "bold",
    '&:hover': {
      backgroundColor: '#1545F6',
      color: '#FFFFFF',
  },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  button: {
    fontFamily: "Poppins",
    fontSize: "18px",
    fontWeight: 600,
    padding: "0px 10px",
    color: "black",
    height: "37px",
  },
  input: {
    display: "none",
  },
  text: {
    color: "#8C8A8A",
  },
}));

const categories = [
  {
    value: "food",
    label: "Food",
  },
  {
    value: "men's fashion",
    label: "Men's Fashion",
  },
  {
    value: "women's fashion",
    label: "Women's Fashion",
  },
  {
    value: "arts and craft",
    label: "Arts and Craft",
  },
  {
    value: "health and beauty",
    label: "Health and Beauty",
  },
  {
    value: "event planning",
    label: "Event Planning",
  },
  {
    value: "pet grooming",
    label: "Pet Grooming",
  },
  {
    value: "education",
    label: "Education",
  },
];

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        PasarGo!
      </Link>{" "}
      {2021}
      {"."}
    </Typography>
  );
}
