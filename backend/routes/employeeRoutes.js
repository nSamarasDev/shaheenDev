const express = require('express');
const router = express.Router();
const {
  getEmployee,
  createEmployee,
} = require('../controllers/employeeController');

const { protect } = require('../middleware/authMiddleware');

router.route('/').get(protect, getEmployee).post(protect, createEmployee);

module.exports = router;
