let bcrypt = require('bcryptjs');
let mongoose = require('mongoose');


let strengthsSchema = new mongoose.Schema({

})

let userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 99
  },
  lastName: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 99
  },
  email: { // TODO: Need to add email validation
    type: String,
    required: true,
    unique: true,
    minlength: 5,
    maxlength: 99
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 99
  },
  role: {
    type: String,
    required: false
  },
  company:{
    type: String,
    required: false
  },
  image: {
    type: String,
    required: false
  },
  level: {
    type: Number,
    required: false,
    default: 1
  },
  strengths: strengthsSchema
});

// TODO: Override 'toJSON' to prevent the password from being returned with the user
userSchema.set('toJSON', {
  transform: (doc, user) => {
    // delete user.password; // --> alternate
    // return user;
    return {
      id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      company: user.company,
      email: user.email,
      image: user.image,
      role: user.role,
    }
  }
});

// A helper function to authenticate with bcrypt
userSchema.methods.authenticated = function(password) {
  return bcrypt.compareSync(password, this.password);
}

// Find out Mongoose's version of a beforeCreate hook
userSchema.pre('save', function(next) {
  this.password = bcrypt.hashSync(this.password, 12);
  next();
});

// Exporting the User model
module.exports = mongoose.model('User', userSchema);
