import React, {useState, useEffect } from 'react';
import { IconContext } from "react-icons";
import { HiOutlineX} from "react-icons/hi";
import { AiFillCheckCircle} from "react-icons/ai";
import $ from 'jquery';
const YourOutfitsItem =  ({item, URL }) =>{
   const [image, setImage] = useState(null)
  const getStyles = (id) =>{

    $.ajax({
      type: 'GET',
      url: '/Styles',
      data: {id: id },
      success: (data) =>{
        console.log('Outfit Data', data)
        setImage(data.results[0].photos[0].url)

      }
    })

  }
 useEffect(() =>{
  getStyles(item.id)

 }, [])

  return (
  <div onClick = {() =>{URL(item.id)}}class = 'RelatedItems'>
    <div class = 'RELATEDxmark'>
    <IconContext.Provider value={{ color: "black", size:"20px" }}>
          < HiOutlineX/>
    </IconContext.Provider>
    </div>
    <div class = 'RELATEIMG'> <img class = 'RIMG' src = {image ? image: null}/> </div>
     <div class ='RelatedCat'>Category: {item.category}</div>
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