const mongoose = require('mongoose');
const dotevn = require('dotenv').config();
const colors = require('colors');

//============================> create connection

const mongooCon = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGODB);
    console.log(`connected successfully`.bgBlue);
  } catch (error) {
    console.log(error.message.bgRed);
  }
};

module.exports = mongooCon;
