const { getAllProducts, getProductById } = require('../services/productService');

async function getProducts(req, res) {
    try {
        const products = await getAllProducts();
        res.json(products);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Failed to fetch products' });
    }
}

async function getProduct(req, res) {
    try {
        const id = Number(req.params.id);
        const product = await getProductById(id);
        res.json(product);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Failed to fetch product' });
    }
}

module.exports = { getProducts, getProduct };
