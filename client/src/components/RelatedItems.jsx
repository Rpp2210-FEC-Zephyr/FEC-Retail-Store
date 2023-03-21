import React, {useState, useEffect } from 'react';
import ReactDOM from 'react-dom'
import $ from 'jquery';



const RelatedItems = ({ item, URL }) =>{

  const [image, setImage] = useState(null)
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

  useEffect(() =>{
    getStyles(item.id)

   }, [])





    return (
      <div onClick = {() =>{URL(item.id)}}class = 'RelatedItems'>
        <div class = 'RELATEIMG'> <img class = 'RIMG' src = {image ? image: null}/> </div>
        <div class ='RelatedCat'> Category: {item.category}</div>
        <div>
          {item.name}
         </div>
         <div>${item.default_price} </div>

         <div>

         </div>

         </div>






    )
  }

export default RelatedItems;