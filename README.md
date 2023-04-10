# Zephyr Team - FEC Retail Store

**Overview:** Zephyr's Store is an online web application that presents comprehensive information about a particular product from an online retailer's catalog. It is categorized by products that have different sizes and styles resulting in unique product IDs. The product detail page exhibits information at the product level and allows users to break it down further by size or style within the same page.

The Zephyr's Store web app is made up of four modules: Product Overview, Ratings & Reviews, Questions & Answers, and Related Items & Outfit Creation. Each module is designed to display pertinent details about the viewed product and offers various functionalities for users to interact with the product.

**Table of Contents:**
 - Product Overview Module
 - Related Items & Outfit Creation
 - Questions & Answers Module
 - Ratings & Reviews Module



# Product Overview Module
<img width="1428" alt="Screen Shot 2023-04-09 at 9 15 10 PM" src="https://user-images.githubusercontent.com/101741874/230806882-0893fc8b-8598-439b-929d-e2453e8d3866.png">

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
<img width="1440" alt="Screen Shot 2023-04-09 at 9 19 47 PM" src="https://user-images.githubusercontent.com/101741874/230806986-e280aa48-eca8-435e-8610-7e354bfe3f3c.png">

-In Both Related and Outfit cards
  - product category,
  - product name,
  - product picture,
  - price,
  - rating for the item,
  
-In Outfits
 - A 'X' button to remove product from the Outfit carousel
 
-In Related
 - A 'Detail' button that compares the product to the current product showcasing in ProductOverview

# Questions & Answers Module

# Ratings & Reviews Module

![image](https://user-images.githubusercontent.com/113706094/230748694-9861750b-a9f0-455a-9a0f-763aa8bcd4d6.png)

- The left side component would display the average reviews for the current ProductOverview product as well as the distribution of Stars and their respective review count along with the average rating for these attributes if available: (Size, Width, Comfort, Quality, Length, Fit).
- The rating section would be based on the main product displayed in the ProductOverview component. The ratings would dynamically render based on the current product.
- There will be 3 methods of sorting: "Relevant", "Helpful", and "Newest"
- The widget by design displays only the first 2 reviews, upon clicking on the "More Reviews" button, it would display 2 more, and 2 more until no more reviews for this product.
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

# Installation
1. Git clone from github to a local repository
2. If not installed already:
    - install npm version 18.1.0
    - install git
    - npm install
4. Created a local .env file labeling MY_API_TOKEN=""
    - "" would be a password token(generated off github)
6. On 2 seperate terminals, navigate to the file:
    - npm run server
    - npm run build
7. Open your browser and go to http://localhost:3000 to view the app.

# Usage

To use Zephyr's Store can be used by either browsing through the product catalog or by searching for a specific product using its name or ID. Upon selecting a product, users will be directed to its detailed product page where they can interact with the product in various ways. These include zooming in and out of the product image, selecting different styles or sizes, adding the product to the cart or outfit list, rating and reviewing the product, asking and answering questions about the product, and comparing it with other related products.

The Zephyr's store has several features and functionalities that enhance the user experience and provide useful information about the products. These include a responsive design that adapts to different screen sizes and devices, dynamic rendering of data from an API based on user input and selection, sorting and filtering options for reviews and questions, rating breakdown and product breakdown charts that show statistics and averages of ratings and characteristics, modal windows that allow users to write new reviews or answer questions without leaving the page, a carousel component that displays related products and outfit items in a scrollable list, and a comparison table that shows the differences and similarities between two products.

# Technology Used
  - React
  - Javascript
  - Node.js
  - Express
  - Axios
  - Jest
  - Webpack
  - Babel
  
 # Contributors
  - Lovinson Dieujuste - Product Overview And Related Items & Outfit Creation
  - Kevin Seng - Question and Answers
  - Alvin Ruan - Ratings and Reviews
