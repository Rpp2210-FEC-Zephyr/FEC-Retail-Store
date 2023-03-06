import React, {useState, useEffect } from 'react';
import { TbStarsFilled } from "react-icons/tb";
import ReactDOM from 'react-dom'
import $ from 'jquery';





const ProductOverview = ({main}) =>{
  const [show, setShow] = useState([])
  const [style, setStyle] = useState([])

  const getStyles = (id) =>{

    $.ajax({
      type: 'GET',
      url: '/Styles',
      data: {id: id },
      success: (data) =>{

        setStyle(data)
        setShow(data.results[0])
        console.log('STYLE DATA', data)





      }
    })

  }
  const Change = (item) =>{
   setShow(item)
  }





  useEffect(() =>{
    if(main.id != undefined){
      console.log('main ID', main)
      getStyles(main.id)
    }




  },[main])



    return (
      <div class = 'productOverview'>
        <div class = 'left'>

    <div class="slider">
      <div class="slides">

        <input type="radio" name="radio-btn" id="radio1" />
        <input type="radio" name="radio-btn" id="radio2" />
        <input type="radio" name="radio-btn" id="radio3" />
        <input type="radio" name="radio-btn" id="radio4" />
        <div class="slide first">
          <img src= {show.length != 0 ? show.photos[0].url : null} alt="" />
        </div>
        {show.length != 0 ? show.photos.slice(1, 4).map( (photo) => <div class = 'slide'>
        <img src= {photo.url} alt="" />
        </div> ) : null}

        <div class="navigation-auto">
          <div class="auto-btn1"></div>
          <div class="auto-btn2"></div>
          <div class="auto-btn3"></div>
          <div class="auto-btn4"></div>


        </div>

      </div>

      <div class="navigation-manual">
        <label for="radio1" class="manual-btn"></label>
        <label for="radio2" class="manual-btn"></label>
        <label for="radio3" class="manual-btn"></label>
        <label for="radio4" class="manual-btn"></label>


      </div>

    </div>


        </div>

        <div class = 'right'>
          <TbStarsFilled />
          <div class = 'category'>
          {main ? main.category : null}
          </div>
          <div class = 'ProductName'>
            {main ? main.name : null}
          </div>
          <div class = 'price'>
            {main ? `$${main.default_price}` : null}
          </div>
          <div class = 'style'>
            STYLE > SELECTED STYLE
          </div>

          <div class = 'StyleContainer'>
            {style.length != 0 ? style.results.map((item) => <div onClick = {(e) => {Change(item)}} class = 'StyleChoose'><img src= {item.photos[0].url} alt="" /> <div class = 'textBox'> <p class = 'text head'>{item.name}</p> </div></div>):null}

          </div>
          <div class = 'select'>
          <select class="SelectSize" id="Sizes">
            <option value="S">Small</option>
            <option value="M">Medium</option>
            <option value="L">Large</option>
            <option value="XL">Extra Large</option>
          </select>
          <select class="SelectNumber" id="Number">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          </div>
          <div class = 'Bag'>

          <input type="checkbox" id="star" />
<label for="star">
  <svg viewBox="0 0 24 24">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
  </svg>
</label>


          </div>
          <div>

          </div>



        </div>

        </div>

    )
  }

export default ProductOverview;
