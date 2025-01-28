const Joi = require('joi');
const mongoose = require('mongoose');

const Genre = mongoose.model('Genre', mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  }
}));

function validateGenre(genre) {
  const joiSchema = {
    name: Joi.string().min(5).required()
  };

  return joiSchema.validate(genre);
}

exports.Genre = Genre;
exports.validate = validateGenre;