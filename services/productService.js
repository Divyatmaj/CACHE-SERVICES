const { delayReadData } = require('../database/db');

async function getAllProducts() {
    return await delayReadData();
}

async function getProductById(id) {
    const products = await delayReadData();
    return products.find((item) => item.id === id);
}

module.exports = { getAllProducts, getProductById };
