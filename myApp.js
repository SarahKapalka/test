require('dotenv').config();

let express = require('express');
let app = express();
console.log(__dirname);

app.get('/', (req, res)=>{
    res.sendFile(__dirname+ "/views/index.html")
});

app.use( "/public",express.static(__dirname+"/public"));

app.get('/json', (req, res) => {
  process.env.MESSAGE_STYLE === 'uppercase' ? 
    res.json({ "message": "HELLO JSON" }):
    res.json({ "message": "Hello json" })
})

app.use((res,req,next)=>{
 console.log(req.method+" "+req.path+" - "+req.ip);
 next()
})





























 module.exports = app;
