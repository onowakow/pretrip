// Local db option does not include users
if (process.env.USE_LOCAL_DB === 'true') return;

/* Much of the auth (login, registration, etc) code has been adapted from Getting MEAN by 
  Clive Harber and Simon Holmes */

const mongoose = require('mongoose');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  hash: String,
  salt: String,
});

userSchema.methods.setPassword = function (password) {
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto
    .pbkdf2Sync(password, this.salt, 1000, 64, 'sha512')
    .toString('hex');
};

userSchema.methods.validatePassword = function (password) {
  const hash = crypto
    .pbkdf2Sync(password, this.salt, 1000, 64, 'sha512')
    .toString('hex');
  return this.hash === hash;
};

userSchema.methods.generateJwt = function () {
  const now = Date.now();
  // sets expiration 12 hrs out
  const expiry = now + 12 * 60 * 60 * 1000;

  return jwt.sign(
    {
      _id: this._id,
      email: this.email,
      name: this.name,
      exp: expiry,
    },
    process.env.JWT_SECRET
  );
};

mongoose.model('User', userSchema);
