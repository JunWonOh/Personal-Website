//jshint esversion:6

const port = 3000;

const express = require('express');
const ejs = require('ejs');

const app = express();





app.listen(port, function(){
    console.log("Server initialized on port " + port);
});