const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_CONNECTION_STRING
  ||
  "mongodb://localhost/mycbdstore"
);

const ProductSeed = [
  {
    name: "EXAMPLE"
  },


];

db.Product
  .remove({})
  .then(() => db.Product.collection.insertMany(ProductSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });