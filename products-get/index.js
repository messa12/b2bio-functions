module.exports = async function (context, req) {

    
    context.log('JavaScript HTTP trigger function processed a request.');

    const name = (req.query.name || (req.body && req.body.name));
    const responseMessage = name
        ? "Hello, " + name + ". This HTTP triggered function executed successfully."
        : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}

// const mongoose = require("mongoose");

// mongoose.connect(
//   "mongodb+srv://b2bio:centrifuge@b2bio.hfq6x.mongodb.net/b2bio?retryWrites=true&w=majority",
//   { useNewUrlParser: true }
// );

// const productSchema = {
//   name: String,
//   price: String,
//   leadTime: String,
//   description: String,
//   url: String,
//   supplier: String,
//   category: String
// };

// const Product = mongoose.model("Product", productSchema);

// module.exports = async function (context, req) {


//   Product.find((err, foundProducts) => {
//     if (!err) {
//         context.res.send(foundProducts);
//     } else {
//         context.res.send(err);
//     }
//   });
