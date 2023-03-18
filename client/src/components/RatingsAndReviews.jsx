import React, {useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';


import IndividualReview from './IndividualReviews.jsx';
import exampleData from './../exampleReviewsData.js'; // used as 
import SortBy from './SortBy.jsx';
import WriteAReview from './WriteAReview.jsx';




const RatingsAndReviews = (props) =>{

  const [shownReviews, setShownReviews] = useState(2);
  const [sortby, setSortBy] = useState('relevant');

  var currentSelectionReviews = props.currentProduct.slice(0, shownReviews);

  const handleMoreReviews = () => {
    setShownReviews(shownReviews + 2);
  }

   return (
     <div class="RatingsAndReviews">
       <div>
         <h1>Rating And Reviews!</h1>
         
        <h4>{props.count} reviews, sorted by <SortBy sortFunc={setSortBy}/></h4>
         {currentSelectionReviews.map((review) => {
          return <IndividualReview obj={review} />
         })}
       </div>
       {props.count > 2 ? shownReviews > props.count ? null :<button onClick={handleMoreReviews}>MORE REVIEWS</button> : null}
       <WriteAReview />
   
     </div>
   )
 }


export default RatingsAndReviews;