const uniqid = require("uniqid");
const questionModel = require("../models/question");
const userModel = require("../models/user");


module.exports.INSERT_NEW_QUESTION = async (req, res) => {
  try {
    const question = new questionModel({
      id: uniqid(),
      text: req.body.text,
      date: new Date().toLocaleString('en-US', {
        year: 'numeric',
        month: 'short',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
      }),
      answersId: [],
    });

    const savedQuestion = await question.save();

    res.status(200).json({ response: savedQuestion });
  } catch (err) {
    res.status(500).json({ response: "Error, please try later" });
  }
};

module.exports.GET_ALL_QUESTIONS = async (req, res) => {
    try {
      const questions = await questionModel.find();
      res.status(200).json({ questions: questions });
    } catch (err) {
      console.log("ERR", err);
      res.status(500).json({ response: "ERROR, please try later" });
    }
  };


  module.exports.DELETE_QUESTION = async (req, res) => {
    try {
      const question = await questionModel.deleteOne({ id: req.params.id });
      res.status(200).json({ question: question });
    } catch (err) {
      console.log("ERR", err);
      res.status(500).json({ response: "ERROR, please try later" });
    }
  };