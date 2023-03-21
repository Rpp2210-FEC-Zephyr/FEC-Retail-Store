import React, {useState, useEffect } from 'react';

const YourOutfitsItem =  ({item, URL }) =>{


 useEffect(() =>{
  console.log('THE ITEM', item)

 }, [])

  return (
  <div onClick = {() =>{URL(item.id)}}class = 'RelatedItems'>
    <div class = 'RELATEIMG'> </div>
     <div class ='RelatedCat'> {item.category}</div>
        <div>
          {item.name}
         </div>
         <div>${item.default_price} </div>

         <div>

         </div>

  </div>
  )

}

export default YourOutfitsItem;