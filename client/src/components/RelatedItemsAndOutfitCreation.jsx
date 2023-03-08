import React, {useState, useEffect } from 'react';
import ReactDOM from 'react-dom'
import $ from 'jquery';


//this item is the current style
//need to get all the products and then get the items images and related characteristics
const RelatedItemsAndOutfitCreation = ({item, getProducts, data}) =>{



  const related = () => {
    console.log(data.forEach(el => console.log(el.id)));
    console.log(item.product_id, 'hi'); //this returns an object but i just need the id
  }



    return (
      <div>
        {related()} RelatedItemsAndOutfitCreation hi
      </div>

    )
  }

export default RelatedItemsAndOutfitCreation;