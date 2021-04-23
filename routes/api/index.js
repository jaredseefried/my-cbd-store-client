const router = require("express").Router();
const productCatalogRoutes = require("./product-catalog");

router.use("/product-catalog", productCatalogRoutes);

module.exports = router;
