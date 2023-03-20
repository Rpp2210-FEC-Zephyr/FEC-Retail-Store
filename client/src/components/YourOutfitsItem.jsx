import React, {useState, useEffect } from 'react';

const YourOutfitsItem =  ({item, URL }) =>{


 useEffect(() =>{
  console.log('THE ITEM', item)

 }, [])

  return (
  <div onClick = {() =>{URL(item.id)}}class = 'RelatedItems'>
   <div>{item.name}</div>

  </div>
  )

}

export default YourOutfitsItem;