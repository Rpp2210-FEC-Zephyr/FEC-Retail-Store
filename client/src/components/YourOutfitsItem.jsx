import React, {useState, useEffect } from 'react';
import { IconContext } from "react-icons";
import { HiOutlineX} from "react-icons/hi";
import { AiFillCheckCircle} from "react-icons/ai";
const YourOutfitsItem =  ({item, URL }) =>{


 useEffect(() =>{
  console.log('THE ITEM', item)

 }, [])

  return (
  <div onClick = {() =>{URL(item.id)}}class = 'RelatedItems'>
    <div class = 'RELATEDxmark'>
    <IconContext.Provider value={{ color: "black", size:"20px" }}>
          < HiOutlineX/>
    </IconContext.Provider>
    </div>
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