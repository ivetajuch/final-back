const express = require("express");
const router = express.Router();

const {
  SIGN_UP,
  LOGIN,
} = require("../controllers/user");

router.post("/signUp", SIGN_UP);
router.post("/logIn", LOGIN);




module.exports = router;