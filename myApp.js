let express = require('express');
let app = express();
console.log(__dirname);

app.get('/', (req, res)=>{
    res.sendFile(__dirname+ "/views/index.html")
});

app.use( "/public",express.static(__dirname+"/public"));
































 module.exports = app;
