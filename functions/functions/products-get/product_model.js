var mongoose = require("mongoose");
const productSchema = {
  name: String,
  price: String,
  leadTime: String,
  description: String,
  url: String,
  supplier: String,
  category: String,
};
module.exports = mongoose.model("Products", productSchema);
