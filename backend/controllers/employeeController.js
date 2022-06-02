const asyncHandler = require('express-async-handler');

const User = require('../models/UserModel');
const Employee = require('../models/EmployeeModel');

// @dec    Get Employee
// @route  GET /api/employee
//@access  Private
const getEmployee = asyncHandler(async (req, res) => {
  // Get user using id in jwt
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error('User not found');
  }

  const employee = await Employee.find({ user: req.user.id });

  res.status(200).json(employee);
});

// @dec    Create new Employee
// @route  POST /api/employee
//@access  Private
const createEmployee = asyncHandler(async (req, res) => {
  const {
    firstName,
    middleName,
    lastName,
    email,
    socialSecurityNumber,
    driversLicenseNumber,
    licenseExpireDate,
    phoneNumber,
    address,
  } = req.body;

  if (
    !firstName ||
    !middleName ||
    !lastName ||
    !email ||
    !socialSecurityNumber ||
    !driversLicenseNumber ||
    !licenseExpireDate ||
    !phoneNumber ||
    !address
  ) {
    res.status(400);
    throw new Error('Please add employee information');
  }

  // Get user using id in jwt
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error('User not found');
  }

  const employee = await Employee.create({
    firstName,
    middleName,
    lastName,
    email,
    socialSecurityNumber,
    driversLicenseNumber,
    licenseExpireDate,
    phoneNumber,
    address,
    user: req.user.id,
    status: 'new',
  });

  res.status(201).json(employee);
});

module.exports = {
  getEmployee,
  createEmployee,
};
