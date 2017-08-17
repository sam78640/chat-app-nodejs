const path = require('path');
const publicPath = path.join(__dirname,'../public');
const express = require('express');

var app = express();
const port = process.env.PORT || 3000;
app.use(express.static(publicPath));

app.listen(port,function(){
  console.log(`Server is up on ${port}`);
})
