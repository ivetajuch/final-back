const express = require("express");
const app = express();
var cors = require("cors");
require('dotenv').config();
const bodyParser = require("body-parser");

// const questionsRouter = require("./routes/questions");
// const answersRouter = require("./routes/answers");
// const userRouter = require("./routes/user");

const mongoose = require("mongoose");

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// app.use(questionsRouter);
// app.use(answersRouter);
// app.use(userRouter);

mongoose
  .connect(process.env.MONGO_CONNECT)
  .then(() => {
    console.log("CONNECTED");
  })
  .catch((err) => {
    console.log("err", err);
  });

app.listen(process.env.PORT, () => {
  console.log("Your app is working");
});