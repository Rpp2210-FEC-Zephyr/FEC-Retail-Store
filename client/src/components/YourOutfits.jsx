import React, {useState, useEffect } from 'react';
import ReactDOM from 'react-dom'
import $ from 'jquery';
import YourOutfitsItem from './YourOutfitsItem.jsx'


const YourOutfits = () =>{
 const [outfit, setOutfit] = useState([])


  const getOutfits = () =>{
    const Star = JSON.parse(localStorage.getItem('favorites'));

    const data = Star.flat(Infinity).filter((i) => i !=null)
    setOutfit(data)
    console.log('ITEM DATA', data)
  }



  useEffect(() =>{
    getOutfits()

  }, [])





    return (
      <div class = 'OutfitList'>

      {outfit ? outfit.map((item) =>
      <YourOutfitsItem  item ={item} />
      ): null}
    </div>

    )
  }

export default YourOutfits;