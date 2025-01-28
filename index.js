const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const mongoose = require('mongoose');

const customers_router = require('./routes/customers');
const genres_router = require('./routes/genre');
const movies_router = require('./routes/movies');
const rentals_router = require('./routes/rentals');

const express = require('express');
const app = express();

// Routes
app.use(express.json());
app.use('/api/customers', customers_router);
app.use('/api/genres', genres_router);
app.use('/api/movies', movies_router);
app.use('/api/rentals', rentals_router);

// MongoDb Connection
mongoose.connect('mongodb://localhost:27017/testing')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(error => console.error('Could not connect to DB', error));


app.listen(3000, () => console.log("Listening at port 3000"));