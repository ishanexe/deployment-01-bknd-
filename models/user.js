const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
        // Removed 'unique: true' to allow duplicate emails
    }
});

module.exports = mongoose.model('user', UserSchema);
