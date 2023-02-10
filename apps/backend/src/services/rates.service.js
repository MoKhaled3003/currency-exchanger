const Rates = require("../models/rates.model");
const axios = require("axios");
module.exports = async function RatesService() {
  const options = {
    method: "GET",
    url: "https://currencyapi-net.p.rapidapi.com/rates",
    params: { output: "JSON", base: "USD" },
    headers: {
      "X-RapidAPI-Key": process.env.RAPID_API_KEY,
      "X-RapidAPI-Host": "currencyapi-net.p.rapidapi.com",
    },
  };
  try{
    const response = await axios.request(options);
    await Rates.findOneAndUpdate({ base: "USD" }, {
      base: "USD",
      rates: JSON.stringify(response.data.rates),
    }, {
      new: true,
      upsert: true,
    });
    return response.data.rates
  } catch(error){
    throw Error(error.message);
  }
};
