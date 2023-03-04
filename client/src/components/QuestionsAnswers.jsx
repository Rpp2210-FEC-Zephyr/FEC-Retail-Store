import React, {useState, useEffect } from 'react';

import ReactDOM from 'react-dom'
import $ from 'jquery';




const  = () =>{


    return (
      <ProductOverview />
      <RatingsAndReviews />
      <QuestionsAndAnswers />
      <RelatedItems />
    )
  }

//export default App

ReactDOM.render(
  <App />
, document.getElementById('app'))