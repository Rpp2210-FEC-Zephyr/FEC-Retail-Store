const axios = require('axios');
const AtelierAPI = 'https://app-hrsei-api.herokuapp.com/api/fec2/rpp2210/'
const token = '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'
const Promise = require('bluebird')
//
const getProducts = (callback) =>{

  const options = {
    method: 'GET',
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products',
    headers: {
      'Authorization': `${token}`
    }
  };

  axios(options).then((products) =>{

    callback(null, products.data)
  })

}

const getProductsID = (id, callback) =>{
  const options = {
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${id}`,
    headers: {
      'Authorization': `${token}`
    }
  };
  axios(options).then((products) =>{

    callback(null, products.data)
  })

}

const getStyles = (id, callback) => {

  const options = {
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${id}/styles`,
    headers: {
      'Authorization': `${token}`
    }
  };

  axios(options).then((products) =>{

    callback(null, products.data)
  })

}




const getArrayProductID = async (arr) =>{
  var Data = []
  for(var i = 0; i < arr.length; i++){
  const ID = arr[i]
  const options = {
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${ID}`,
    headers: {
      'Authorization': `${token}`
    }
  };
  await axios(options).then((products) =>{

    Data.push(products.data)
  })
  }
  return Data

}



const getRelated = (id, callback) => {

  const options = {
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${id}/related`,
    headers: {
      'Authorization': `${token}`
    }
  };


  axios(options).then((products) =>{
    getArrayProductID(products.data).then((prod) =>{

      callback(null, prod)
    })

  })

}

const getFeatures = (id, callback) =>{
  const options = {
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${id}`,
    headers: {
      'Authorization': `${token}`
    }
  };

  axios(options).then((products) =>{

    callback(null, products.data)
  })
}

const getReviews = (id, callback) => {
  const options = {
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews?product_id=${id}`,
    headers: {
      'Authorization': `${token}`
    }
  }
  axios(options)
  .then((reviews) => {

    callback(null, reviews.data);
  })
}

module.exports.getProducts = getProducts
module.exports.getStyles = getStyles
module.exports.getReviews = getReviews
module.exports.getFeatures = getFeatures
module.exports.getRelated = getRelated
module.exports.getProductsID = getProductsID
