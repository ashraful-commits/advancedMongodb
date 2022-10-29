const mongoose = require('mongoose');
const teacher = require('../models/usermodels');
const Food = require('../models/food');
const Movie = require('../models/movie');

const teacherModle = async () => {
  try {
    const data = await teacher
      .findById('635cc0b9db037048cf389038')
      .populate(['food', 'movie']);
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};

//================================>expport

module.exports = teacherModle;
