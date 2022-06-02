const asyncHandler = require('express-async-handler');

const User = require('../models/UserModel');
const Ticket = require('../models/TicketModel');

// @dec    Get user tickets
// @route  GET /api/tickets
//@access  Private
const getTickets = asyncHandler(async (req, res) => {
  // Get user using id in jwt
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error('User not found');
  }

  const tickets = await Ticket.find({ user: req.user.id });

  res.status(200).json(tickets);
});

// @dec    Create new ticket
// @route  POST /api/tickets
//@access  Private
const createTicket = asyncHandler(async (req, res) => {
  const { product, description } = req.body;

  if (!product || !description) {
    res.status(400);
    throw new Error('Please add a product description');
  }

  // Get user using id in jwt
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error('User not found');
  }

  const ticket = await Ticket.create({
    product,
    description,
    user: req.user.id,
    status: 'new',
  });

  res.status(201).json(ticket);
});

module.exports = {
  getTickets,
  createTicket,
};
