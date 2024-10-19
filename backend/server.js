const express = require("express");
const app = express();

const mongoose = require("mongoose");

const userRouter = require("./routes/userRoute");

app.use(express.json()); // body parser
var cors = require('cors')
app.use(cors())
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/crud");
  console.log("hello");
}

app.use(userRouter);

app.listen(8080);
