const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post('/user', async (req, res) => {
    const { name, email } = req.body;

    try {
        // Create the user and save it to the database
        const user = new User({ name, email });
        await user.save();

        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
