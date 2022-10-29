const mongoose = require('mongoose');
const teacher = require('../models/usermodels');
const Food = require('../models/food');
const Movie = require('../models/movie');

const teacherModle = async () => {
  try {
    const data = await teacher
      .findById('635c90c6bb74be5d304ca086')
      .populate(['food', 'movie']);
    console.log(data.welcome);
  } catch (error) {
    console.log(error.message);
  }
};

//================================>expport

module.exports = teacherModle;
