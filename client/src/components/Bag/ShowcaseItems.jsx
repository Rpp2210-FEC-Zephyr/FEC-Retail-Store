import React, {useState, useEffect } from 'react';

const ShowcaseItem =  ({item }) =>{
  const [price , setPrice] = useState([])


  const setStates = () =>{
    setPrice(parseInt(item.cloth.original_price))

  }


  useEffect(() =>{
    setStates()

  }, [])


  return (
   <div class = 'bagContainer'>
    <div class="book">
    <div class = 'bagInfo'>
        <div>{item.name}</div>
      <div class = 'info'>Size: {item.size}</div>
      <div class = 'info'> Quantity: {item.quant}</div>
      <div class = 'info'> Price: ${item.cloth.original_price}</div>
      <div class = 'info'> Total: ${price * item.quant}</div>
        </div>
    <div class="cover">
    <img class = 'bagImage'src= {item.cloth.photos[0].url} alt={item.name} />

    </div>
   </div>

   </div>
  )

}

export default ShowcaseItem;