const mongoose = require('mongoose');
//=============================> crare shcmamodle

const teacherModel = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    age: {
      type: Number,
      required: true,
      unique: true,
    },
    gender: {
      type: String,
      required: true,
      enum: ['Female', 'Male'],
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    location: {
      type: String,
      required: true,
      enum: ['Mirpur', 'Badda', 'Uttara'],
    },
    isPassed: {
      type: Boolean,
    },
    food: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: 'Food',
    },
    movie: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: 'Movie',
    },
  },
  {
    timestamps: true,
  }
);

teacherModel.statics.talsh = function () {
  return this.find();
};
//======================================gender>
teacherModel.query.gender = function () {
  return this.where('gender').eq('Female');
};
//=======================================location>
teacherModel.query.location = function () {
  return this.where('location').eq('Uttara');
};
//=========================================methods
teacherModel.methods.isMirpur = function () {
  return this;
};

//===========================================virtual>
teacherModel.virtual('welcome').get(function () {
  return `ekhane aser jonno apnake sagotom ${this.name} apu`;
});
//=========================================> export modal
module.exports = mongoose.model('teacher', teacherModel);
