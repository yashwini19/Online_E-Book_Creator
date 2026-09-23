const mongoose = require("mongoose");

// Function to connect our application to MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);

        console.log("MongoDB Connected Successfully");
    } catch (error) {
        console.log("MongoDB Connection Error:", error.message);

        // Stop the application if database connection fails
        process.exit(1);
    }
};

module.exports = connectDB;