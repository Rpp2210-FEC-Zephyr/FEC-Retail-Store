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



const ProductOverview = ({main, Outfits}) =>{
  const [show, setShow] = useState([])
  const [style, setStyle] = useState([])
  const [skus, setSkus] = useState([])
  const [feature, setFeature] = useState([])
  const [cSize , setCSize] = useState(null)
  const [cQuant, setCQuant] = useState(null)
  const [cPrice, setCPrice] = useState(null)
  const [quantity, setQuantity] = useState([])
  const [rating, setRating] = useState(null)

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
      Outfits(Favorites.Toggle(main))

     }else{
      localStorage.setItem('favorites', JSON.stringify([ main]));
      Outfits(Favorites.Toggle(main))
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
    getBag()
  }





}

  const ImageExpander = () =>{

      setTimeout(() => {
        // Your logic here
        Popup.ImageExpander()
        Popup.Selected()

        ImageExpander();
      }, 1000);

  }
  const getReviews = (id) => {
    $.ajax({
      type: 'GET',
      url: '/reviews',
      data: {
        product_id: id, // NEED VARIABLE PRODUCT_ID
        count: 10,
        sort: 'relevant',
      },
      success: (data) => {
        var sum = 0

        for (var i = 0 ; i < data.results.length; i++){
          sum += data.results[i].rating

        }


        setRating(sum/data.results.length)


      }
    })
  }









  useEffect(() =>{
    if(main.id != undefined){


      getStyles(main.id)
      getFeatures(main.id)
      getReviews(main.id)
      ImageExpander()
      Popup.Selected()
      Favorites.Status(main)
      Outfits(Favorites.showOutfit())



    }





  },[main])



    return (
      <div className = 'productOverview'>

        <div className = 'left'>


    <div className="slider">
      <div className="slides">
      {show.length != 0 ? show.photos.map( (photo, index) => <input type= "radio" name = "radio-btn" id = {`radio${index + 1}`}/>
        ) : null}


        <div className="slide first">
          <img src= {show.length != 0 ? show.photos[0].url : null} alt="" />
        </div>
        {/* show.photos.slice(1, 4) */}
        {show.length != 0 ? show.photos.slice(1).map( (photo) => <div className = 'slide'>
        <img src= {photo.url} alt="" className = 'ProductOverviewIMG'/>
        </div>  ) : null}


        <div className = 'Popup'>
          <span>&times;</span>
          <img src = "" alt="" />

        </div>

        <div className="navigation-auto">
        {show.length != 0 ? show.photos.map( (photo, index) => <div className = {`auto-btn${index + 1}`}>
        </div>  ) : null}
        </div>
      </div>

      <div className="navigation-manual">
      {show.length != 0 ? show.photos.map( (photo, index) => <label htmlFor = {`radio${index + 1}`} className = "manual-btn">
        </label>  ) : null}

      </div>

    </div>
    <div className ='slogan'>{main.slogan}</div>
    <div className = 'desc'>{main.description}</div>


        </div>

        <div className = 'right'>
          <div className = 'productReview'>
          {rating ? <RatingSystem obj = {{rating: rating}}/> : null}
         <div className = 'scroll'>
            Show All Reviews
         </div>
         </div>
          <div className = 'category'>
          {main ? main.category : null}
          </div>
          <div className = 'ProductName'>
            {main ? main.name : null}
          </div>
          <div className = 'price'>
            {show.sale_price ?  <div className = 'priceC'><div className = 'PriceCross'>${show.original_price}</div><div className = 'PriceSale'> ${show.sale_price}
</div> </div>: <div>${show.original_price} </div>}
          </div>

          <div className = 'style'>
            STYLE >   <div className = 'styleSelect'> {show ? show.name : null} </div>
          </div>

          <div className = 'StyleContainer'>

            {style.length != 0 ? style.results.map((item, index) =>

              <div onClick = {(e) => {Change(item, index)}} className = 'StyleChoose'>
              <div className = 'selected' id = {index} style = {index == 0 ? {visibility: "visible"} : {visibility: "hidden"} }>
            <IconContext.Provider value={{ color: "#40D3DC", size:"20px" }}>
              <AiFillCheckCircle />
              </IconContext.Provider>
              </div>
                <div className = 'textBox'>
                 <p className = 'text head'>{item.name}</p>
                 </div>
                 <img src= {item.photos[0].url} alt="" />
                  </div>
              ):null}

          </div>
          <div className = 'select'>

          <select onChange = {(e) =>{onQuan(e.target.value); onCSize(e.target.value)}}   className="SelectSize" id="Sizes">
            <option defaultValue="selected" >
              Choose Size
            </option>
            {skus.length !=0 ? Object.keys(skus).map((size) => <option value = {`${skus[size].quantity} ${skus[size].size}`}>{skus[size].size} </option>): null}
          </select>
          <select  onChange = {(e) =>{onCQuan(e.target.value)}}className="SelectNumber" id="Number">
            {quantity.length !=0 ? quantity.map((num) =><option value = {num}>{num} </option>) : null}

          </select>

          </div>
          <div className = 'Bag'>
          <ul className="notifications"></ul>
          <div className="buttons">

            <button onClick ={() =>{addBag()}} className = 'Add buttons btn' > <div className = 'addComp'>
              Add To Bag
              </div>
              <div className = 'icon'>
              <IconContext.Provider value={{ color: "white", size:"40px" }}>
              < IoAddCircleOutline  />
              </IconContext.Provider>
              </div>
              </button>
              </div>

          <input type="checkbox" id="star" />
<label onClick = {() =>{
  Favor()
}}className = 'label' id="info" htmlFor="star">

  <svg viewBox="0 0 24 24">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
  </svg>
</label>


          </div>
          <div>

          </div>

         <div className = 'feature'>
         <div className="vertical-divider"> ㅤ</div>

          <ul className  = 'featurelist'>
            {feature.length !=0 ? feature.map((feat) => <li className = 'featureitem'>
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
