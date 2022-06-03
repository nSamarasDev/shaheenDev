const express = require('express');
const router = express.Router();
const {
  getEmployees,
  createEmployee,
  getEmployee,
} = require('../controllers/employeeController');

const { protect } = require('../middleware/authMiddleware');

router.route('/').get(protect, getEmployees).post(protect, createEmployee);

router.route('/:id').get(protect, getEmployee);

module.exports = router;
