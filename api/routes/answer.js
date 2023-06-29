const express = require("express");
const router = express.Router();
const authMiddleware = require('../middleware/auth');
const {
  INSERT_NEW_ANSWER,
  GET_QUESTION_WITH_ANSWERS,
  DELETE_ANSWER,
} = require("../controllers/question");

router.post("question/:id/answer",authMiddleware, INSERT_NEW_ANSWER);
router.get("/question/:id/answers", GET_QUESTION_WITH_ANSWERS);
router.delete("/answer/:id", authMiddleware, DELETE_ANSWER);



module.exports = router;