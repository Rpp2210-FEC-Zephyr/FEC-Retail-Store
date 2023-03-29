require("dotenv").config();
const express = require("express");
const path = require("path");
API = require("./API/Atelier.js");

var srcname = "/Users/lovinsondieujuste/rpp2210-practice-apps/2-checkout/";
const app = express();
app.set("view engine", "ejs");
//app.use(express.static(path.join(srcname, '/client/src')))

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.static(path.join(__dirname, "../client/dist")));

app.use(express.json());

app.get("/", function (req, res) {
  res.render("index.html");
});

app.get("/Products", function (req, res) {
  API.getProducts((err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send(data);
    }
  });
});
app.get("/ProductsID", function (req, res) {
  const { id } = req.query;
  API.getProductsID(id, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send(data);
    }
  });
});
app.get("/Related", function (req, res) {
  const { id } = req.query;

  API.getRelated(id, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send(data);
    }
  });
});

app.get("/Styles", function (req, res) {
  const { id } = req.query;
  API.getStyles(id, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send(data);
    }
  });
});

app.get("/Features", function (req, res) {
  const { id } = req.query;

  API.getFeatures(id, (err, data) => {
    if (err) {
      console.log(err);
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
  var { question, username, email, product_id } = req.body;

  API.postQuestion(question, username, email, product_id, (err, data) => {
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

var port = 1028;
app.listen(port, () => {
  console.log("Server listening on port ", port);
});
