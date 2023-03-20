import React, {useState, useEffect } from 'react';

const YourOutfitsItem =  ({item, Change }) =>{


 useEffect(() =>{
  console.log('THE ITEM', item)

 }, [])

  return (
  <div onClick = {() =>{Change(item)}}class = 'RelatedItems'>
   <div>{item.name}</div>

  </div>
  )

}

export default YourOutfitsItem;