const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  id: { type: String, required: true, min: 3 },
  name: { type: String, required: true, min: 3 },
  email: { type: String, required: true, min: 8 },
  password: { type: String, required: true, min: 15 },
  askedQuestions: { type: Array, required: false }, 
  },
{
  id: false
}
);

module.exports = mongoose.model("User", userSchema);