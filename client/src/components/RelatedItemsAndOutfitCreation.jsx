import React, {useState, useEffect } from 'react';
import ReactDOM from 'react-dom'
import $ from 'jquery';
import RelatedItems from './RelatedItems.jsx'


const RelatedItemsAndOutfitCreation = ({ main, URL }) =>{
  const [related, setRelated] = useState(null)




  const getRelated = (id) =>{

    $.ajax({
      type: 'GET',
      url: '/Related',
      data: {id: id },
      success: (data) =>{
        console.log('Related Data', data)
        setRelated(data)

      }
    })

  }



  useEffect(() =>{
    if(main.id != undefined){
      console.log('RELATED MAIN', main.id)

      getRelated(main.id)



    }


  },[main])



    return (
      <div class = 'RELATE CAROSEL'>
       <div class = 'Title'> RELATED ITEMS</div>
       <div class ='Related'>
    {related ? related.map((item) =>
        < RelatedItems item = {item} URL = {URL}/>
      ): null}
      </div>
    </div>




    )
  }

export default RelatedItemsAndOutfitCreation;