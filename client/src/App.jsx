import React, {useState, useEffect } from 'react';

import ReactDOM from 'react-dom'
import $ from 'jquery';
import ProductOverview from './components/ProductOverview.jsx';
import RatingsAndReviews from './components/RatingsAndReviews.jsx';
import QuestionsAndAnswers from './components/QuestionsAndAnswers.jsx';
import RelatedItems from './components/RelatedItemsAndOutfitCreation.jsx';


const App = () =>{


    return (
      <div>
      <ProductOverview />
      <RatingsAndReviews />
      <QuestionsAndAnswers />
      <RelatedItems />
      </div>
    )
  }

//export default App

ReactDOM.render(
  <App />
, document.getElementById('app'))