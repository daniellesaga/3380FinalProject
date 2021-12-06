const mongoose = require('mongoose');

const PastrySchema = new mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  ppu: {
    type: Double
  },
  batters: {
    type: Object
  },
  topping: {
    type: Array
  },
  
});

module.exports = Pastry = mongoose.model('Pastry', PastrySchema);

