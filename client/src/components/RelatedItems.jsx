import React, {useState, useEffect } from 'react';
import ReactDOM from 'react-dom'
import $ from 'jquery';
import RatingSystem from './RatingSystem.jsx'


const RelatedItems = ({ item, URL }) =>{

  const [image, setImage] = useState(null)
  const [rating, setRating] = useState(null)
  const getStyles = (id) =>{

    $.ajax({
      type: 'GET',
      url: '/Styles',
      data: {id: id },
      success: (data) =>{
        console.log('Outfit Data', data)
        setImage(data.results[0].photos[0].url)

      }
    })

  }

  const getReviews = (id) => {
    $.ajax({
      type: 'GET',
      url: '/reviews',
      data: {
        product_id: id, // NEED VARIABLE PRODUCT_ID
        count: 10,
        sort: 'relevant',
      },
      success: (data) => {
        setRating(data.count)
        console.log('RATING COUNT', data.count)

      }
    })
  }
  useEffect(() =>{
    getStyles(item.id)
    getReviews(item.id)
   }, [])





    return (
      <div onClick = {() =>{URL(item.id)}}class = 'RelatedItems'>
        <div class = 'RELATEIMG'> <img class = 'RIMG' src = {image ? image: null}/> </div>
        <div class ='RelatedCat'> Category: {item.category}</div>
        <div>
          {item.name}
         </div>
         <div>${item.default_price} </div>
         <div class = 'RelateRATING'>
         {rating ? <RatingSystem obj = {{rating: rating}}/> : null}
         </div>
         <div>

         </div>

         </div>






    )
  }

export default RelatedItems;