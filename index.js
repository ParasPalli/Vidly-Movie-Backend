const mongoose = require('mongoose');

//
const { Customer, validate } = require('./model/customer_model');

const express = require('express');
const app = express();

// MongoDb Connection
mongoose.connect('mongodb://localhost:27017/testing')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(error => console.error('Could not connect to DB', error));


app.listen(3000, () => console.log("Listening at port 3000"));