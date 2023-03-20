import React, {useState, useEffect } from 'react';
import ReactDOM from 'react-dom'
import $ from 'jquery';
import YourOutfitsItem from './YourOutfitsItem.jsx'


const YourOutfits = ( {outfit}) =>{


 useEffect(() =>{
  console.log('CURRENT OUTFIT', outfit)

 }, [outfit])
    return (
      <div class = 'OutfitList'>

      {outfit ? outfit.map((item) =>
      <YourOutfitsItem  item ={item} />
      ): null}
    </div>

    )
  }

export default YourOutfits;