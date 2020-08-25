const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require("dotenv").config();

// set up express
const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("The server has starten on port " + PORT));

mongoose.connect(process.env.MONGODB_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true, 
  useCreateIndex: true
}, (err) => {
  if(err) throw err;
  console.log("MONGO DB connection established")
})

// routes
app.use("/users", require("./routes/userRouter")); 