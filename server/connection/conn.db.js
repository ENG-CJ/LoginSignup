const mongoose = require("mongoose");
const url = "mongodb://0.0.0.0:27017/login";

let db; // Declare db variable to hold the database object

// Function to establish MongoDB connection
function connectToMongo(callback) {
  mongoose
    .connect(url)
    .then(() => {
      db = mongoose.connection.db; // Assign db the database object
      console.log("Connected to MongoDB");
      callback(null, db); // Notify callback function with db object
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB:", error);
      callback(error);
    });
}

// Export function to connect to MongoDB
module.exports = connectToMongo;
