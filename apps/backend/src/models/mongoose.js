const mongoose = require('mongoose');

module.exports = async function mongodb() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
  } catch (error) {
    throw Error(err.message)
  }
}
