const mongoose = require("mongoose");

const objectSchema = new mongoose.Schema({
  nom: String,
  description: String,
  photo: String,
});
const Object = mongoose.model("object", produitSchema);

module.exports = Object;
