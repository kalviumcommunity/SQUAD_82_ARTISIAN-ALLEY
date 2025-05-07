const express = require('express');
const router = express.Router();
const { getAllProducts, createProduct, updateProduct } = require('../controllers/productController');

router.get('/', getAllProducts);
router.post('/', createProduct);
router.put('/:id', updateProduct);

module.exports = router;
