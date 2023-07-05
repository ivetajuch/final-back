const uniqid = require('uniqid');
const question = require('../models/question');
const answer = require('../models/answer');

module.exports.INSERT_NEW_ANSWER = async (req, res) => {
  const questionId = req.params.id;
  

  try {
    const newAnswer = new answer({
      id: uniqid(),
      text: req.body.answerText,
      date: new Date().toLocaleString('en-US', {
        year: 'numeric',
        month: 'short',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
      }),
      likeNumber: 0,
    });

    await newAnswer.save();

    await question.updateOne(
      { id: questionId },
      { $push: { answersId: newAnswer.id } }
    );

    console.log('New answer:', newAnswer);

    res.status(200).json({ success: true, message: 'New answer inserted.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: error.message });
  }
};


module.exports.DELETE_ANSWER = async (req, res) => {
  try {
    const question = await answerModel.deleteOne({ id: req.params.id });
    res.status(200).json({ answer: question });
  } catch (err) {
    console.log("ERR", err);
    res.status(500).json({ response: "ERROR, please try later" });
  }
};