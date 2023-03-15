import React, { useRef, useEffect, useState} from 'react';

const RatingSystem = (props) => {

    const [rating, setRating] = useState(props.obj.rating);
    const [review, setReview] = useState(props.review);
    const ratingRef1 = useRef(null);
    const ratingRef2 = useRef(null);
    const ratingRef3 = useRef(null);
    const ratingRef4 = useRef(null);
    const ratingRef5 = useRef(null);


    useEffect(() => {
    const ratingRefs = [ratingRef1, ratingRef2, ratingRef3, ratingRef4, ratingRef5];
    if (rating !== 5) {
        const width = ratingRefs[Math.floor(rating)].current.getBoundingClientRect().width;
        const decimal = rating % 1;
        console.log('decimal', decimal);
        var ratingWidth;

        if (decimal === 0) {
            ratingWidth = width * 0;
        } else {
            ratingWidth = width * decimal;
        }
        
        // populate only a fraction of the star
        ratingRefs[Math.floor(rating)].current.style.width = `${ratingWidth}px`;

        //  hides remaining stars after the fraction above
        for (var i = Math.floor(rating)+1; i < 5; i++) {
            ratingRefs[i].current.style.width = `0px`;
        }

    } else {
        // show all stars if rating is 5
        ratingRefs.forEach(ref => {
            ref.current.style.width = '100%';
        });
    }}
    , []);



    return (
    <div class="star-rating">
            <div class="back-rating-container">
                <span><i class="fa-sharp fa-regular fa-star"></i></span>
                <span><i class="fa-sharp fa-regular fa-star"></i></span>
                <span><i class="fa-sharp fa-regular fa-star"></i></span>
                <span><i class="fa-sharp fa-regular fa-star"></i></span>
                <span><i class="fa-sharp fa-regular fa-star"></i></span>
            <span class="rating-container">
                <span ref={ratingRef1}><i class="fa-sharp fa-solid fa-star"></i></span>
                <span ref={ratingRef2}><i class="fa-sharp fa-solid fa-star"></i></span>
                <span ref={ratingRef3}><i class="fa-sharp fa-solid fa-star"></i></span>
                <span ref={ratingRef4}><i class="fa-sharp fa-solid fa-star"></i></span>
                <span ref={ratingRef5}><i class="fa-sharp fa-solid fa-star"></i></span>
          </span>
          {review ? <div class="userAndTime">{props.obj.reviewer_name}, {props.obj.date}</div> : null}
      </div>
    </div>
    )


}

export default RatingSystem;