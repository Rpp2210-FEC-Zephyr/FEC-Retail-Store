import React, {useState, useEffect } from 'react';

import ReactDOM from 'react-dom'
import $ from 'jquery';
import ProductOverview from './components/ProductOverview.jsx';
import RatingsAndReviews from './components/RatingsAndReviews.jsx';
import QuestionsAndAnswers from './components/QuestionsAndAnswers.jsx';
import RelatedItems from './components/RelatedItemsAndOutfitCreation.jsx';


const App = () =>{

  const [data, setData] = useState([])
  const [style, setStyle] = useState([])

  const getStyles = (id) =>{

    $.ajax({
      type: 'GET',
      url: '/Styles',
      data: {id: id },
      success: (data) =>{

        setStyle(data)
      }
    })

  }

  const getProducts = () =>{
    $.ajax({
      type: 'GET',
      url: '/Products',
      success: (data) =>{

       setData(data)
      }
    })
  }



  useEffect(() =>{
    getStyles('71697');
    getProducts();
  }, [])


    return (
      <div>
      <ProductOverview item = {style}/>
      <RatingsAndReviews />
      <QuestionsAndAnswers />
      <RelatedItems item = {style} getProducts = {getProducts} data = {data} getStyles = {getStyles}/>
      </div>
    )
  }

  //style contains the current product

//export default App

ReactDOM.render(
  <App />
, document.getElementById('app'))