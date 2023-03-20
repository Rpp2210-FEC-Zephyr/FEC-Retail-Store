import React, {useState, useEffect } from 'react';
import { TbStarsFilled } from "react-icons/tb";
import { IoAddCircleOutline} from "react-icons/io5";
import { GiHamburgerMenu} from "react-icons/gi";
import { BsCheck2Square} from "react-icons/bs";
import { IconContext } from "react-icons";
import { AiOutlineCheckCircle} from "react-icons/ai";
import { AiFillCheckCircle} from "react-icons/ai";
import RatingSystem from './RatingSystem.jsx'
import ReactDOM from 'react-dom'
import $ from 'jquery';

const Popup = require('../Notification.jsx')
const Favorites = require('./Favorites.jsx')



const ProductOverview = ({main}) =>{
  const [show, setShow] = useState([])
  const [style, setStyle] = useState([])
  const [skus, setSkus] = useState([])
  const [feature, setFeature] = useState([])
  const [cSize , setCSize] = useState(null)
  const [cQuant, setCQuant] = useState(null)
  const [cPrice, setCPrice] = useState(null)
  const [quantity, setQuantity] = useState([])

  const getStyles = (id) =>{

    $.ajax({
      type: 'GET',
      url: '/Styles',
      data: {id: id },
      success: (data) =>{
        console.log('Style Data', data)

        setStyle(data)
        setShow(data.results[0])
        setCPrice(data.results[0].original_price)
        setSkus(data.results[0].skus)
      }
    })

  }

  const getFeatures = (id) =>{

    $.ajax({
      type: 'GET',
      url: '/Features',
      data: {id: id },
      success: (data) =>{
        console.log('Feature Data', data.features)

        setFeature(data.features)

      }
    })
  }

  const onQuan = (quan) =>{

    quan = quan.split(' ')[0]

    quan = parseInt(quan)
    quan = quan + 1

    var results = []

    for(var i = 1; i < quan ; i++){
      results.push(i)
    }

    setQuantity(results)
    return


  }

  const onCSize = (csize) =>{
    csize = csize.split(' ')[1]

    if(csize == "Size"){
      setCSize(null)
      setCQuant(null)
    }else{
      setCSize(csize)
      setCQuant(1)
    }

  }
  const onCQuan = (cquan) =>{
    cquan = parseInt(cquan)
    setCQuant(cquan)


  }

  const Favor = () => {

     const Star = JSON.parse(localStorage.getItem('favorites'));
     if(Star != null){
      localStorage.setItem('favorites', JSON.stringify([Star, main]))
      Favorites.Toggle(main)

     }else{
      localStorage.setItem('favorites', JSON.stringify([ main]));
      Favorites.Toggle(main)
     }
  }


  const Change = (item, index) =>{
   const mySelect = document.getElementById(`${index}`);



    const Selecet = document.querySelectorAll('.StyleChoose')
    const check = document.querySelectorAll('.selected')


    Selecet.forEach(element =>{
    element.addEventListener('click', ()=> {


        check.forEach(el => {
        el.style.visibility = "hidden"
        })
  })
    })

  mySelect.style.visibility = "visible"


   setShow(item)
   Favorites.Status(main)
   setSkus(item.skus)


}

  const ImageExpander = () =>{

      setTimeout(() => {
        // Your logic here
        Popup.ImageExpander()
        Popup.Selected()

        ImageExpander();
      }, 1000);

  }




  const addBag = () =>{
    if(cSize == null || cQuant == null){

      Popup.Alert("error")

    }else{
      console.log('Current', show,cSize, cQuant)
      const bag = JSON.parse(localStorage.getItem('bag'));


      if(bag != null){
        if(bag.length == 10){
          Popup.Alert("warning")
        }else{
          Popup.Alert("success")
          localStorage.setItem('bag', JSON.stringify([bag, { cloth: show, size: cSize, quant: cQuant, name: main.name }]));
        }
      }else{
        Popup.Alert("success")
        localStorage.setItem('bag', JSON.stringify([{ cloth: show, size: cSize, quant: cQuant, name: main.name  }]));
      }

    }





  }







  useEffect(() =>{
    if(main.id != undefined){
      getStyles(main.id)
      getFeatures(main.id)

      ImageExpander()
      Popup.Selected()
      Favorites.Status(main)


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
        <input type="radio" name="radio-btn" id="radio5" />
        <input type="radio" name="radio-btn" id="radio6" />
        <input type="radio" name="radio-btn" id="radio7" />

        <div class="slide first">
          <img src= {show.length != 0 ? show.photos[0].url : null} alt="" />
        </div>
        {/* show.photos.slice(1, 4) */}
        {show.length != 0 ? show.photos.slice(1).map( (photo) => <div class = 'slide'>
        <img src= {photo.url} alt="" />
        </div>  ) : null}


        <div class = 'Popup'>
          <span>&times;</span>
          <img src = "" alt="" />

        </div>

        <div class="navigation-auto">
          <div class="auto-btn1"></div>
          <div class="auto-btn2"></div>
          <div class="auto-btn3"></div>
          <div class="auto-btn4"></div>
          <div class="auto-btn5"></div>
          <div class="auto-btn6"></div>
        </div>
      </div>

      <div class="navigation-manual">
        <label for="radio1" class="manual-btn"></label>
        <label for="radio2" class="manual-btn"></label>
        <label for="radio3" class="manual-btn"></label>
        <label for="radio4" class="manual-btn"></label>
        <label for="radio5" class="manual-btn"></label>
        <label for="radio6" class="manual-btn"></label>
      </div>

    </div>
    <div class ='slogan'>{main.slogan}</div>
    <div class = 'desc'>{main.description}</div>


        </div>

        <div class = 'right'>
          <div class = 'productReview'>
         <RatingSystem obj = {{rating: 4.4}}/>
         <div class = 'scroll'>
            Show All Reviews
         </div>
         </div>
          <div class = 'category'>
          {main ? main.category : null}
          </div>
          <div class = 'ProductName'>
            {main ? main.name : null}
          </div>
          <div class = 'price'>
            {main ? `$${cPrice}` : null}
          </div>

          <div class = 'style'>
            STYLE >   <div class = 'styleSelect'> SELECTED STYLE </div>
          </div>

          <div class = 'StyleContainer'>

            {style.length != 0 ? style.results.map((item, index) =>

              <div onClick = {(e) => {Change(item, index)}} class = 'StyleChoose'>
              <div class = 'selected' id = {index} style = {index == 0 ? {visibility: "visible"} : {visibility: "hidden"} }>
            <IconContext.Provider value={{ color: "#40D3DC", size:"20px" }}>
              <AiFillCheckCircle />
              </IconContext.Provider>
              </div>
                <div class = 'textBox'>
                 <p class = 'text head'>{item.name}</p>
                 </div>
                 <img src= {item.photos[0].url} alt="" />
                  </div>
              ):null}

          </div>
          <div class = 'select'>

          <select onChange = {(e) =>{onQuan(e.target.value); onCSize(e.target.value)}}   class="SelectSize" id="Sizes">
            <option selected="selected" >
              Choose Size
            </option>
            {skus.length !=0 ? Object.keys(skus).map((size) => <option value = {`${skus[size].quantity} ${skus[size].size}`}>{skus[size].size} </option>): null}
          </select>
          <select  onChange = {(e) =>{onCQuan(e.target.value)}}class="SelectNumber" id="Number">
            {quantity.length !=0 ? quantity.map((num) =><option value = {num}>{num} </option>) : null}

          </select>

          </div>
          <div class = 'Bag'>
          <ul class="notifications"></ul>
          <div class="buttons">

            <button onClick={() =>{addBag()}} class = 'Add buttons btn' > <div class = 'addComp'>
              Add To Bag
              </div>
              <div class = 'icon'>
              <IconContext.Provider value={{ color: "white", size:"40px" }}>
              < IoAddCircleOutline  />
              </IconContext.Provider>
              </div>
              </button>
              </div>

          <input type="checkbox" id="star" />
<label onClick = {() =>{
  Favor()
}}class = 'label' id="info" for="star">

  <svg viewBox="0 0 24 24">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
  </svg>
</label>


          </div>
          <div>

          </div>

         <div class = 'feature'>
         <div class="vertical-divider"> ㅤ</div>

          <ul class  = 'featurelist'>
            {feature.length !=0 ? feature.map((feat) => <li class = 'featureitem'>
              <BsCheck2Square /> ㅤ
              {feat.value}
              </li>) : null}
          </ul>
         </div>


        </div>

        </div>

    )
  }

export default ProductOverview;
