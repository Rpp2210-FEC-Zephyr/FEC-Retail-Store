const axios = require("axios");
const AtelierAPI = "https://app-hrsei-api.herokuapp.com/api/fec2/rpp2210/";
const token = "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";
const Promise = require("bluebird");

const getProducts = (callback) => {
  const options = {
    method: "GET",
    url: "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products",
    headers: {
      Authorization: `${token}`,
    },
  };

  axios(options).then((products) => {
    callback(null, products.data);
  });
};

const getProductsID = (id, callback) => {
  const options = {
    method: "GET",
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${id}`,
    headers: {
      Authorization: `${token}`,
    },
  };
  axios(options).then((products) => {
    callback(null, products.data);
  });
};

const getStyles = (id, callback) => {
  const options = {
    method: "GET",
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${id}/styles`,
    headers: {
      Authorization: `${token}`,
    },
  };

  axios(options).then((products) => {
    callback(null, products.data);
  });
};

const getArrayProductID = async (arr) => {
  var Data = [];
  for (var i = 0; i < arr.length; i++) {
    const ID = arr[i];
    const options = {
      method: "GET",
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${ID}`,
      headers: {
        Authorization: `${token}`,
      },
    };
    await axios(options).then((products) => {
      Data.push(products.data);
    });
  }
  return Data;
};

const getRelated = (id, callback) => {
  const options = {
    method: "GET",
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${id}/related`,
    headers: {
      Authorization: `${token}`,
    },
  };

  axios(options).then((products) => {
    getArrayProductID(products.data).then((prod) => {
      callback(null, prod);
    });
  });
};

const getFeatures = (id, callback) => {
  const options = {
    method: "GET",
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${id}`,
    headers: {
      Authorization: `${token}`,
    },
  };

  axios(options).then((products) => {
    callback(null, products.data);
  });
};

const getQuestions = (product_id, callback) => {
  const options = {
    method: "GET",
    url: "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions",
    params: { product_id: product_id },
    headers: {
      Authorization: `${token}`,
    },
  };

  axios(options).then((questions) => {
    callback(null, questions.data);
  });
};

const getReviews = (id, sort, callback) => {
  const options = {
    method: "GET",
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews?product_id=${id}&sort=${sort}`,
    headers: {
      Authorization: `${token}`,
    },
  };
  axios(options).then((reviews) => {
    callback(null, reviews.data);
  });
};

const getReviewData = (id, callback) => {
  const options = {
    method: "GET",
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/meta/?product_id=${id}`,
    headers: {
      Authorization: `${token}`,
    },
  };
  axios(options).then((metadata) => {
    console.log("DATA RECEIVED FROM API FOR METADATA", metadata.data);
    callback(null, metadata.data);
  });
};

const updateHelpfulness = (id, callback) => {
  const options = {
    method: "PUT",
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/${id}/helpful`,
    data: {},
    headers: {
      Authorization: `${token}`,
    },
  };
  axios(options).then((data) => {
    console.log("id received from ajax call", id);
    console.log("DATA RECEIVED FROM API FOR helpfullness", data.data);
    callback(null, data.data);
  });
};

module.exports.getProducts = getProducts;
module.exports.getStyles = getStyles;
module.exports.getReviews = getReviews;
module.exports.getFeatures = getFeatures;
module.exports.getRelated = getRelated;
module.exports.getProductsID = getProductsID;
module.exports.getQuestions = getQuestions;
module.exports.getReviewData = getReviewData;
module.exports.updateHelpfulness = updateHelpfulness;
