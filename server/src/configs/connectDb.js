const { default: mongoose } = require("mongoose");

require("dotenv").config();

const dbUrl = `${process.env.DATABASE_URL}`;

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(dbUrl);
    console.log("connectDB successfully");
  } catch (error) {
    console.log(error);
    console.log("connectDb fail");
    process.exit(1);
  }
};
module.exports = connectDB;
