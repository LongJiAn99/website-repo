# PasarGo!

## WebApp Built for Orbital 2021

## 1. Introduction
![newposter](https://user-images.githubusercontent.com/77440060/123549141-3dff2980-d79a-11eb-91d8-e647ffeda7db.jpg)

### Motivation

There are many situations when you want to support smaller businesses to buy items that you are interested in but you simply cannot find the website or item listed online. It is simply frustrating as you will have to constantly search it up online or through social media and contact the sellers directly to purchase it from them. Furthermore, small startups could be deemed as being unreliable and sketchy especially since everything is done online. This discourages people from buying the items from the small businesses simply due to how inconvenient it is. It is also rather expensive to buy a single item from the small businesses, as it is very hard to meet the minimum spending to get free delivery. So why isn’t there an available platform to collate the small businesses and allow you to mass order your items?

### Aim

We hope to give small businesses a chance and opportunity to bring more exposure to their products or services and at the same time, give online shoppers more options and customizability to choose from.

### User Stories

- As somebody who loves to paint and has the time during weekends to do so, I would love to be able to earn some side income from my hobby as I have already invested quite a bit in painting tools. With this web app, I am able to promote my artwork to a wider audience and hopefully get some sales from it.
- As somebody who loves earrings but is unable to find a pair of earrings that truly resonate with me, this web app allow me to be able to look for reliable small businesses that sells earrings and small businesses that are usually more flexible and customisable with their products, hence I will have a higher chance of finding earrings that I like or even earrings that I personally have a say in how they look.
- As a seller that has an interest in sewing and would like to have a go at selling my products to have a sensing of how popular my products will be, I want a platform for me to set up a temporary store to sell my products.
- As a buyer who likes to try out different types of pastry, I generally do not need to purchase in bulk as I am only interested in trying out the flavours. However, many of these small bakeries do not find it worthwhile to bake pastries on a small scale. Hence, this web app will allow me to find other interested buyers so that we can order from the bakery together and share the delivery costs.
- As a party planner, it is difficult for me to customise the party gift accordingly to each guest in one order. This makes the ordering process inefficient and does not guarantee me my ideal product. However, the Web App provides me with the chat feature that links me with the seller to facilitate the personlization process and makes it easier for me to order my products.

## 2. Features

### Scope of project

We are planning to build a Web App to act as the **go-to** website for those who are trying to start a home-based buisness and earn a side income. The Web App will allow them to reach out to a greater audience and foster stronger **buyer-seller** relationship. The chat feature promotes discussions between the buyer and seller so as to provide greater buyer satisfaction and reduce confusions. In the case that there are a few buyers that are looking at the same product and are looking for someone to share the delivery cost, if they are living in the same area, the web app will proceed to **help to group them together for a mass order and deliver to that area.** This will be done by adding them to a group with the seller where they can confirm the orders and discuss the delivery dates and options.

A step-by-step guide is provided under **Appendix** for users who want to try out our website.

### Milestone 1

Features implemented:

1. Main page where users will see upon entering the website 
2. Navigation bar for different parts of the main web page
    - Home: Directs user back to main page
    - Wishlist: Directs user to the wishlist page
    - Browse: Shows the list of products/services categories 
    - Guide: Guide on how to use the webapp
    - About: Motivation behind the webapp and its purpose
    - Profile: User can navigate to view more user information
3. Log in or Sign Up button which redirects them to a page for them to register or login 
    - User can choose to sign in with an account or with google
    - Forgot password feature
4. Changed navigation bar once they have logged in for them to view their listing, wishlist, profile and for them to log out. 

### Milestone 2

Features implemented:

1. Listing page where users can see the listings for each category 
    - Listing page is filtered based on the categories
    - Product details such as price and descriptions are shown 
2. Wishlist page to show the products and services requested by users 
    - Wishlist page is filtered based on the categories
    - Wishlist details and descriptions are shown
3. Profile page for users to view their products/services listed and products/services on their wishlist 

    a. Profile
        - User can view their details (username and email) and update their profile 
        
    b. My Listings
        - Users can view the products that they listed
        
    c. My Wishlist
        - Users can view the wishlist requests they added 
        
    d. Orders
        - Users can check their confirmed orders
        
    e. Sign out button


The three pages and featureswere implemented using React JS as the library for building this user interface and are linked to one another using react router. Firebase was used as the backend to store all the relevant data needed.

The wishlist and listings will be connected to a realtime database to enhance the selling/buying experience by allowing them to view the latest updates.

### Milestone 3

Features to be implemented by milestone 3:

1. Chat function for buyer and seller to communicate
    1. Will be implemented using Firechat from firebase for real-time chat
    2. Payment and transaction details will be discussed using this feature between the buyer and the seller
    3. Buyers and sellers will use the chat function to discuss the preferred payment option and complete transaction on their own 

2. Option to find other interested buyers to share delivery cost/group buy
    1. Will be built using html/css and React JS library
    2. Users will be able to indicate their interest for the product 
    3. All interested buyers will be added to a chat group with the seller to discuss further details

3. Sellers can set a limit to the number of products and customers on group orders
    1. Will be built using html/css and React JS library
    2. Seller will set a limit to the amount of buyers that can join the group order


## 3. Process 

### Tech Stack

1. Frontend User Interface (Client side):
    - HTML/CSS/Javascript (Languages)
    - React JS (library)
        - react-bootstrap
        - react-firebase
        - react-router
    - Material-UI

2. Backend (Server side):
    - Firebase (Database)


### Frontend Development

We came up with the colour palette of the WebApp as well as the main design of the WebApp 
**ReactJS**

We decided to use ReactJS as it is lightweight and flexible. We installed yarn and used it to specifically install dependencies required for our project.

Dependencies installed include:
- react-bootstrap (CSS framework for styling components)
- react-router (To route to different pages)
- material-ui (CSS framework for styling components)
- react-icons (Icons to make the WebApp more user friendly)
- react-pro-sidebar (Sidebar navigation)

The frontend was made using a mix of components from multiple libraries as listed above and styled using useStyles and classNames as well as the traditional CSS. 

For example:
- Each product/listing is made using Material UI's card component imbedded in their Grid component 
- Profile page made use of Tab, Nav, Row and Col components from react-bootstrap
- SideBar in the listing/wishlist page is made using MenuItem and SubMenu component from react-pro-sidebar
- Navigation between pages are made using Links from react-router-dom
    - Navigation between pages were planned using the UX flowchart so as to ensure that the different features are easily accessible to make it more user friendly
- Filter in sidebar is made with checkboxes and the filtering feature will be completed in milestone 3

### Backend Development

**Firebase**

We decided to use Firebase as it is backed by google and has built-in analytics and easy to integrate with other services. Firebase allows for quick exchange of data to and fro from the database which is suitable for out chat messaging feature.

Firebase was used to authenticate users by having them either sign up with their google accounts or using their email and a password. There is also a feature in the event which users forget their password. A reset password link will be sent to the email which they registered with.

Firebase firestore was used to store all the products and services listed when users add a new listing or when they add a new wishlist. The data is being stored as such:

![image](https://user-images.githubusercontent.com/77440060/123447771-cf409580-d60c-11eb-910e-323f868fd991.png)

Basically, a collection for each category is created to store the listings which belong in that category. This is so that users can better sieve through the listings to look for what they want. Additionally, a collection with the user's own unique authentication id will be created whenever the user adds a new listing or item in his/her wishlist. This way, we are able to fetch all of the user's listings and items in their wishlist with greater ease and efficiency. This is done by using simple queries on the firebase firestore collection when fetching our data.

![newlisting](https://user-images.githubusercontent.com/77440060/123452129-b1752f80-d610-11eb-9ec7-b4be2c49bcd2.png)


Firebase storage is also used to store photos of the products as users may want to input multiple photos for their listings or wishlist. Hence we save their photos in their storage then proceed to download their urls when we want to fetch these photos to showcase their listing/wishlist.

![image](https://user-images.githubusercontent.com/77440060/123452348-e8e3dc00-d610-11eb-9b0a-03422fc98d8e.png)


### Testing

We mainly carried out the testing by adding the features first then going through the whole process of using the webapp to detect any errors. The test cases used are all different and updated to the different categories to ensure that all of the features are functioning well.

Test cases (simulated user focus group):
- Seller wanting to sell products
- Buyer looking for to browse through with no specific item in mind
- Buyer looking for a certain item
- Seller checking on their exisiting listings 
- Buyer checking on their exisiting requests

**Integration Testing**

After adding a new feature, we would also test the previous features that interact with this feature to ensure that everything works together. 
For example,
- Testing page navigation
    - Check whether the right navigation bar shows up pre/post logging in
    - Check whether the products listed are accurately placed based on its categories
- Listing product or posting a wishlist request
    -  Check that after the required information are filled in the request/product shows up at the main listing/wishlist page
- After listing a request or product, test the listing display UI
    - Check that the product shows up at the listing page
    - Check that the user can view their listings at their profile page

**System Testing** 

After adding all the features, we ran the webapp and tested the webapp as if we were first time users trying to 
1. List a product
2. Add a wishlist request
3. Browse through the webapp
4. Update our profile page

We tried the form submitting features and checked if the newly submitted products were reflected accurately on the respective pages and in our database as well
- For example:
    - Listing a product under the Arts and Craft category
    - Then we check if it shows under the listing page
    - Followed by checking if it shows up in My Lisitngs under My Profile
    
 **Evaluation**
1. User does not know whether the submission of their listing is completed

    How we solved it: 
    - Added more instructions in the “new listing” page
    - Pop up message to inform user that the product is submitted
    - Redirect user to “listing” page upon successful submission


### Architecture

**UX Flowchart**
![Obrital Diagram Flow](https://user-images.githubusercontent.com/77440060/123536492-1f2e7200-d75d-11eb-9228-0c2361fb4b7c.jpg)

## Appendix

### Getting Started:
To start Web App: 
Clone repository from https://github.com/LongJiAn99/website-repo

Open terminal and type “npm install”:

![npm install](https://user-images.githubusercontent.com/77440060/123448739-b97fa000-d60d-11eb-8935-4e8a2f5c8917.png)

Then, type “npm start”:

![npm start](https://user-images.githubusercontent.com/77440060/123448968-d1572400-d60d-11eb-8974-87645be06f48.png)

### Login or Register:

To register, click on the Sign up button at the top right of the web page or the Sign Up button on the Banner:

![Inkededit_LI](https://user-images.githubusercontent.com/77440060/123449033-e16f0380-d60d-11eb-8ac6-68b96c48cceb.jpg)

Enter the details required to register:

![sign-in](https://user-images.githubusercontent.com/77440060/123449112-f0ee4c80-d60d-11eb-84a1-7bd5fa1908df.png)

Head over to the login page to login with details you have signed up earlier or even sign in with your google account:

![login](https://user-images.githubusercontent.com/77440060/123449171-fd72a500-d60d-11eb-868f-9b0f0351ae3e.png)

### Listing

To browse the category of your interest, simply select the respective category or click on **Browse** to be directed to the category options:

![browse](https://user-images.githubusercontent.com/77440060/123451063-f2207900-d60f-11eb-9074-4b553eb076ee.png)

![image](https://user-images.githubusercontent.com/77440060/123452936-82ab8900-d611-11eb-85b1-ee97e72721f3.png)

![image](https://user-images.githubusercontent.com/77440060/123549027-d812a200-d799-11eb-904b-db471f8a7992.png)


### New Listing

To create a new listing, simply click on **New Listing**:

![addnewlisting](https://user-images.githubusercontent.com/77440060/123549046-ef518f80-d799-11eb-84a1-59257ae5349f.png)

At the new listing page, fill up the relevant details of the product or service which you are trying to sell, remember to click on upload after selecting your photos and before adding them!

![image](https://user-images.githubusercontent.com/77440060/123453077-abcc1980-d611-11eb-81b4-1d03daced41b.png)

### Wishlist

For sellers, to see what users may request for that category, click on **View Wishlist**

![wishlist](https://user-images.githubusercontent.com/77440060/123548922-74887480-d799-11eb-91a4-592221957bd5.png)

### New Wishlsit

As a buyer, you can add your own wishlist too so that potential sellers may take on your requests:

![newwishlist](https://user-images.githubusercontent.com/77440060/123548980-a7326d00-d799-11eb-87b3-9b1071cf7af6.png)

![image](https://user-images.githubusercontent.com/77440060/123548989-af8aa800-d799-11eb-9883-166aa2dd565f.png)

### Profile page

To view your **Profile**, click on the profile icon at the top right of the screen and click on 'My Profile', you can also access your listing, wishlist or orders:

![myprofile](https://user-images.githubusercontent.com/77440060/123453451-28f78e80-d612-11eb-8833-34712aaeaf5e.png)

![image](https://user-images.githubusercontent.com/77440060/123453977-a3281300-d612-11eb-8a94-705c7cf584ce.png)

From your profile, you can then update it if you like:

![image](https://user-images.githubusercontent.com/77440060/123454050-b509b600-d612-11eb-8b98-e124491d28d5.png)

Or you can view your current listings:

![image](https://user-images.githubusercontent.com/77440060/123454354-09ad3100-d613-11eb-8c12-4996e2a79a7f.png)

Or view your current wishlist requests:

![image](https://user-images.githubusercontent.com/77440060/123549108-2031c480-d79a-11eb-8fea-99debe5cab78.png)

This is where you can delete a listing or wishlist request if you no longer wish to sell/buy it by simply clicking on the trash icon of the listing.

Lastly, you can log out from the web app after using it, either from the profile page or from the home page by once again click on the profile icon.
