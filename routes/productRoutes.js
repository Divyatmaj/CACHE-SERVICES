const express = require('express');
const { getProducts, getProduct } = require('../controllers/productController');
const { cacheMiddleware } = require('../middleware/cache');

const router = express.Router();

router.get('/products', cacheMiddleware, getProducts);
router.get('/products/:id', cacheMiddleware, getProduct);

module.exports = router;
