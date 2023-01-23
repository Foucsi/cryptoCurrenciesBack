const mongoose = require("mongoose");

const cryptoSchema = mongoose.Schema({
  cryptos: String,
});

const userSchema = mongoose.Schema({
  username: String,
  email: String,
  password: String,
  token: String,
  cryptos: [cryptoSchema],
});

const User = mongoose.model("users", userSchema);
module.exports = User;
