const mongoose = require('mongoose');
const customer_router = require('./routes/customers');
const genre_router = require('./routes/genre');

const express = require('express');
const app = express();

// Routes
app.use(express.json());
app.use(customer_router);
app.use(genre_router);

// MongoDb Connection
mongoose.connect('mongodb://localhost:27017/testing')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(error => console.error('Could not connect to DB', error));


app.listen(3000, () => console.log("Listening at port 3000"));