import React, { useState } from "react";
import $ from "jquery";

const WriteAReview = (props) => {
  const [showFormPopup, setShowFormPopup] = useState(false);
  const [rating, setRating] = useState(0);
  const [charCount, setcharCount] = useState(0);

  const starGrid = {
    1: "Poor",
    2: "Fair",
    3: "Average",
    4: "Good",
    5: "Great",
  };

  const updateCount = () => {
    var inputElement = document.getElementsByName("write-review-body")[0];
    var currentLength = inputElement.value.length;
    setcharCount(currentLength);
  };

  const handleSubmitReview = (event) => {
    event.preventDefault();

    const nickname = document.getElementsByName("name")[0].value;
    const email = document.getElementsByName("email")[0].value;
    const recommend =
      document.getElementsByName("recommend")[0].value === "true";
    const summary = document.getElementsByName("summary")[0].value;
    const body = document.getElementsByName("write-review-body")[0].value;

    const photos = [
      document.getElementsByName("photos1")[0].value,
      document.getElementsByName("photos2")[0].value,
      document.getElementsByName("photos3")[0].value,
      document.getElementsByName("photos4")[0].value,
      document.getElementsByName("photos5")[0].value,
    ];

    const characteristics = {
      14: parseInt(document.querySelector('input[name="size"]:checked').value),
      15: parseInt(document.querySelector('input[name="width"]:checked').value),
      16: parseInt(
        document.querySelector('input[name="comfort"]:checked').value,
      ),
      17: parseInt(
        document.querySelector('input[name="quality"]:checked').value,
      ),
      18: parseInt(
        document.querySelector('input[name="length"]:checked').value,
      ),
      19: parseInt(document.querySelector('input[name="fit"]:checked').value),
    };
    console.log("characteristics", characteristics);
    console.log("props.productId", props.id);
    const reviewData = {
      product_id: props.id,
      rating,
      summary,
      body,
      recommend,
      nickname,
      email,
      photos,
      characteristics,
    };

    if (
      rating &&
      summary &&
      body &&
      recommend &&
      nickname &&
      email &&
      photos &&
      characteristics
    ) {
      $.ajax({
        url: `reviews`,
        method: "POST",
        data: JSON.stringify(reviewData),
        contentType: "application/json",
        success: (data) => {
          console.log("Successfully posted review!!!!", data);
          alert("Your review has been posted!");
        },
        error: (err) => {
          console.log("Getting an Error reporting", err);
        },
      });
    } else {
      alert("Please fill in all required fields.");
    }
  };
  // Star rating system
  const handleStarClick = (event) => {
    const ratingValue = parseInt(event.target.getAttribute("data-value"));
    setRating(ratingValue);
  };

  const renderStar = (value) => {
    // let coloring = "color: #efff0a;";
    let starClass = "fa-sharp fa-regular fa-star ";
    if (value <= rating) {
      starClass = "fa-sharp fa-solid fa-star";
    }
    return (
      <span
        key={value}
        className={starClass}
        data-value={value}
        // style={coloring}
        onClick={handleStarClick}
      >
        <i></i>
      </span>
    );
  };

  return (
    <div>
      <button class="review-buttons" onClick={() => setShowFormPopup(true)}>
        <h2>WRITE REVIEW</h2>
      </button>
      {showFormPopup && (
        <div className="form-popup-overlay">
          <div className="form-popup-container">
            <div className="form-popup-inner">
              <h1>Write Your Review</h1>
              <h3>About the {props.name}</h3>
              <form
                onSubmit={(e) => {
                  handleSubmitReview(e);
                }}
              >
                <label className="write-review-label">
                  <br />
                  <h3>What is your nickname?</h3>
                  <input type="text" name="name" maxLength="60" required />
                  <div>
                    For privacy reasons, do not use your full name or email
                    address
                  </div>
                </label>
                <br />
                <label className="write-review-label">
                  <h3>Email:</h3>
                  <input type="email" name="email" maxLength="60" required />
                  <div>For authentication reasons, you will not be emailed</div>
                </label>
                <br />
                <label className="write-review-label">
                  <h3>Do you recommend this product?</h3>
                  <select name="recommend" required>
                    <option value="">Select an option</option>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                  </select>
                </label>
                <br />
                <label className="write-review-label">
                  <div className="rating-system">
                    <div className="star-grid">
                      {Object.keys(starGrid).map((key) =>
                        renderStar(parseInt(key)),
                      )}
                    </div>
                    <div className="selected-rating">
                      {rating > 0 ? (
                        <h4>You have rated this {starGrid[rating]}!</h4>
                      ) : null}
                    </div>
                  </div>
                </label>
                <fieldset class="fieldset">
                  <legend>
                    <h3>Size</h3>
                  </legend>
                  <input type="radio" id="size1" name="size" value="1" />
                  <label for="size1">A size too small</label>
                  <br />
                  <input type="radio" id="size2" name="size" value="2" />
                  <label for="size2">½ a size too small</label>
                  <br />
                  <input type="radio" id="size3" name="size" value="3" />
                  <label for="size3">Perfect</label>
                  <br />
                  <input type="radio" id="size4" name="size" value="4" />
                  <label for="size4">½ a size too big</label>
                  <br />
                  <input type="radio" id="size5" name="size" value="5" />
                  <label for="size5">A size too wide</label>
                  <br />
                </fieldset>

                <fieldset class="fieldset">
                  <legend>
                    <h3>Width</h3>
                  </legend>
                  <input type="radio" id="width1" name="width" value="1" />
                  <label for="width1">Too narrow</label>
                  <br />
                  <input type="radio" id="width2" name="width" value="2" />
                  <label for="width2">Slightly narrow</label>
                  <br />
                  <input type="radio" id="width3" name="width" value="3" />
                  <label for="width3">Perfect</label>
                  <br />
                  <input type="radio" id="width4" name="width" value="4" />
                  <label for="width4">Slightly wide</label>
                  <br />
                  <input type="radio" id="width5" name="width" value="5" />
                  <label for="width5">Too wide</label>
                  <br />
                </fieldset>
                <fieldset class="fieldset">
                  <legend>
                    <h3>Comfort</h3>
                  </legend>
                  <input type="radio" id="comfort1" name="comfort" value="1" />
                  <label for="comfort1">Uncomfortable</label>
                  <br />
                  <input type="radio" id="comfort2" name="comfort" value="2" />
                  <label for="comfort2">Slightly uncomfortable</label>
                  <br />
                  <input type="radio" id="comfort3" name="comfort" value="3" />
                  <label for="comfort3">Ok</label>
                  <br />
                  <input type="radio" id="comfort4" name="comfort" value="4" />
                  <label for="comfort4">Comfortable</label>
                  <br />
                  <input type="radio" id="comfort5" name="comfort" value="5" />
                  <label for="comfort5">Perfect</label>
                  <br />
                </fieldset>
                <fieldset class="fieldset">
                  <legend>
                    <h3>Quality</h3>
                  </legend>
                  <input type="radio" id="quality1" name="quality" value="1" />
                  <label for="quality1">Poor</label>
                  <br />
                  <input type="radio" id="quality2" name="quality" value="2" />
                  <label for="quality2">Below average</label>
                  <br />
                  <input type="radio" id="quality3" name="quality" value="3" />
                  <label for="quality3">Ok</label>
                  <br />
                  <input type="radio" id="quality4" name="quality" value="4" />
                  <label for="quality4">Pretty great</label>
                  <br />
                  <input type="radio" id="quality5" name="quality" value="5" />
                  <label for="quality5">Perfect</label>
                  <br />
                </fieldset>
                <fieldset class="fieldset">
                  <legend>
                    <h3>Length</h3>
                  </legend>
                  <input type="radio" id="length1" name="length" value="1" />
                  <label for="length1">Runs Short</label>
                  <br />
                  <input type="radio" id="length2" name="length" value="2" />
                  <label for="length2">Runs slightly short</label>
                  <br />
                  <input type="radio" id="length3" name="length" value="3" />
                  <label for="length3">Perfect</label>
                  <br />
                  <input type="radio" id="length4" name="length" value="4" />
                  <label for="length4">Runs slightly long</label>
                  <br />
                  <input type="radio" id="length5" name="length" value="5" />
                  <label for="length5">Runs long</label>
                  <br />
                </fieldset>
                <fieldset class="fieldset">
                  <legend>
                    <h3>Fit</h3>
                  </legend>
                  <input type="radio" id="fit1" name="fit" value="1" />
                  <label for="fit1">Runs tight</label>
                  <br />
                  <input type="radio" id="fit2" name="fit" value="2" />
                  <label for="fit2">Runs slightly tight</label>
                  <br />
                  <input type="radio" id="fit3" name="fit" value="3" />
                  <label for="fit3">Perfect</label>
                  <br />
                  <input type="radio" id="fit4" name="fit" value="4" />
                  <label for="fit4">Runs slightly long</label>
                  <br />
                  <input type="radio" id="fit5" name="fit" value="5" />
                  <label for="fit5">Runs long</label>
                  <br />
                </fieldset>
                <label className="write-review-label">
                  <h3>Review summary</h3>
                  <input type="text" name="summary" maxlength="60" required />
                </label>
                <br />
                <label className="write-review-label">
                  <h3>Review body</h3>
                  <textarea
                    name="write-review-body"
                    style={{ width: "30vw", height: "15vh" }}
                    maxlength="1000"
                    required
                    placeholder="Why did you like the product or not?"
                    onInput={updateCount}
                  ></textarea>
                </label>
                {charCount > 50 ? (
                  <div>Minimum reached</div>
                ) : (
                  <div>Minimum required characters left: {50 - charCount}</div>
                )}

                <br />
                <label className="write-review-label">
                  <h3>Upload your photos:</h3>
                  <input
                    type="text"
                    name="photos1"
                    style={{ width: "30vw", margin: "1.5px" }}
                  />
                  <br />
                  <input
                    type="text"
                    name="photos2"
                    style={{ width: "30vw", margin: "1.5px" }}
                  />
                  <br />
                  <input
                    type="text"
                    name="photos3"
                    style={{ width: "30vw", margin: "1.5px" }}
                  />
                  <br />
                  <input
                    type="text"
                    name="photos4"
                    style={{ width: "30vw", margin: "1.5px" }}
                  />
                  <br />
                  <input
                    type="text"
                    name="photos5"
                    style={{ width: "30vw", margin: "1.5px" }}
                  />
                </label>
                <br />
                <div class="buttons-container">
                  <button
                    onClick={() => setShowFormPopup(false)}
                    class="review-buttons"
                    type="submit"
                  >
                    <h4>Submit</h4>
                  </button>
                  <button
                    class="review-buttons"
                    onClick={() => setShowFormPopup(false)}
                  >
                    <h4>Close</h4>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WriteAReview;
