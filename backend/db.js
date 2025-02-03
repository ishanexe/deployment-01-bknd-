const mongoose = require('mongoose');  // Import mongoose library
const mongoURI = "mongodb+srv://ishan:toofan24@i-notebook.e1yw8.mongodb.net/form"; // MongoDB Atlas URI

// Function to connect to MongoDB
const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI, { 
            useNewUrlParser: true, 
            useUnifiedTopology: true 
        });
        console.log("Connected to MongoDB...");
    } catch (err) {
        console.error("Error connecting to MongoDB:", err.message);
        process.exit(1);  // Exit the process if connection fails
    }
};

module.exports = connectToMongo;  // Export the connection function
