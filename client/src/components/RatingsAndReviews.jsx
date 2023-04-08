import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import $ from "jquery";

import IndividualReview from "./IndividualReviews.jsx";
// import exampleData from "./../exampleReviewsData.js"; // used as
import SortBy from "./SortBy.jsx";
import WriteAReview from "./WriteAReview.jsx";
import RatingsOverview from "./RatingsOverview.jsx";

const RatingsAndReviews = (props) => {
  const [reviews, setReviews] = useState([]);
  const [reviewsCount, setReviewsCount] = useState(0);
  const [shownReviews, setShownReviews] = useState(2);
  const [sortby, setSortBy] = useState("relevant");
  const [reviewMeta, setReviewMeta] = useState({});
  const [helpful, setHelpful] = useState(true);
  const [filtered, setFiltered] = useState(false);
  const [clickedFilter, setClickedFilter] = useState([]);
  const [filteredReviews, setFilteredReviews] = useState([]);
  const [somethingChanged, setSomethingChanged] = useState(false);

  const getReviews = (id, sortby) => {
    $.ajax({
      type: "GET",
      url: "/reviews",
      data: {
        product_id: id,
        sortby: sortby, // NEED VARIABLE PRODUCT_ID
      },
      success: (data) => {
        console.log("Data reviewed in the client side!", data.results);
        setReviews(data.results);
        setReviewsCount(data.results.length);
        // setcurrentSelectionReviews(data.results.slice(0, shownReviews));
      },
    });
  };

  const getReviewData = (id) => {
    $.ajax({
      type: "GET",
      url: "/reviews/meta",
      data: {
        product_id: id,
      },
      success: (data) => {
        console.log("Meta Data received on client side,", data);
        setReviewMeta(data);
      },
    });
  };

  useEffect(() => {
    if (props.main && props.main.id != undefined) {
      console.log("RATING MAIN ID", props.main.id);
      getReviews(props.main.id, sortby);
      getReviewData(props.main.id);
      console.log("filteredReviews", filteredReviews);
      if (clickedFilter.length > 0) {
        const filtered = reviews.filter((review) =>
          clickedFilter.includes(review.rating.toString())
        ); // [{rating : 4, name: lala}, {rating: 4, name: fafa}]
        setFilteredReviews(filtered);
      } else {
        setFilteredReviews([]);
        setFiltered(false);
      }
      console.log("current selection", clickedFilter);
    }
  }, [props.main, helpful, clickedFilter, somethingChanged]);

  var currentSelectionReviews = reviews.slice(0, shownReviews);
  var currentFilteredReviews = filteredReviews.slice(0, shownReviews);

  const handleMoreReviews = () => {
    setShownReviews(shownReviews + 2);
  };

  return (
    <div class="RatingsAndReviews">
      <div class="PracFlex">
        <div class="overview-container">
          <h1 class="rating-title">Rating And Reviews!</h1>

          {reviewMeta.product_id ? (
            <RatingsOverview
              obj={reviewMeta}
              setClickedFilter={setClickedFilter}
              setFiltered={setFiltered}
              clickedFilter={clickedFilter}
            />
          ) : null}
        </div>
        <div class="reviews-container">
          <h4 class="individual-review">
            {reviewsCount} reviews, sorted by{" "}
            <SortBy
              id={props.main.id}
              sortFunc={setSortBy}
              resort={getReviews}
            />
          </h4>
          {filtered
            ? currentFilteredReviews.map((review) => {
                return (
                  <IndividualReview
                    setHelpful={setHelpful}
                    helpful={helpful}
                    obj={review}
                  />
                );
              })
            : currentSelectionReviews.map((review) => {
                return (
                  <IndividualReview
                    setHelpful={setHelpful}
                    helpful={helpful}
                    obj={review}
                    origChange={somethingChanged}
                    change={setSomethingChanged}
                  />
                );
              })}
          <div class="buttons-container">
            {reviewsCount > 2 ? (
              shownReviews > reviewsCount ? null : (
                <div>
                  <button class="review-buttons" onClick={handleMoreReviews}>
                    <h2>MORE REVIEWS</h2>
                  </button>
                </div>
              )
            ) : null}
            <WriteAReview id={props.main.id} name={props.main.name} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatingsAndReviews;
