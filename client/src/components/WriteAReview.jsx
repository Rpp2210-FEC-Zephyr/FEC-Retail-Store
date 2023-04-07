import React, { useState } from "react";
const WriteAReview = () => {
  const [showFormPopup, setShowFormPopup] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div>
      <button class="review-buttons" onClick={() => setShowFormPopup(true)}>
        WRITE REVIEW
      </button>
      {showFormPopup && (
        <div className="form-popup-overlay">
          <div className="form-popup-container">
            <div className="form-popup-inner">
              <h2>Form Popup</h2>
              <form onSubmit={handleSubmit}>
                <label>
                  What is your nickname
                  <input type="text" name="name" />
                </label>
                <br />
                <label>
                  Email:
                  <input type="email" name="email" />
                </label>
                <br />
                <label>
                  Do you recommend this product?
                  <input type="text" name="name" />
                </label>
                <br />
                <label>
                  Overall rating
                  <input type="text" name="name" />
                </label>
                <br />
                <label>
                  Review summary
                  <input type="text" name="name" />
                </label>
                <br />
                <label>
                  Review body
                  <input type="text" name="name" />
                </label>
                <br />
                <label>
                  Upload your photos
                  <input type="text" name="name" />
                </label>
                <br />
                <button type="submit">Submit</button>
              </form>
            </div>
            <button onClick={() => setShowFormPopup(false)}>
              Close Form Popup
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WriteAReview;

// import React, { useState, useEffect } from "react";
// import $ from "jquery";

// const WriteReview = (props) => {
//   const [review, setReview] = useState({
//     productId: props.productId,
//     rating: 0,
//     summary: "",
//     body: "",
//     recommend: false,
//     name: "",
//     email: "",
//     photos: [],
//     characteristics: {},
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setIsSubmitting(true);
//     $.ajax({
//       url: "/reviews",
//       type: "POST",
//       data: JSON.stringify(review),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//       .done((response) => {
//         if (response.status === 200) {
//           alert("Review submitted successfully");
//         } else {
//           alert(response.statusText);
//         }
//         setIsSubmitting(false);
//       })
//       .fail((error) => {
//         alert(error.message);
//         setIsSubmitting(false);
//       });
//   };

//   return (
//     <div>
//       <h1>Write a Review</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor={props.productId}>Product ID</label>
//           <input
//             type="number"
//             id={props.productId}
//             name={props.productId}
//             value={productId}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="rating">Rating</label>
//           <select id="rating" name="rating" required>
//             <option value="">Select Rating</option>
//             <option value="1">1</option>
//             <option value="2">2</option>
//             <option value="3">3</option>
//             <option value="4">4</option>
//             <option value="5">5</option>
//           </select>
//         </div>
//         <div>
//           <label htmlFor="summary">Summary</label>
//           <textarea id="summary" name="summary" rows="3" cols="50" required>
//             {review.summary}
//           </textarea>
//         </div>
//         <div>
//           <label htmlFor="body">Body</label>
//           <textarea id="body" name="body" rows="5" cols="50" required>
//             {review.body}
//           </textarea>
//         </div>
//         <div>
//           <label htmlFor="recommend">Recommend</label>
//           <input
//             type="checkbox"
//             id="recommend"
//             name="recommend"
//             value="1"
//             checked={review.recommend}
//           />
//         </div>
//         <div>
//           <label htmlFor="name">Name</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={review.name}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={review.email}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="photos">Photos</label>
//           <input type="file" id="photos" name="photos" multiple />
//         </div>
//         <div>
//           <label htmlFor="characteristics">Characteristics</label>
//           <div>
//             {review.characteristics.map((characteristic, index) => (
//               <div key={index}>
//                 <label htmlFor={characteristic.id}>{characteristic.name}</label>
//                 <input
//                   type="number"
//                   id={characteristic.id}
//                   name={characteristic.id}
//                   value={characteristic.value}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//         <div>
//           <button type="submit">Submit</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default WriteReview;
