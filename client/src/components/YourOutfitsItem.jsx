import React, {useState, useEffect } from 'react';

const YourOutfitsItem =  ({item }) =>{


 useEffect(() =>{
  console.log('THE ITEM', item)

 }, [])

  return (
  <div class = 'OutfitCard'>
   <div>{item.name}</div>

  </div>
  )

}

export default YourOutfitsItem;