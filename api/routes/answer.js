const express = require("express");
const router = express.Router();
const authMiddleware = require('../middleware/auth');
const {
  INSERT_NEW_ANSWER,
  
  DELETE_ANSWER,
} = require("../controllers/answer");

router.post("question/:id/answer", authMiddleware, INSERT_NEW_ANSWER);

router.delete("/answer/:id", authMiddleware, DELETE_ANSWER);



module.exports = router;