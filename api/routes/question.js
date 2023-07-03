const express = require("express");
const router = express.Router();
const authMiddleware = require('../middleware/auth');

const {
  INSERT_NEW_QUESTION,
  GET_ALL_QUESTIONS,
  GET_QUESTION_BY_ID,
  DELETE_QUESTION,
} = require("../controllers/question");

router.post("/question", INSERT_NEW_QUESTION);
router.get("/questions", GET_ALL_QUESTIONS);
router.get("/question/:id", GET_QUESTION_BY_ID);
router.delete("/question/:id", DELETE_QUESTION);



module.exports = router;