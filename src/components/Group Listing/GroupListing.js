import React, { useState, useEffect } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import { Grid, Button } from "@material-ui/core";
import IndividualGroupListing from "./IndividualGroupListing";
import { useLocation, useHistory } from "react-router-dom";
import "../css/Products.css";
import Product from "../Product";
import { makeStyles } from "@material-ui/core/styles";

function GroupListing() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState([]);
  const db = firebase.firestore();
  const location = useLocation();
  const { category, title, desc } = location.state;
  const back = '< Back to Listing'
  const history = useHistory();
  const classes = useStyles();

  const ref = db.collection(category);

  function getProducts() {
    setLoading(true);
    ref
      .where("type", "==", "groupDelivery")
      .where("title", "==", title)
      .where("desc", "==", desc)
      .get()
      .then((querySnapshot) => {
        const items = [];
        querySnapshot.forEach((doc) => {
          items.push(doc.data());
        });
        setProducts(items);
        setLoading(false);
      });
  }

  useEffect(() => {
    getProducts();
  }, []);

  const handleBack = () => {
    history.goBack();
  };


  return (
    <div>
      <Button className={classes.back} onClick={handleBack}>
        {back}
      </Button>
      <h2>Group Listings</h2>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid
            item
            key={product.id}
            xs={12}
            sm={12}
            md={6}
            lg={3}
            style={{ display: "flex" }}
          >
            <IndividualGroupListing product={product} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
    back: {
      fontFamily: "Poppins",
      fontSize: "18px",
      fontWeight: 600,
      padding: "0px 10px",
      color: "black",
      height: "37px",
    },
  }));

export default GroupListing;
