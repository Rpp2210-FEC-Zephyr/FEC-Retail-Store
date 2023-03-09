import React, {useState, useEffect } from 'react';

import ShowcaseItem from './ShowcaseItems.jsx'
const Showcase =  ({show}) =>{



  return (
    <div class = 'RenderList'>


      {show ? show.map((item) =>
      <ShowcaseItem  item ={item} />
      ): null}
    </div>


  )

}

export default Showcase;