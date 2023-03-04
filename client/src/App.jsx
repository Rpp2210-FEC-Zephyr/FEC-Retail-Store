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



  }, [])




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