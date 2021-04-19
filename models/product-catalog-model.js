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
    type: Schema.Types.Decimal128
  },
  map: {
    type: Schema.Types.Decimal128
  },
  dropship: {
    type: Schema.Types.Decimal128
  },
  upc: {
    type: Number
  },
  images: {
    type: Array
  }
})
const ProductCatalog = mongoose.model("ProductCatalog", ProductCatalogSchema)

module.exports = ProductCatalog;