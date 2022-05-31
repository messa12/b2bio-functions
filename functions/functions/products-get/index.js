const mongoose = require("mongoose");
const Product = require("./product_model.js");

module.exports = async function (context, req) {
  context.log("JavaScript HTTP trigger function processed a request.");
  mongoose.connect(
    "mongodb+srv://b2bio:centrifuge@b2bio.hfq6x.mongodb.net/b2bio?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  );

  const query = Product.find();
  await query
    .clone()
    .exec()
    .then(
      (foundProducts) =>
        (context.res = {
          body: foundProducts,
        })
    )
    .catch(
      (err) =>
        (context.res = {
          body: err,
        })
    );
};
