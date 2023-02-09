const mongoose = require('mongoose');

const RatesSchema = new mongoose.Schema({
  base: { type: String, required: true},
  rates: { type: String, required: true}
});

const Rates = mongoose.model('Rates', RatesSchema);
module.exports = Rates;
