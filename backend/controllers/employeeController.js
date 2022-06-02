const asyncHandler = require('express-async-handler');

const User = require('../models/UserModel');
const Employee = require('../models/EmployeeModel');

// @dec    Get Employee
// @route  GET /api/employee
//@access  Private
const getEmployee = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'getEmployee' });
});

// @dec    Create new Employee
// @route  POST /api/employee
//@access  Private
const createEmployee = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'createEmployee' });
});

module.exports = {
  getEmployee,
  createEmployee,
};
