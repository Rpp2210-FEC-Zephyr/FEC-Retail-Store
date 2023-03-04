import React, {useState, useEffect } from 'react';

import ReactDOM from 'react-dom'
import $ from 'jquery';
import ProductOverview from './components/ProductOverview.jsx';
import RatingsAndReviews from './components/RatingsAndReviews.jsx';
import QuestionsAndAnswers from './components/QuestionsAndAnswers.jsx';
import RelatedItems from './components/RelatedItemsAndOutfitCreation.jsx';


const App = () =>{
  const [wait, setWait] = useState([])
  const [data, setData] = useState([])
  const [style, setStyle] = useState([])

  const getStyles = (id) =>{
    console.log('the ID', id)
    $.ajax({
      type: 'GET',
      url: '/Styles',
      data: {id: id },
      success: (data) =>{
        console.log('syle data', data)
        setStyle(data)
        console.log('sytle', style)




      }
    })

  }

  const getProducts = () =>{
    $.ajax({
      type: 'GET',
      url: '/Products',
      success: (data) =>{
        console.log(data)
       setData(data)
       setWait('waiting')



      }
    })
  }



  useEffect(() =>{
    getProducts()


  }, [])

  useEffect(() =>{
    console.log('the data', data)

   getStyles(71700)

  }, [wait])


    return (
      <div>
      <ProductOverview item = {style}/>
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