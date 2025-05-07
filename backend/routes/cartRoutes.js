const express = require('express');
const router = express.Router();
const {
  getCartByUser,
  addToCart,
  updateCartItem,
  removeFromCart
} = require('../controllers/cartController');

router.get('/:userId', getCartByUser);
router.post('/', addToCart);
router.put('/', updateCartItem);
router.delete('/', removeFromCart);

module.exports = router;
