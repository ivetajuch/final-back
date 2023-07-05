const mongoose = require("mongoose");

const answerSchema = mongoose.Schema({
  id: { type: String, required: true, min: 3 },
  text: {type: String, required: true, min: 5},
  date: {type: String, required: true},
  likeNumber: { type: Number, required: false }, 
  },

  {id: false }

);

module.exports = mongoose.model("Answer", answerSchema);