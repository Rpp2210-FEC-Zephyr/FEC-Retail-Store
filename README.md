# Zephyr Team - FEC-Retail-Store

# Overview: The application is a shopping app for clothing that contains 4 widgets: 
- Product Overview Module
- Related Items & Outfit Creation.
- Questions & Answers Module
- Ratings & Reviews Module

# Product Overview Module-
- a. Image gallery
- b. Product information
- c. Style selector
- d. Add to cart
-In the Product Info:
  - product category,
  - product name,
  - product overview,
  - clothing,
  - price,
  - rating for the item,
  - a toggle to add product to a "my outfit" carousel.
- In the Image Gallery

# Related Items & Outfit Creation

# Questions & Answers Module

# Ratings & Reviews Module

![image](https://user-images.githubusercontent.com/113706094/230748694-9861750b-a9f0-455a-9a0f-763aa8bcd4d6.png)

- The left side component would display the average reviews for the current ProductOverview product as well as the distribution of Stars and their respective review count along with the average rating for these attributes if available: (Size, Width, Comfort, Quality, Length, Fit).
- The rating section would be based on the main product displayed in the ProductOverview component. The ratings would dynamically render based on the current product.
- There will be 3 methods of sorting: "Relevant", "Helpful", and "Newest"
- The widget by design displays only the first 2 reviews, upon clicking on the "MORE REVIEWS" button, it would display 2 more, and 2 more until no more reviews for this product.
- The write review button would open a popup form requiring the customer to enter:
  - Name
  - Email
  - Recommend product or not
  - Rating (1-5)
  - Size (Least to Most)
  - Width (Least to Most)
  - Comfort (Least to Most)
  - Quality (Least to Most)
  - Length (Least to Most)
  - Fit (Least to Most)
  - Review Summary (Max 50 characters)
  - Review Body (Max 1000 characters)
  - Photos (Max 5)

# Installation - Go to github download Webpack and react Run server...
1. Git clone from github to a local repository
2. If not installed already:
    - install npm version 18.1.0
    - install git
4. Created a local .env file labeling MY_API_TOKEN=""
    - "" would be a password token(generated off github)
6. On 2 seperate terminals, navigate to the file:
    - npm run server
    - npm run build
7. Open your browser and go to http://localhost:3000 to view the app.

# Usage- app has many added features to save

Project Title - The name of the project
Overview - A brief description outlining what the project
Table of Contents - You can link to the different sections below
Description - A more detailed outline of the project. What does it do? Is there a high level list of features? If describing a project that has visual features, consider adding pictures or animations of the features and functionality in this section. See Adding Screen Captures below.
Usage - Further details on how the project is meant to be used may be helpful. For a library or framework, this section would outline how to use the library within another project (see socket.io ). For a service that is meant to be used within a larger project architecture, instructions on how to integrate may be necessary (see node-statsD ).

# Technology Used
-React
-Javascript
-Node.js
-Express
-Axios
-Jest
-Webpack
-Babel
