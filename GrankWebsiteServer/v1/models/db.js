const mongoose = require("mongoose");

//!   Establishing connection
const url = "mongodb://localhost:27017/addtocart";
// "mongodb+srv://charank347:Sruji@123@g-rankdigitalservicespv.8bewoue.mongodb.net/";
// "mongodb+srv://Grank:Mrcreate@123@clustergrank.3luhghr.mongodb.net/";
// "mongodb+srv://Grank:Mrcreate@123@cluster0.zywqgwy.mongodb.net/?retryWrites=true&w=majority";
// "mongodb+srv://Topper:Topper123@cluster0.zywqgwy.mongodb.net/?retryWrites=true&w=majority";
// const url = "mongodb+srv://Taskuni:yash123@cluster0.nk4l0cp.mongodb.net/";
//creating a default connection to mongodb
mongoose.connect(url, (err) => {
  if (err) console.log("could not connected to db ", err);
  else console.log("connected to Unitask Technologies db");
});

const conn = mongoose.connection;

conn.on("disconnected", () => {
  console.log("disconnected from Unitask Technologies  db");
});

conn.on("error", (err) => {
  console.log("could not connected to Unitask Technologies  db", err);
});
