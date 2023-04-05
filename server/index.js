require("dotenv").config();
const express = require("express");
const path = require("path");
API = require("./API/Atelier.js");

const app = express();

app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.use(express.static(path.join(__dirname, "../client/dist")));

app.use(express.json());

app.get("/Products", function (req, res) {
  API.getProducts((err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});
app.get("/ProductsID", function (req, res) {
  const { id } = req.query;
  API.getProductsID(id, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});
app.get("/Related", function (req, res) {
  const { id } = req.query;

  API.getRelated(id, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

app.get("/Styles", function (req, res) {
  const { id } = req.query;
  API.getStyles(id, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

app.get("/Features", function (req, res) {
  const { id } = req.query;

  API.getFeatures(id, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

app.get("/Questions", function (req, res) {
  const { product_id } = req.query;

  API.getQuestions(product_id, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

app.post("/Question", function (req, res) {
  const { question, username, email, product_id } = req.body;

  API.postQuestion(question, username, email, product_id, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

app.post("/Answer", function (req, res) {
  const { question_id, body, name, email, photos } = req.body;

  API.postAnswer(question_id, body, name, email, photos, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

app.put("/QuestionHelpful", function (req, res) {
  const { question_id } = req.body;

  API.putQuestionHelpful(question_id, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

app.put("/AnswerHelpful", function (req, res) {
  const { answer_id } = req.body;

  API.putAnswerHelpful(answer_id, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

app.put("/QuestionReport", function (req, res) {
  const { question_id } = req.body;

  API.putQuestionReport(question_id, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

app.put("/AnswerReport", function (req, res) {
  const { answer_id } = req.body;

  API.putAnswerReport(answer_id, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

app.get("/reviews", function (req, res) {
  var id = req.query.product_id;

  API.getReviews(id, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send(data);
    }
  });
});

var port = 3000;
app.listen(port, () => {
  console.log("Server listening on port ", port);
});
