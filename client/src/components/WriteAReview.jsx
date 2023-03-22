import React, { useState} from 'react';

const WriteAReview = () => {

    const[popUp, setpopUp] = useState(false);

    const handleAddReview = () => {
        setpopUp(true);
      }

    const closeAddReview = () => {
        setpopUp(false);
    }

    return (
        <div>
            <button onClick={handleAddReview}>ADD A REVIEW +</button>
            {popUp ?
            <div>
                <h4>Write Your Review!</h4>
                <div>Name: <input></input></div>
                <div>Email: <input></input></div>
                <div>Rating: <input></input></div>
                <div>Recommend: <input></input></div>
                <div>Summary: <input></input></div>
                <div>Description: <input></input></div>
                <div><input value="Example: Best purchase ever!"></input></div>
                <button onClick={closeAddReview}>SUBMIT!</button>
            </div> : null}
        </div>
    )

}

export default WriteAReview;