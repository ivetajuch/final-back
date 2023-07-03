const mongoose = require("mongoose");

const questionSchema = mongoose.Schema({
  id: { type: String, required: true, min: 3 },
  text: {type: String, required: true, min: 5},
  date: {type: String, required: true},
  answersId: { type: Array, required: false }, 
  },

  {id: false },
);

module.exports = mongoose.model("Question", questionSchema);