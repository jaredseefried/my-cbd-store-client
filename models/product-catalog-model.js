const mongoose = require("mongoose");

const Schema = mongoose.Schema

const ProductCatalogSchema = new Schema({
  type: {
    type: String
  },
  brand: {
    type: String
  },
  product: {
    type: Number
  },
  size: {
    type: String
  },
  flavor: {
    type: String
  },
  sku: {
    type: String
  },
  msrp: {
    type: Number
  },
  map: {
    type: Number
  },
  dropship: {
    type: Number
  },
  upc: {
    type: Number
  },
  images: {
    type: Array
  },
  description: {
    type: String
  },

})
const ProductCatalog = mongoose.model("ProductCatalog", ProductCatalogSchema)

module.exports = ProductCatalog;