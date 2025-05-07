const Order = require('../models/Order');

exports.getAllOrders = async (req, res) => {
  const orders = await Order.find().populate('buyer').populate('products.product');
  res.json(orders);
};

exports.createOrder = async (req, res) => {
  const newOrder = new Order(req.body);
  await newOrder.save();
  res.status(201).json(newOrder);
};

exports.updateOrderStatus = async (req, res) => {
  const updatedOrder = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedOrder);
};
