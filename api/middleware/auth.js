const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {

  if (!localStorage.jwtToken) {
    return res.status(401).json({ response: "Auth failed" });
  }

  const token = localStorage.jwtToken;


  jwt.verify(token, process.env.JWT_PROTECT, (err, decoded) => {
    if (err) {
      return res.status(401).json({ response: "Auth failed" });
    } else {
      req.body.userId = decoded.userId;
      return next();
    }
  });
};