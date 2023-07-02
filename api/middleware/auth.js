// const jwt = require('jsonwebtoken');

// module.exports = (req, res, next) => {
//     const token = req.headers.authorization;

//     jwt.verify(token, process.env.JWT_PROTECT, async (err, decoded)=>{


//         if(err){
//          return res.status(401).json({ response: "Auth failed" });
//         }else{
//             req.body.userId = decoded.userId;
//             return next();
//         }
//     })


// };

const jwt = require('jsonwebtoken');
const cookie = require('cookie');

module.exports = (req, res, next) => {
  const cookies = cookie.parse(req.headers.cookie || '');

  // Check if the JWT token cookie is present
  if (!cookies.jwtToken) {
    return res.status(401).json({ response: "Auth failed" });
  }

  const token = cookies.jwtToken;

  // Verify the JWT token
  jwt.verify(token, process.env.JWT_PROTECT, (err, decoded) => {
    if (err) {
      return res.status(401).json({ response: "Auth failed" });
    } else {
      req.body.userId = decoded.userId;
      return next();
    }
  });
};