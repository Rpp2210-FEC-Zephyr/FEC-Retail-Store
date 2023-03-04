import React, {useState, useEffect } from 'react';
import { TbStarsFilled } from "react-icons/tb";
import ReactDOM from 'react-dom'
import $ from 'jquery';





const ProductOverview = ({item}) =>{
  const [main, setMain] = useState([])



  const onState = () =>{

    if(item.length !=0 ){
      setMain(item.results[0])
      console.log('YES')
    }
    console.log('CALLED')
  }





  useEffect(() =>{
    onState()
    setMain(item.results[0])

  },[])



    return (
      <div class = 'productOverview'>
        <div class = 'left'>
        <div class="container">
   <div class="wrapper">
    {main.length != 0 ? console.log('mian', main) : null}
   </div>

</div>
        </div>

        <div class = 'right'>
        <TbStarsFilled />
          {item ? item.name : null}
        </div>
          {item ? item.content : null}
        </div>

    )
  }

export default ProductOverview;
