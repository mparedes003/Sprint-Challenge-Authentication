const express = require('express');
const cors = require('cors');

const configureRoutes = require('./config/routes');

const server = express();
const corsOptions = {
  // If you're moving onto the stretch problem you'll need to set this obj with the appropriate fields
  // ensure that your client's URL/Port can achieve a Handshake
  // then pass this object to the cors() function
};

server.use(express.json());
server.use(cors());

configureRoutes(server);
// server.use('/08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_ten/api', configureRoutes);

module.exports = {
  server,
};
