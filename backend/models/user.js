const mongoose = require('mongoose');
const User = mongoose.model('User', {
    username: String,
    password: String,
    accountno: Number,
    confirmPassword: String

});
module.exports = {
    User
}