const axios = require('axios');
const AtelierAPI = 'https://app-hrsei-api.herokuapp.com/api/fec2/rpp2210/'
const token = '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'

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
    console.log('DATA REVIEWED FROM API', reviews.data);
    callback(null, reviews.data);
  })
}

const getReviewData = (id, callback) => {
  const options = {
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/meta/?product_id=${id}`,
    headers: {
      'Authorization': `${token}`
    }
  }
  axios(options)
  .then((metadata) => {
    console.log('DATA RECEIVED FROM API FOR METADATA', metadata.data);
    callback(null,metadata.data);
  })
}


module.exports.getProducts = getProducts
module.exports.getStyles = getStyles
module.exports.getReviews = getReviews
module.exports.getFeatures = getFeatures
module.exports.getReviewData = getReviewData