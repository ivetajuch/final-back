const uniqid = require("uniqid");
const userModel = require("../models/user");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();


module.exports.SIGN_UP = async (req, res) => {
  try {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(req.body.password, salt, async (err, hash) => {
        const user = new userModel({
          id: uniqid(),
          name: req.body.name,
          email: req.body.email,
          password: hash,
          askedQuestions: [],
        });

        await user.save();

        res.status(200).json({
          response: "You signed up successfully",

        });
      });
    });
  } catch (err) {
    res.status(500).json({ response: "Something's wrong, please try again" });
  }
};


module.exports.LOGIN = async (req, res) => {
  try {
    const user = await userModel.findOne({ email: req.body.email });

    if (!user) {
      return res.status(401).json({ response: "User doesn't exist" });
    }

    bcrypt.compare(req.body.password, user.password, (err, isPasswordMatch) => {
      if (isPasswordMatch) {
        const token = jwt.sign(
          {
            email: user.email,
            id: user.id
          },
          process.env.JWT_PROTECT,
          { expiresIn: '2h' },
          { algorithm: 'RS256' }
        );

        const refreshToken = jwt.sign(
          { userId: user.id },
          process.env.JWT_PROTECT,
          { expiresIn: '1d' },
          { algorithm: 'RS256' }
        );

     
        res.status(200).json({
          response: "You logged in",
          jwt: token,
          refresh: refreshToken
        });
      } else {
        return res.status(401).json({ response: "Something's wrong" });
      }
    });
  } catch (err) {
    console.log("ERR", err);
    return res.status(500).json({ response: "ERROR, please try later" });
  }
};