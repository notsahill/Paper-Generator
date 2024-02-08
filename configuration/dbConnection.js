const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGODB_DATABASE);
    console.log("Server connected to ", connect.connection.name);
  } catch (err) {
    console.log(err);
    process.exit();
  }
};

module.exports = connectDB;
