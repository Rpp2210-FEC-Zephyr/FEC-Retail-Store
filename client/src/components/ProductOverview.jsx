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
   <img src="https://filmswot.files.wordpress.com/2018/01/coco_dominates_chinese_box_office_.jpg" />
      <img src="https://www.foundry.com/sites/default/files/inline-images/Images_003_0.jpg" />
      <img src="https://www.foylefilmfestival.org/sites/default/files/COCO%20main%20image%203.jpg" />
      <img src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2017%2F11%2Fcoco_c330_56b_pub-pub16n-186_rgb-2000.jpg" />

   </div>

</div>
        </div>

        <div class = 'right'>
        World

        </div>

        </div>

    )
  }

export default ProductOverview;
