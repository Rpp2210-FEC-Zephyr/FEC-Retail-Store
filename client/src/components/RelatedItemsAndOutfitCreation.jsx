import React, {useState, useEffect } from 'react';
import ReactDOM from 'react-dom'
import $ from 'jquery';



const RelatedItemsAndOutfitCreation = ({ main, Change }) =>{
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

      getRelated(main.id)



    }


  },[main])



    return (
      <div class = 'Related'>

    {related ? related.map((item) =>
      <div onClick = {() =>{Change(item)}}class = 'RelatedItems'>
        <div>{item.name} </div>

         </div>
      ): null}
    </div>




    )
  }

export default RelatedItemsAndOutfitCreation;