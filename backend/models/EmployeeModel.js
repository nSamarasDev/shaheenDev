const mongoose = require('mongoose');

const EmployeeSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    firstName: {
      type: String,
      required: [true, 'Please add a first name'],
    },
    middleName: {
      type: String,
      required: [true, 'Please add a middle name or type none'],
    },
    lastName: {
      type: String,
      required: [true, 'Please add a last name'],
    },
    status: {
      type: String,
      required: true,
      enum: ['new', 'open', 'employeed'],
      default: 'new',
    },
    email: {
      type: String,
      required: [true, 'Please add your email'],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        'Please add a valid email',
      ],
    },
    socialSecurityNumber: {
      type: Number,
      required: [true, 'Please add a social security number'],
      maxlength: [9, 'No more than 9 digits'],
    },
    driversLicenseNumber: {
      type: Number,
      required: [true, 'Please add a drivers license number'],
      maxlength: [8, 'No more than 8 digits'],
    },
    licenseExpireDate: {
      type: Date,
      required: [true, 'Please add a license expiration date'],
    },
    phoneNumber: {
      type: String,
      maxlength: [20, 'Phone number can not be longer than 20 characters'],
    },
    address: {
      type: String,
      required: [true, 'Please add an address'],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Employee', EmployeeSchema);
