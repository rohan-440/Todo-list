const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/test",{ useNewUrlParser: true,  useUnifiedTopology: true })
    .catch(error => console.log(error))
const db = mongoose.connection
db.on('error', console.error.bind(console, "connection error"));
db.once('open', () => {
    console.log("mongodb connection successfully");
})



const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended : true }));
var items = [];
app.set("view engine","ejs");
app.get('/',(req,res)=>{
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var today = new Date();
   var day = today.toLocaleDateString("en-US", options); // Saturday, September 17, 2016
    res.render('index',{'kindOfDay': day,newListItems:items});
})
app.post("/",(req,res)=>{
   var item = req.body.newItems;
    items.push(item);
    res.redirect('/');
   
})
app.listen(3000,()=>{
    console.log('listening on port : 3000 ');
})
