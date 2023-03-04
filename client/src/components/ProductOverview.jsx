import React, {useState, useEffect } from 'react';
import { TbStarsFilled } from "react-icons/tb";
import ReactDOM from 'react-dom'
import $ from 'jquery';





const ProductOverview = ({item}) =>{
  const [main, setMain] = useState([])







  useEffect(() =>{


  },[])



    return (
      <div class = 'productOverview'>
        <div class = 'left'>
        <div class="container">
   <div class="wrapper">
    Hello

   </div>

</div>
        </div>

        <div class = 'right'>
        World

        </div>
          {item ? item.content : null}
        </div>

    )
  }

export default ProductOverview;
