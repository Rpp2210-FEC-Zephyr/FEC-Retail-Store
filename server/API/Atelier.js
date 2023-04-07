require("dotenv").config();
const axios = require("axios");
const AtelierAPI = "https://app-hrsei-api.herokuapp.com/api/fec2/rpp2210/";
const token = process.env.MY_API_TOKEN;

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

// (and Answers)
const getQuestions = (product_id, callback) => {
  const options = {
    method: "GET",
    url: "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions",
    params: {
      product_id: product_id,
      page: 1,
      count: 1000000,
    },
    headers: {
      Authorization: `${token}`,
    },
  };

  axios(options).then((questions) => {
    callback(null, questions.data);
  });
};

const postQuestion = (body, name, email, product_id, callback) => {
  axios
    .post(
      "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions",
      {
        body: body,
        name: name,
        email: email,
        product_id: product_id,
      },
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    )
    .then((data) => {
      callback(null, data.data);
    })
    .catch((err) => {
      callback(err);
    });
};

const postAnswer = (question_id, body, name, email, photos, callback) => {
  axios
    .post(
      `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions/${question_id}/answers`,
      {
        body: body,
        name: name,
        email: email,
        photos: photos,
      },
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    )
    .then((data) => {
      callback(null, data.data);
    })
    .catch((err) => {
      callback(err);
    });
};

const putQuestionHelpful = (question_id, callback) => {
  axios
    .put(
      `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions/${question_id}/helpful`,
      {},
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    )
    .then((data) => {
      callback(null, data.data);
    })
    .catch((err) => {
      callback(err);
    });
};

const putAnswerHelpful = (answer_id, callback) => {
  axios
    .put(
      `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/answers/${answer_id}/helpful`,
      {},
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    )
    .then((data) => {
      callback(null, data.data);
    })
    .catch((err) => {
      callback(err);
    });
};

const putQuestionReport = (question_id, callback) => {
  axios
    .put(
      `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions/${question_id}/report`,
      {},
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    )
    .then((data) => {
      callback(null, data.data);
    })
    .catch((err) => {
      callback(err);
    });
};

const putAnswerReport = (answer_id, callback) => {
  axios
    .put(
      `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/answers/${answer_id}/report`,
      {},
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    )
    .then((data) => {
      callback(null, data.data);
    })
    .catch((err) => {
      callback(err);
    });
};

const getReviews = (id, sort, callback) => {
  const options = {
    method: "GET",
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews`,
    // url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews?product_id=${id}&sort=${sort}`,
    headers: {
      Authorization: `${token}`,
    },
    params: {
      product_id: id,
      page: 1,
      count: 100000,
      sort: sort,
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
module.exports.postQuestion = postQuestion;
module.exports.postAnswer = postAnswer;
module.exports.putQuestionHelpful = putQuestionHelpful;
module.exports.putAnswerHelpful = putAnswerHelpful;
module.exports.putQuestionReport = putQuestionReport;
module.exports.putAnswerReport = putAnswerReport;
module.exports.getReviewData = getReviewData;
module.exports.updateHelpfulness = updateHelpfulness;
