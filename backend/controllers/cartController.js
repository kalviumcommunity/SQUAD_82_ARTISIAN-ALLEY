const Cart = require('../models/Cart');

exports.getCartByUser = async (req, res) => {
  const { userId } = req.params;
  const cart = await Cart.findOne({ user: userId }).populate('items.product');
  if (!cart) return res.json({ message: "Cart is empty" });
  res.json(cart);
};

exports.addToCart = async (req, res) => {
  const { userId, productId, quantity } = req.body;

  let cart = await Cart.findOne({ user: userId });
  if (!cart) {
    cart = new Cart({ user: userId, items: [] });
  }

  const itemIndex = cart.items.findIndex(item => item.product.toString() === productId);

  if (itemIndex > -1) {
    cart.items[itemIndex].quantity += quantity;
  } else {
    cart.items.push({ product: productId, quantity });
  }

  await cart.save();
  res.status(200).json(cart);
};

exports.updateCartItem = async (req, res) => {
  const { userId, productId, quantity } = req.body;

  const cart = await Cart.findOne({ user: userId });
  if (!cart) return res.status(404).json({ message: "Cart not found" });

  const item = cart.items.find(item => item.product.toString() === productId);
  if (item) {
    item.quantity = quantity;
    await cart.save();
    return res.status(200).json(cart);
  }

  res.status(404).json({ message: "Product not in cart" });
};

exports.removeFromCart = async (req, res) => {
  const { userId, productId } = req.body;

  const cart = await Cart.findOne({ user: userId });
  if (!cart) return res.status(404).json({ message: "Cart not found" });

  cart.items = cart.items.filter(item => item.product.toString() !== productId);
  await cart.save();
  res.status(200).json(cart);
};
