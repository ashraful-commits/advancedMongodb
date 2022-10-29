const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const mongooCon = require('./config/db');
const teachermodel = require('./controllers/userContoler');

//==================================> dotenv config
dotenv.config();

//=================================> init env file
const port = process.env.PORT || 5000;
//=================================> create app
const app = express();
//================================> use modal
teachermodel();
//=================================> create server
app.listen(port, () => {
  mongooCon();
  console.log(`server is running on port ${port}`.bgMagenta);
});
