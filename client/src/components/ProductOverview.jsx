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
   <div class="wrapper" >
   <img src="https://filmswot.files.wordpress.com/2018/01/coco_dominates_chinese_box_office_.jpg" />
      <img src="https://www.foundry.com/sites/default/files/inline-images/Images_003_0.jpg" />
      <img src="https://www.foylefilmfestival.org/sites/default/files/COCO%20main%20image%203.jpg" />
      <img src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2017%2F11%2Fcoco_c330_56b_pub-pub16n-186_rgb-2000.jpg" />
   </div>

</div>
<div class = 'slogan'>PRODUCT SLOGAN</div>

        </div>

        <div class = 'right'>
          <TbStarsFilled />
          <div class = 'category'>
            CATEGORY
          </div>
          <div class = 'ProductName'>
            PRODUCT NAME
          </div>
          <div class = 'price'>
            $369
          </div>
          <div class = 'style'>
            STYLE > SELECTED STYLE
          </div>

          <div class = 'StyleContainer'>
            <div class = 'StyleChoose'>
              image
            </div>
            <div class = 'StyleChoose'>
              image
            </div>
            <div class = 'StyleChoose'>
              image
            </div>
            <div class = 'StyleChoose'>
              image
            </div>
            <div class = 'StyleChoose'>
              image
            </div>
            <div class = 'StyleChoose'>
              image
            </div>
            <div class = 'StyleChoose'>
              image
            </div>
            <div class = 'StyleChoose'>
              image
            </div>
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
