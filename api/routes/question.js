const express = require("express");
const router = express.Router();
const authMiddleware = require('../middleware/auth');

const {
  INSERT_NEW_QUESTION,
  GET_ALL_QUESTIONS,
  // GET_QUESTION_WITH_ANSWERS,
  DELETE_QUESTION,
} = require("../controllers/question");

router.post("/question", authMiddleware, INSERT_NEW_QUESTION);
router.get("/questions", GET_ALL_QUESTIONS);
// router.get("/question/:id/answers", GET_QUESTION_WITH_ANSWERS);
router.delete("/question/:id", authMiddleware, DELETE_QUESTION);



module.exports = router;