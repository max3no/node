const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

//connect mongo
mongoose.connect("<mongodb-connection-string>")
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log("Connection to database failed "+e);
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: false} ));

//cors filter
app.use((req, res, next) => {

  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS");
  next();
});

module.exports = app;
