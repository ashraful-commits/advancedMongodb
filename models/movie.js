const mongoose = require('mongoose');

const MovieSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  cata: {
    type: String,
    required: true,
  },
});

//==============================>
module.exports = mongoose.model('Movie', MovieSchema);
