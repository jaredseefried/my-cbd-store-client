const router = require("express").Router();
const productRoutes = require("./product");

// Book routes
router.use("/product", productRoutes);

module.exports = router;
