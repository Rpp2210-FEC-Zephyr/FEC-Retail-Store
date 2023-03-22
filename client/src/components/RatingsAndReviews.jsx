import React, {useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';


import IndividualReview from './IndividualReviews.jsx';
import exampleData from './../exampleReviewsData.js'; // used as
import SortBy from './SortBy.jsx';
import WriteAReview from './WriteAReview.jsx';




const RatingsAndReviews = (props) =>{

  const [reviews, setReviews] = useState([]);
  const [reviewsCount, setReviewsCount] = useState(0);
  const [shownReviews, setShownReviews] = useState(2);
  const [sortby, setSortBy] = useState('relevant');

  const getReviews = (id) => {
    $.ajax({
      type: 'GET',
      url: '/reviews',
      data: {
        product_id: id, // NEED VARIABLE PRODUCT_ID
        count: 10,
        sort: 'relevant',
      },
      success: (data) => {
        console.log('Data reviewed in the client side!', data);
        setReviews(data.results);
        setReviewsCount(data.count);
      }
    })
  }

  useEffect(() => {
    if (props.main.id != undefined) {
      console.log('RATING MAIN ID', props.main.id)

      getReviews(props.main.id);
    }
  }, [props.main])



  var currentSelectionReviews = reviews.slice(0, shownReviews);

  const handleMoreReviews = () => {
    setShownReviews(shownReviews + 2);
  }

   return (
     <div class="RatingsAndReviews">
       <div>
         <h1>Rating And Reviews!</h1>

        <h4>{reviewsCount} reviews, sorted by <SortBy sortFunc={setSortBy}/></h4>
         {currentSelectionReviews.map((review) => {
          return <IndividualReview obj={review} />
         })}
       </div>
       {reviewsCount > 2 ? shownReviews > reviewsCount ? null :<button onClick={handleMoreReviews}>MORE REVIEWS</button> : null}
       <WriteAReview />

     </div>
   )
 }


export default RatingsAndReviews;