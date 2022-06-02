const asyncHandler = require('express-async-handler');

const User = require('../models/UserModel');
const Ticket = require('../models/TicketModel');

// @dec    Get user tickets
// @route  GET /api/tickets
//@access  Private
const getTickets = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'getTickets' });
});

// @dec    Create new ticket
// @route  POST /api/tickets
//@access  Private
const createTicket = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'createTicket' });
});

module.exports = {
  getTickets,
  createTicket,
};
