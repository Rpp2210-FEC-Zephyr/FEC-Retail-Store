import React, {useState, useEffect } from 'react';

const YourOutfitsItem =  ({item }) =>{


 useEffect(() =>{
  console.log('THE ITEM', item)

 }, [])

  return (
  <div class = 'OutfitCard'>
    <img class = 'OutfitIMG' src = {item.photos[0].url}/>

  </div>
  )

}

export default YourOutfitsItem;