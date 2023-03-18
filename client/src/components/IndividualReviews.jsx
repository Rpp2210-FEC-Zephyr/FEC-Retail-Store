import React from 'react';
import RatingSystem from './RatingSystem.jsx';




const IndividualReview = (props) => {

  

 return (
   <div>
      <RatingSystem obj={props.obj} review={true}/>
     <div>
       <h3>{props.obj.summary}</h3>
       <h4>{props.obj.body}</h4>
    </div>
     <div>Helpful? Yes({props.obj.helpfulness}) | Report</div>
     {props.obj.recommend ? <div><i class="fa-solid fa-check"></i>        I recommend this product!</div> : null}
     {props.obj.photos.length > 0 ? props.obj.photos.map((photo) => {
      return <div>{photo.url}</div>
    //  <img src={photo.url} alt="Supposed to be Image Here!!!"></img>
    }) : null }
    {props.obj.response !== null ? 
      <div>
        <h3>Response: </h3>
        <div>{props.obj.response}</div>
      </div>
      : null}
   </div>
 )


}


export default IndividualReview;