import React, {useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';


import IndividualReview from './IndividualReviews.jsx';
import exampleData from './../exampleReviewsData.js'; // used as 
import SortBy from './SortBy.jsx';




const RatingsAndReviews = (props) =>{

  const [shownReviews, setShownReviews] = useState(2);
  var currentSelectionReviews = props.currentProduct.slice(0, shownReviews);

  const handleMoreReviews = () => {
    setShownReviews(shownReviews + 2);
  }

  const handleAddReview = (e) => {
    console.log(e.target.value);
  }

  
   return (
     <div class="RatingsAndReviews">
       <div>
         <h1>Rating And Reviews!</h1>
         
        <h4>{props.count} reviews, sorted by <SortBy /></h4>
         {currentSelectionReviews.map((review) => {
          return <IndividualReview obj={review}/>
         })}
       </div>
       {props.count > 2 ? shownReviews > props.count ? null :<button onClick={handleMoreReviews}>MORE REVIEWS</button> : null}
       <button onClick={handleAddReview}>ADD A REVIEW +</button>
   
     </div>
   )
 }


export default RatingsAndReviews;