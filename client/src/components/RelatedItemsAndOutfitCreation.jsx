import React, {useState, useEffect } from 'react';
import ReactDOM from 'react-dom'
import $ from 'jquery';


//this item is the current style
//need to get all the products and then get the items images and related characteristics
const RelatedItemsAndOutfitCreation = ({main}) =>{

  const [style, setStyle] = useState([])
  // const [show, setShow] = useState([])
  // const [skus, setSkus] = useState([])
  // const [cSize , setCSize] = useState(null)
  // const [cQuant, setCQuant] = useState(null)
  // const [quantity, setQuantity] = useState([])

  //i send the current product id from main
  const getStyles = (id) =>{
    $.ajax({
      type: 'GET',
      url: '/Styles',
      data: {id: id },
      success: (data) =>{
        setStyle(data); //this is where i set the style
        console.log('Style Data', data.results)
      }
    })
  }


  // const Info = (item) => {
  //   console.log(main,'main')
  //   getStyles(main.id)
  // }

  // <div onClick = {(e) => {Info(item)}}> </div>


  useEffect(() =>{
    if(main.id !== undefined){
      console.log('main', main)
      getStyles(main.id)
    }

  },[main])


    return (
      <div>
        {style.length !== 0 ? style.results.map((item) =>  <div>
          <div class = 'category'> Category {main ? main.category : null} </div>
          <div class = 'ProductName'> {main ? main.name : null} </div>
          <div class = 'price'> Price: {main ? main.default_price : null} </div>
          <div id="star"> star </div>
        <img src= {item.photos[0].url} alt="" />
        </div>) :null}
      </div>

    )
  }

export default RelatedItemsAndOutfitCreation;