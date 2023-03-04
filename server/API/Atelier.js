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
module.exports.getProducts = getProducts
module.exports.getStyles = getStyles