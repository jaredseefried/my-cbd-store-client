const router = require("express").Router();
const productCatalogRoutes = require("./product-catalog");

// Book routes
router.use("/product-catalog", productCatalogRoutes);

module.exports = router;
