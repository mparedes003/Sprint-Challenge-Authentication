require('dotenv').config();

const jwt = require('jsonwebtoken');

// const jwtKey = require('../_secrets/keys').jwtKey;

// quickly see what this file exports
module.exports = {
  authenticate,
  generateToken,
  // jwtKey,
};

// Custom Function for token generation
const jwtKey =
  process.env.JWT_KEY || 'add a secret to your .env file with this key';

  function generateToken(user) {
    const jwtPayload = {
      ...user,
      funtimes: 'for laughs',
      role: 'admin',
    };
  
    const jwtOptions = {
      expiresIn: '3m',
    }
  
    return jwt.sign(jwtPayload, jwtKey, jwtOptions)
  }

// implementation details
function authenticate(req, res, next) {
  const token = req.get('Authorization');

  if (token) {
    jwt.verify(token, jwtKey, (err, decodedToken) => {
      //if (err) return res.status(401).json(err);
      
      if (err) {
        // token verification failed
        res.status(401).json({ message: 'invalid token'});
      } else {
        // token is valid
        req.decodedToken = decodedToken; // sub-agent middleware of route handler have access to this
        next();
      } 
    });
  } else {
    res.status(401).json({ error: 'No token provided, must be set on the Authorization Header'});
  }
}
