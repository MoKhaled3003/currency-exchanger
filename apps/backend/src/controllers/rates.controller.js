const RatesService = require("../services/rates.service");

module.exports = async function RatesController (io) {
  try {
    // This will emit the event to all connected sockets
    const rates = await RatesService()
    io.emit("rates", { base: "USD", rates });
  } catch (error) {
    console.log(error)
    io.emit("error", { error })
  }
};
