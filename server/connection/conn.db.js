const mongoose = require("mongoose");
const url = "mongodb://0.0.0.0:27017/login";

let db; 


function connectToMongo(callback) {
  mongoose
    .connect(url)
    .then(() => {
      db = mongoose.connection.db; 
      console.log("Connected to MongoDB");
      callback(null, db);
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB:", error);
      callback(error);
    });
}

module.exports = connectToMongo;
