const uniqid = require('uniqid');
const question = require('../models/question');
const answer = require('../models/answer');

module.exports.INSERT_NEW_ANSWER = async (req, res) => {
  const questionId = req.params.id;
  

  try {
    const newAnswer = new answer({
      id: uniqid(),
      text: req.body.answerText,
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


