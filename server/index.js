require("dotenv").config();
const express = require("express");
const path = require("path");


var srcname = '/Users/lovinsondieujuste/rpp2210-practice-apps/2-checkout/'
const app = express();
app.set('view engine', 'ejs')
app.use(express.static(path.join(srcname, '/client/src')))

app.use(express.urlencoded({
  extended: true
}))


app.use(express.static(path.join(__dirname, "../client/dist")));

app.get('/', function(req,res){
  res.render('index.html')
})

 var port = 1028
 app.listen(port, () =>{

   console.log('Server listening on port ', port)
 })