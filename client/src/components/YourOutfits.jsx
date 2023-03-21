import React, {useState, useEffect } from 'react';
import ReactDOM from 'react-dom'
import $ from 'jquery';
import YourOutfitsItem from './YourOutfitsItem.jsx'


const YourOutfits = ( {outfit, URL }) =>{


    return (
      <div class = 'OUTFIT CAROSEL'>
       <div class = 'Title'> Your Outfits</div>
      <div class = 'Related'>

      {outfit ? outfit.map((item) =>
      <YourOutfitsItem  item ={item} URL ={URL}/>
      ): null}
    </div>
    </div>

    )
  }

export default YourOutfits;