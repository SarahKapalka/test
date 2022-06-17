require('dotenv').config();
let bodyParser = require('body-parser');
let express = require('express');
let app = express();
console.log(__dirname);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req,res,next)=>{
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
 });

app.get('/', (req, res)=>{
    res.sendFile(__dirname+ "/views/index.html")
});

app.use( "/public",express.static(__dirname+"/public"));

app.get('/json', (req, res) => {
  process.env.MESSAGE_STYLE === 'uppercase' ? 
    res.json({ "message": "HELLO JSON" }):
    res.json({ "message": "Hello json" })
});

app.get('/now', function(req, res, next) {
  req.time = new Date().toString();
  next();
}, function(req, res) {
  res.json({"time": req.time});
});

app.get("/:text/echo", (req,res)=>{
 res.json({"echo": req.params.text});
 console.log(req.params);
});

app.route("/name").get((req,res)=>{
 res.json({"name": `${req.query.first} ${req.query.last}`});
 console.log(req.query);
}).post((req,res)=>{
res.json({"name": `${req.body.first} ${req.body.last}`});
});















 module.exports = app;
