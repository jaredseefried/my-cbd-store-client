const mongoose = require("mongoose");
const db = require("../models");
// const image1 = require('../client/src/images/main-cover.jpg')
// const image2 = require('../client/src/images/main-cover.jpg')
// const image3 = require('../client/src/images/main-cover.jpg')

mongoose.connect(
  process.env.MONGODB_CONNECTION_STRING
  ||
  "mongodb://localhost/mycbdstore"
);

const ProductSeed = [
  {
    type: "Tincture",
    brand: "Made By Hemp",
    product: "Hemp Extract",
    size: "1oz (500mg)",
    flavor: "French Vanilla",
    sku: "MH-500-FV-30",
    msrp: 41.99,
    map: 37.79,
    dropship: 27.3,
    upc: 696305291191,
    description: 'This is a product description. I am telling the customer about the product and any other details that would be necessary.',
    images: ['']
  },
  {
    type: "Tincture",
    brand: "Made By Hemp",
    product: "Hemp Extract",
    size: "1oz (500mg)",
    flavor: "Mojito Lime",
    sku: "MH-500-ML-30",
    msrp: 41.99,
    map: 37.79,
    dropship: 27.3,
    upc: 696305291177,
    description: 'This is a product description. I am telling the customer about the product and any other details that would be necessary.',
    images: ['']
  },
  {
    type: "Tincture",
    brand: "Made By Hemp",
    product: "Hemp Extract",
    size: "1oz (500mg)",
    flavor: "Strawberry Crème",
    sku: "MH-500-SC-30",
    msrp: 41.99,
    map: 37.79,
    dropship: 27.3,
    upc: 696305291184,
    description: 'This is a product description. I am telling the customer about the product and any other details that would be necessary.',
    images: ['']
  },
  {
    type: "Tincture",
    brand: "Made By Hemp",
    product: "Hemp Extract",
    size: "1oz (1,000mg)",
    flavor: "French Vanilla",
    sku: "MH-1000-FV-30",
    msrp: 84.99,
    map: 74.37,
    dropship: 55.25,
    upc: 802991765537,
    description: 'This is a product description. I am telling the customer about the product and any other details that would be necessary.',
    images: ['']
  },
  {
    type: "Tincture",
    brand: "Made By Hemp",
    product: "Hemp Extract",
    size: "1oz (1,000mg)",
    flavor: "Mojito Lime",
    sku: "MH-1000-ML-30",
    msrp: 84.99,
    map: 74.37,
    dropship: 55.25,
    upc: 802991765520,
    description: 'This is a product description. I am telling the customer about the product and any other details that would be necessary.',
    images: ['']
  },
  {
    type: "Tincture",
    brand: "Made By Hemp",
    product: "Hemp Extract",
    size: "1oz (1,000mg)",
    flavor: "Strawberry Crème",
    sku: "MH-1000-SC-30",
    msrp: 84.99,
    map: 74.37,
    dropship: 55.25,
    upc: 802991765544,
    description: 'This is a product description. I am telling the customer about the product and any other details that would be necessary.',
    images: ['']
  },
  {
    type: "Tincture",
    brand: "Made By Hemp",
    product: "Hemp Extract",
    size: "1oz (2,000mg)",
    flavor: "French Vanilla",
    sku: "MH-2000-FV-30",
    msrp: 149.99,
    map: 127.49,
    dropship: 97.5,
    upc: 696305290767,
    description: 'This is a product description. I am telling the customer about the product and any other details that would be necessary.',
    images: ['']
  },
  {
    type: "Tincture",
    brand: "Made By Hemp",
    product: "Hemp Extract",
    size: "1oz (2,000mg)",
    flavor: "Mojito Lime",
    sku: "MH-2000-ML-30",
    msrp: 149.99,
    map: 127.49,
    dropship: 97.5,
    upc: 696305290743,
    description: 'This is a product description. I am telling the customer about the product and any other details that would be necessary.',
    images: ['']
  },
  {
    type: "Tincture",
    brand: "Made By Hemp",
    product: "Hemp Extract",
    size: "1oz (2,000mg)",
    flavor: "Strawberry Crème",
    sku: "MH-2000-SC-30",
    msrp: 149.99,
    map: 127.49,
    dropship: 97.5,
    upc: 696305290750,
    description: 'This is a product description. I am telling the customer about the product and any other details that would be necessary.',
    images: ['']
  },
  {
    type: "Tincture",
    brand: "Made By Hemp",
    product: "THC-Free Hemp Extract (Focus)",
    size: "1oz (500mg)",
    flavor: "Delicious Terpene Blend",
    sku: "MH-500-FO-30",
    msrp: 42.99,
    map: 38.69,
    dropship: 27.95,
    upc: 696305291054,
    description: 'This is a product description. I am telling the customer about the product and any other details that would be necessary.',
    images: ['']
  },
  {
    type: "Tincture",
    brand: "Made By Hemp",
    product: "THC-Free Hemp Extract (Relax)",
    size: "1oz (500mg)",
    flavor: "Delicious Terpene Blend",
    sku: "MH-500-RX-30",
    msrp: 42.99,
    map: 38.69,
    dropship: 27.95,
    upc: 696305291030,
    description: 'This is a product description. I am telling the customer about the product and any other details that would be necessary.',
    images: ['']
  },
  {
    type: "Tincture",
    brand: "Made By Hemp",
    product: "THC-Free Hemp Extract (Focus)",
    size: "1oz (1,000mg)",
    flavor: "Delicious Terpene Blend",
    sku: "MH-1000-FO-30",
    msrp: 74.99,
    map: 67.49,
    dropship: 48.75,
    upc: 696305291047,
    description: 'This is a product description. I am telling the customer about the product and any other details that would be necessary.',
    images: ['']
  },
  {
    type: "Tincture",
    brand: "Made By Hemp",
    product: "THC-Free Hemp Extract (Relax)",
    size: "1oz (1,000mg)",
    flavor: "Delicious Terpene Blend",
    sku: "MH-1000-RX-30",
    msrp: 74.99,
    map: 67.49,
    dropship: 48.75,
    upc: 696305291023,
    description: 'This is a product description. I am telling the customer about the product and any other details that would be necessary.',
    images: ['']
  },
  {
    type: "Tincture",
    brand: "Made By Hemp",
    product: "THC-Free Hemp Extract (Focus)",
    size: "1oz (2,000mg)",
    flavor: "Delicious Terpene Blend",
    sku: "MH-2000-FO-30",
    msrp: 129.99,
    map: 116.99,
    dropship: 84.5,
    upc: 696305290774,
    description: 'This is a product description. I am telling the customer about the product and any other details that would be necessary.',
    images: ['']
  },
  {
    type: "Tincture",
    brand: "Made By Hemp",
    product: "THC-Free Hemp Extract (Relax)",
    size: "1oz (2,000mg)",
    flavor: "Delicious Terpene Blend",
    sku: "MH-2000-RX-30",
    msrp: 129.99,
    map: 116.99,
    dropship: 84.5,
    upc: 696305290729,
    description: 'This is a product description. I am telling the customer about the product and any other details that would be necessary.',
    images: ['']
  },
  {
    type: "Tincture",
    brand: "Made By Hemp",
    product: "CBG Oil",
    size: "1oz (1,000mg)",
    flavor: "undefined",
    sku: "MH-1000-NA-30-G",
    msrp: 99.99,
    map: 90.99,
    dropship: 65,
    upc: 696305291085,
    description: 'This is a product description. I am telling the customer about the product and any other details that would be necessary.',
    images: ['']
  },
  {
    type: "Tincture",
    brand: "Made By Hemp",
    product: "CBG Oil Blend",
    size: "1oz (1,000mg)",
    flavor: "undefined",
    sku: "MH-1000-NA-30-GD",
    msrp: 99.99,
    map: 90.99,
    dropship: 65,
    upc: 696305291078,
    description: 'This is a product description. I am telling the customer about the product and any other details that would be necessary.',
    images: ['']
  },
  {
    type: "Tincture",
    brand: "Tasty Hemp Oil",
    product: "Tasty Drops",
    size: "1oz (300mg)",
    flavor: "Berry",
    sku: "TD-300-BY-30",
    msrp: 29.99,
    map: 26.24,
    dropship: 19.5,
    upc: 802991764691,
    description: 'This is a product description. I am telling the customer about the product and any other details that would be necessary.',
    images: ['']
  },
  {
    type: "Tincture",
    brand: "Tasty Hemp Oil",
    product: "Tasty Drops",
    size: "1oz (300mg)",
    flavor: "Natural",
    sku: "TD-300-UN-30",
    msrp: 29.99,
    map: 26.24,
    dropship: 19.5,
    upc: 802991764738,
    description: 'This is a product description. I am telling the customer about the product and any other details that would be necessary.',
    images: ['']
  },
  {
    type: "Tincture",
    brand: "Tasty Hemp Oil",
    product: "Tasty Drops",
    size: "1oz (300mg)",
    flavor: "Spearmint",
    sku: "TD-300-SP-30",
    msrp: 29.99,
    map: 26.24,
    dropship: 19.5,
    upc: 802991764721,
    description: 'This is a product description. I am telling the customer about the product and any other details that would be necessary.',
    images: ['']
  },
  {
    type: "Tincture",
    brand: "Tasty Hemp Oil",
    product: "Tasty Drops",
    size: "1oz (300mg)",
    flavor: "Vanilla",
    sku: "TD-300-VA-30",
    msrp: 29.99,
    map: 26.24,
    dropship: 19.5,
    upc: 802991764714,
    description: 'This is a product description. I am telling the customer about the product and any other details that would be necessary.',
    images: ['']
  },
  {
    type: "Tincture",
    brand: "Tasty Hemp Oil",
    product: "Tasty Drops",
    size: "1oz (500mg)",
    flavor: "Berry",
    sku: "TD-500-BY-30",
    msrp: 37.99,
    map: 33.24,
    dropship: 24.7,
    upc: 696305290835,
    description: 'This is a product description. I am telling the customer about the product and any other details that would be necessary.',
    images: ['']
  },
  {
    type: "Tincture",
    brand: "Tasty Hemp Oil",
    product: "Tasty Drops",
    size: "1oz (500mg)",
    flavor: "Natural",
    sku: "TD-500-UN-30",
    msrp: 37.99,
    map: 33.24,
    dropship: 24.7,
    upc: 696305290842,
    description: 'This is a product description. I am telling the customer about the product and any other details that would be necessary.',
    images: ['']
  },
  {
    type: "Tincture",
    brand: "Tasty Hemp Oil",
    product: "Tasty Drops",
    size: "1oz (500mg)",
    flavor: "Spearmint",
    sku: "TD-500-SP-30",
    msrp: 37.99,
    map: 33.24,
    dropship: 24.7,
    upc: 696305290811,
    description: 'This is a product description. I am telling the customer about the product and any other details that would be necessary.',
    images: ['']
  },
  {
    type: "Tincture",
    brand: "Tasty Hemp Oil",
    product: "Tasty Drops",
    size: "1oz (500mg)",
    flavor: "Vanilla",
    sku: "TD-500-VA-30",
    msrp: 37.99,
    map: 33.24,
    dropship: 24.7,
    upc: 696305290828,
    description: 'This is a product description. I am telling the customer about the product and any other details that would be necessary.',
    images: ['']
  },
  {
    type: "Tincture",
    brand: "Tasty Hemp Oil",
    product: "Tasty Drops",
    size: "1oz (1,000mg)",
    flavor: "Berry",
    sku: "TD-1000-BY-30",
    msrp: 74.99,
    map: 64.49,
    dropship: 48.75,
    upc: 802991765698,
    description: 'This is a product description. I am telling the customer about the product and any other details that would be necessary.',
    images: ['']
  },
  {
    type: "Tincture",
    brand: "Tasty Hemp Oil",
    product: "Tasty Drops",
    size: "1oz (1,000mg)",
    flavor: "Natural",
    sku: "TD-1000-UN-30",
    msrp: 74.99,
    map: 64.49,
    dropship: 48.75,
    upc: 802991765704,
    description: 'This is a product description. I am telling the customer about the product and any other details that would be necessary.',
    images: ['']
  },
  {
    type: "Tincture",
    brand: "Tasty Hemp Oil",
    product: "Tasty Drops",
    size: "1oz (1,000mg)",
    flavor: "Spearmint",
    sku: "TD-1000-SP-30",
    msrp: 74.99,
    map: 64.49,
    dropship: 48.75,
    upc: 802991765391,
    description: 'This is a product description. I am telling the customer about the product and any other details that would be necessary.',
    images: ['']
  },
  {
    type: "Tincture",
    brand: "Tasty Hemp Oil",
    product: "Tasty Drops",
    size: "1oz (1,000mg)",
    flavor: "Vanilla",
    sku: "TD-1000-VA-30",
    msrp: 74.99,
    map: 64.49,
    dropship: 48.75,
    upc: 802991765407,
    description: 'This is a product description. I am telling the customer about the product and any other details that would be necessary.',
    images: ['']
  },
  {
    type: "Tincture",
    brand: "Tasty Hemp Oil",
    product: "Tasty Drops",
    size: "1oz (1,500mg)",
    flavor: "Berry",
    sku: "TD-1500-BY-30",
    msrp: 99.99,
    map: 84.99,
    dropship: 65,
    upc: 696305290873,
    description: 'This is a product description. I am telling the customer about the product and any other details that would be necessary.',
    images: ['']
  },
  {
    type: "Tincture",
    brand: "Tasty Hemp Oil",
    product: "Tasty Drops",
    size: "1oz (1,500mg)",
    flavor: "Natural",
    sku: "TD-1500-UN-30",
    msrp: 99.99,
    map: 84.99,
    dropship: 65,
    upc: 696305290880,
    description: 'This is a product description. I am telling the customer about the product and any other details that would be necessary.',
    images: ['']
  },
  {
    type: "Tincture",
    brand: "Tasty Hemp Oil",
    product: "Tasty Drops",
    size: "1oz (1,500mg)",
    flavor: "Spearmint",
    sku: "TD-1500-SP-30",
    msrp: 99.99,
    map: 84.99,
    dropship: 65,
    upc: 696305290859,
    description: 'This is a product description. I am telling the customer about the product and any other details that would be necessary.',
    images: ['']
  },
  {
    type: "Tincture",
    brand: "Tasty Hemp Oil",
    product: "Tasty Drops",
    size: "1oz (1,500mg)",
    flavor: "Vanilla",
    sku: "TD-1500-VA-30",
    msrp: 99.99,
    map: 84.99,
    dropship: 65,
    upc: 696305290866,
    description: 'This is a product description. I am telling the customer about the product and any other details that would be necessary.',
    images: ['']
  },
  {
    type: "Pet Product",
    brand: "Made By Hemp",
    product: "Wellness Drops for Dogs",
    size: "1oz (200mg)",
    flavor: "undefined",
    sku: "MH-200-DG-30",
    msrp: 19.99,
    map: 17.99,
    dropship: 13,
    upc: 696305290903,
    description: 'This is a product description. I am telling the customer about the product and any other details that would be necessary.',
    images: ['']
  },
  {
    type: "Pet Product",
    brand: "Made By Hemp",
    product: "Wellness Drops for Dogs",
    size: "1oz (500mg)",
    flavor: "undefined",
    sku: "MH-500-DG-30",
    msrp: 41.99,
    map: 36.62,
    dropship: 27.3,
    upc: 696305290514,
    description: 'This is a product description. I am telling the customer about the product and any other details that would be necessary.',
    images: ['']
  },
  {
    type: "Pet Product",
    brand: "Made By Hemp",
    product: "Wellness Drops for Cats",
    size: "1oz (200mg)",
    flavor: "undefined",
    sku: "MH-200-CT-30",
    msrp: 19.99,
    map: 17.99,
    dropship: 13,
    upc: 696305290910,
    description: 'This is a product description. I am telling the customer about the product and any other details that would be necessary.',
    images: ['']
  },
  {
    type: "Pet Product",
    brand: "Made By Hemp",
    product: "Wellness Drops for Cats",
    size: "1oz (500mg)",
    flavor: "undefined",
    sku: "MH-500-CT-30",
    msrp: 41.99,
    map: 36.62,
    dropship: 27.3,
    upc: 696305290521,
    description: 'This is a product description. I am telling the customer about the product and any other details that would be necessary.',
    images: ['']
  },
  {
    type: "Pet Product",
    brand: "Made By Hemp",
    product: "Paw Balm",
    size: "1.6oz (500mg)",
    flavor: "undefined",
    sku: "MH-500-PB-1.6",
    msrp: 39.99,
    map: 35.99,
    dropship: 26,
    upc: 696305290675,
    description: 'This is a product description. I am telling the customer about the product and any other details that would be necessary.',
    images: ['']
  },
  {
    type: "Pet Product",
    brand: "Tasty Hemp Oil",
    product: "Hemp Oil for Dogs",
    size: "1oz (200mg)",
    flavor: "undefined",
    sku: "TD-200-DG-30",
    msrp: 18.99,
    map: 17.09,
    dropship: 12.35,
    upc: 802991764790,
    description: 'This is a product description. I am telling the customer about the product and any other details that would be necessary.',
    images: ['']
  },
  {
    type: "Pet Product",
    brand: "Tasty Hemp Oil",
    product: "Hemp Oil for Cats",
    size: "1oz (200mg)",
    flavor: "undefined",
    sku: "TD-200-CT-30",
    msrp: 18.99,
    map: 17.09,
    dropship: 12.35,
    upc: 802991764790,
    description: 'This is a product description. I am telling the customer about the product and any other details that would be necessary.',
    images: ['']
  },
  {
    type: "Topical",
    brand: "Made By Hemp",
    product: "Cooling Muscle Rub",
    size: "1.8oz (500mg)",
    flavor: "undefined",
    sku: "MH-500-SA-60",
    msrp: 49.99,
    map: 44.99,
    dropship: 32.5,
    upc: 802991765513,
    description: 'This is a product description. I am telling the customer about the product and any other details that would be necessary.',
    images: ['']
  },
  {
    type: "Topical",
    brand: "Made By Hemp",
    product: "Hemp Extract Patch",
    size: "1ct (40mg)",
    flavor: "undefined",
    sku: "MH-40-TP-1",
    msrp: 15.99,
    map: 13.99,
    dropship: 10.4,
    upc: 802991765599,
    description: 'This is a product description. I am telling the customer about the product and any other details that would be necessary.',
    images: ['']
  },
  {
    type: "Topical",
    brand: "Made By Hemp",
    product: "Daily Lotion Moisturizer",
    size: "4oz (250mg)",
    flavor: "undefined",
    sku: "MH-250-MO-120",
    msrp: 34.99,
    map: 31.49,
    dropship: 22.75,
    upc: 802991765551,
    description: 'This is a product description. I am telling the customer about the product and any other details that would be necessary.',
    images: ['']
  },
  {
    type: "Topical",
    brand: "Made By Hemp",
    product: "Healthy Glow Face Serum",
    size: "1oz (100mg)",
    flavor: "undefined",
    sku: "MH-100-SE-30",
    msrp: 29.99,
    map: 26.99,
    dropship: 19.5,
    upc: 802991765506,
    description: 'This is a product description. I am telling the customer about the product and any other details that would be necessary.',
    images: ['']
  },
  {
    type: "Topical",
    brand: "Made By Hemp",
    product: "Fresh Start Face Wash",
    size: "2oz",
    flavor: "undefined",
    sku: "MH-CL-60",
    msrp: 22.99,
    map: 20.69,
    dropship: 14.95,
    upc: 802991765575,
    description: 'This is a product description. I am telling the customer about the product and any other details that would be necessary.',
    images: ['']
  },
  {
    type: "Topical",
    brand: "Made By Hemp",
    product: "Fresh Face Toner",
    size: "2oz",
    flavor: "undefined",
    sku: "MH-TO-60",
    msrp: 22.99,
    map: 20.69,
    dropship: 14.95,
    upc: 802991765568,
    description: 'This is a product description. I am telling the customer about the product and any other details that would be necessary.',
    images: ['']
  },
  {
    type: "Topical",
    brand: "Made By Hemp",
    product: "Muscle Relief Salve",
    size: "1.6oz (150mg)",
    flavor: "undefined",
    sku: "MH-150-SV-60",
    msrp: 29.99,
    map: 26.99,
    dropship: 19.5,
    upc: 696305290798,
    description: 'This is a product description. I am telling the customer about the product and any other details that would be necessary.',
    images: ['']
  },
  {
    type: "Topical",
    brand: "Made By Hemp",
    product: "Muscle Relief Salve",
    size: "1.6oz (500mg)",
    flavor: "undefined",
    sku: "MH-500-SV-60",
    msrp: 49.99,
    map: 44.99,
    dropship: 32.5,
    upc: 696305290804,
    description: 'This is a product description. I am telling the customer about the product and any other details that would be necessary.',
    images: ['']
  },
  {
    type: "Topical",
    brand: "Made By Hemp",
    product: "Tattoo Balm",
    size: "1.6oz (500mg)",
    flavor: "undefined",
    sku: "MH-500-TB-60",
    msrp: 39.99,
    map: 35.99,
    dropship: 26,
    upc: 696305290897,
    description: 'This is a product description. I am telling the customer about the product and any other details that would be necessary.',
    images: ['']
  },
  {
    type: "Topical",
    brand: "Made By Hemp",
    product: "Luxury Massage Oil",
    size: "3.4oz (500mg)",
    flavor: "undefined",
    sku: "MH-500-MO-120",
    msrp: 49.99,
    map: 42.49,
    dropship: 32.5,
    upc: 696305290781,
    description: 'This is a product description. I am telling the customer about the product and any other details that would be necessary.',
    images: ['']
  },
  {
    type: "Edibles/Softgels",
    brand: "Made By Hemp",
    product: "Gummies",
    size: "40ct (25mg/ea)",
    flavor: "Mixed Fruit",
    sku: "MH-25-GM-AF-40",
    msrp: 89.99,
    map: 78.74,
    dropship: 58.5,
    upc: 696305290736,
    description: 'This is a product description. I am telling the customer about the product and any other details that would be necessary.',
    images: ['']
  },
  {
    type: "Edibles/Softgels",
    brand: "Made By Hemp",
    product: "Gummies",
    size: "20ct (25mg/ea)",
    flavor: "Mixed Fruit",
    sku: "MH-25-GM-AF-20",
    msrp: 48.99,
    map: 44.09,
    dropship: 31.85,
    upc: 696305291207,
    description: 'This is a product description. I am telling the customer about the product and any other details that would be necessary.',
    images: ['']
  },
  {
    type: "Edibles/Softgels",
    brand: "Made By Hemp",
    product: "Softgels",
    size: "30ct (25mg/ea)",
    flavor: "undefined",
    sku: "MH-25-SG-30",
    msrp: 59.99,
    map: 53.99,
    dropship: 39,
    upc: 696305290712,
    description: 'This is a product description. I am telling the customer about the product and any other details that would be necessary.',
    images: ['']
  },
  {
    type: "Edibles/Softgels",
    brand: "Tasty Hemp Oil",
    product: "Tasty Cocoas",
    size: "4ct (10mg/ea)",
    flavor: "Dark Chocolate",
    sku: "TC-10-DC-4",
    msrp: 19.99,
    map: 17.99,
    dropship: 13,
    upc: 802991764660,
    description: 'This is a product description. I am telling the customer about the product and any other details that would be necessary.',
    images: ['']
  },
  {
    type: "Edibles/Softgels",
    brand: "Tasty Hemp Oil",
    product: "Tasty Cocoas",
    size: "4ct (10mg/ea)",
    flavor: "Dark Chocolate Mint",
    sku: "TC-10-DM-4",
    msrp: 19.99,
    map: 17.99,
    dropship: 13,
    upc: 802991764677,
    description: 'This is a product description. I am telling the customer about the product and any other details that would be necessary.',
    images: ['']
  },
  {
    type: "Edibles/Softgels",
    brand: "Tasty Hemp Oil",
    product: "Hemp Gummies",
    size: "40ct (25mg/ea)",
    flavor: "Assorted Fruit",
    sku: "THO-GM-25-AF-40",
    msrp: 84.99,
    map: 76.49,
    dropship: 55.25,
    upc: 802991765117,
    description: 'This is a product description. I am telling the customer about the product and any other details that would be necessary.',
    images: ['']
  },
  {
    type: "Edibles/Softgels",
    brand: "Tasty Hemp Oil",
    product: "Hemp Gummies",
    size: "20ct (25mg/ea)",
    flavor: "Assorted Fruit",
    sku: "THO-GM-25-AF-20",
    msrp: 44.99,
    map: 40.49,
    dropship: 29.25,
    upc: 696305291214,
    description: 'This is a product description. I am telling the customer about the product and any other details that would be necessary.',
    images: ['']
  },
  {
    type: "Edibles/Softgels",
    brand: "Tasty Hemp Oil",
    product: "Hemp Gummies",
    size: "4ct (25mg/ea)",
    flavor: "Assorted Fruit",
    sku: "THO-25-GM-4PK",
    msrp: 19.99,
    map: 17.99,
    dropship: 13,
    upc: 802991765582,
    description: 'This is a product description. I am telling the customer about the product and any other details that would be necessary.',
    images: ['']
  },
  {
    type: "Edibles/Softgels",
    brand: "Tasty Hemp Oil",
    product: "Hemp Softgels",
    size: "30ct (15mg/ea)",
    flavor: "undefined",
    sku: "THO-SG-15-30",
    msrp: 49.99,
    map: 44.99,
    dropship: 32.5,
    upc: 802991764943,
    description: 'This is a product description. I am telling the customer about the product and any other details that would be necessary.',
    images: ['']
  },
  {
    type: "Vape",
    brand: "Alternate Vape",
    product: "Single Pre-Filled Cartridges",
    size: "1ml (250mg)",
    flavor: "Citrus",
    sku: "AV-VS-250-CT-1",
    msrp: 25,
    map: 22.5,
    dropship: 16.25,
    upc: 802991765032,
    description: 'This is a product description. I am telling the customer about the product and any other details that would be necessary.',
    images: ['']
  },
  {
    type: "Vape",
    brand: "Alternate Vape",
    product: "Single Pre-Filled Cartridges",
    size: "1ml (250mg)",
    flavor: "Kush",
    sku: "AV-VS-250-KU-1",
    msrp: 25,
    map: 22.5,
    dropship: 16.25,
    upc: 802991765049,
    description: 'This is a product description. I am telling the customer about the product and any other details that would be necessary.',
    images: ['']
  },
  {
    type: "Vape",
    brand: "Alternate Vape",
    product: "Single Pre-Filled Cartridges",
    size: "1ml (250mg)",
    flavor: "Mint",
    sku: "AV-VS-250-MN-1",
    msrp: 25,
    map: 22.5,
    dropship: 16.25,
    upc: 802991765025,
    description: 'This is a product description. I am telling the customer about the product and any other details that would be necessary.',
    images: ['']
  },
  {
    type: "Vape",
    brand: "Alternate Vape",
    product: "Vape Kit",
    size: "1ml (250mg)",
    flavor: "Citrus",
    sku: "KIT-AV-250-CITRUS",
    msrp: 47,
    map: 43.19,
    dropship: 31.2,
    upc: 802991765636,
    description: 'This is a product description. I am telling the customer about the product and any other details that would be necessary.',
    images: ['']
  },
  {
    type: "Vape",
    brand: "Alternate Vape",
    product: "Vape Kit",
    size: "1ml (250mg)",
    flavor: "Kush",
    sku: "KIT-AV-250-KUSH",
    msrp: 47,
    map: 43.19,
    dropship: 31.2,
    upc: 802991765643,
    description: 'This is a product description. I am telling the customer about the product and any other details that would be necessary.',
    images: ['']
  },
  {
    type: "Vape",
    brand: "Alternate Vape",
    product: "Vape Kit",
    size: "1ml (250mg)",
    flavor: "Mint",
    sku: "KIT-AV-250-MINT",
    msrp: 47,
    map: 43.19,
    dropship: 31.2,
    upc: 802991765629,
    description: 'This is a product description. I am telling the customer about the product and any other details that would be necessary.',
    images: ['']
  },
  {
    type: "Vape",
    brand: "Alternate Vape",
    product: "Vape Oil",
    size: "15ml (500mg)",
    flavor: "Citrus",
    sku: "AV-500-CT-15",
    msrp: 39.99,
    map: 35.99,
    dropship: 26,
    upc: 802991765001,
    description: 'This is a product description. I am telling the customer about the product and any other details that would be necessary.',
    images: ['', '']
  },
  {
    type: "Vape",
    brand: "Alternate Vape",
    product: "Vape Oil",
    size: "15ml (500mg)",
    flavor: "Kush",
    sku: "AV-500-KU-15",
    msrp: 39.99,
    map: 35.99,
    dropship: 26,
    upc: 802991765018,
    description: 'This is a product description. I am telling the customer about the product and any other details that would be necessary.',
    images: ['']
  },
  {
    type: "Vape",
    brand: "Alternate Vape",
    product: "Vape Oil",
    size: "15ml (500mg)",
    flavor: "Mint",
    sku: "AV-500-MN-15",
    msrp: 39.99,
    map: 35.99,
    dropship: 26,
    upc: 802991764998,
    description: 'This is a product description. I am telling the customer about the product and any other details that would be necessary.',
    images: ['']
  },
  {
    type: "Concentrates",
    brand: "Proprietary Hemp Extract",
    product: "Green Label",
    size: "1g (9% / 90mg)",
    flavor: "undefined",
    sku: "USH-RAW-10-1",
    msrp: 19.99,
    map: 17.99,
    dropship: 13,
    upc: 696305290576,
    description: 'This is a product description. I am telling the customer about the product and any other details that would be necessary.',
    images: ['']
  },
  {
    type: "Concentrates",
    brand: "Proprietary Hemp Extract",
    product: "Green Label",
    size: "3g (9% / 270mg)",
    flavor: "undefined",
    sku: "USH-RAW-10-3",
    msrp: 34.99,
    map: 31.49,
    dropship: 22.75,
    upc: 696305290583,
    description: 'This is a product description. I am telling the customer about the product and any other details that would be necessary.',
    images: ['']
  },
  {
    type: "Concentrates",
    brand: "Proprietary Hemp Extract",
    product: "Green Label",
    size: "10g (9% / 900mg)",
    flavor: "undefined",
    sku: "USH-RAW-10-10",
    msrp: 74.99,
    map: 67.49,
    dropship: 48.75,
    upc: 696305290590,
    description: 'This is a product description. I am telling the customer about the product and any other details that would be necessary.',
    images: ['']
  },
  {
    type: "Concentrates",
    brand: "Proprietary Hemp Extract",
    product: "Blue Label",
    size: "1g (15% / 150mg)",
    flavor: "undefined",
    sku: "USH-DEC-18-1",
    msrp: 22.99,
    map: 20.69,
    dropship: 14.95,
    upc: 712392227995,
    description: 'This is a product description. I am telling the customer about the product and any other details that would be necessary.',
    images: ['']
  },
  {
    type: "Concentrates",
    brand: "Proprietary Hemp Extract",
    product: "Blue Label",
    size: "3g (15% / 450mg)",
    flavor: "undefined",
    sku: "USH-DEC-18-3",
    msrp: 39.99,
    map: 35.99,
    dropship: 26,
    upc: 712392227988,
    description: 'This is a product description. I am telling the customer about the product and any other details that would be necessary.',
    images: ['']
  },
  {
    type: "Concentrates",
    brand: "Proprietary Hemp Extract",
    product: "Blue Label",
    size: "10g (15% / 1500mg)",
    flavor: "undefined",
    sku: "USH-DEC-18-10",
    msrp: 89.99,
    map: 80.99,
    dropship: 58.5,
    upc: 712392227971,
    description: 'This is a product description. I am telling the customer about the product and any other details that would be necessary.',
    images: ['']
  },
  {
    type: "Concentrates",
    brand: "Proprietary Hemp Extract",
    product: "Gold Label",
    size: "1g (24% / 240mg)",
    flavor: "undefined",
    sku: "USH-GEL-27-1",
    msrp: 24.99,
    map: 22.49,
    dropship: 16.25,
    upc: 712392228039,
    description: 'This is a product description. I am telling the customer about the product and any other details that would be necessary.',
    images: ['']
  },
  {
    type: "Concentrates",
    brand: "Proprietary Hemp Extract",
    product: "Gold Label",
    size: "3g (24% / 720mg)",
    flavor: "undefined",
    sku: "USH-GEL-27-3",
    msrp: 55.99,
    map: 50.39,
    dropship: 36.4,
    upc: 712392228022,
    description: 'This is a product description. I am telling the customer about the product and any other details that would be necessary.',
    images: ['']
  },
  {
    type: "Concentrates",
    brand: "Proprietary Hemp Extract",
    product: "Gold Label",
    size: "10g (24% / 2400mg)",
    flavor: "undefined",
    sku: "USH-GEL-27-10",
    msrp: 134.99,
    map: 121.49,
    dropship: 87.75,
    upc: 712392228015,
    description: 'This is a product description. I am telling the customer about the product and any other details that would be necessary.',
    images: ['']
  }
]

db.ProductCatalog
  .remove({})
  .then(() => db.ProductCatalog.collection.insertMany(ProductSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
