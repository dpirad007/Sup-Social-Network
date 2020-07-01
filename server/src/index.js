// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');
// require('dotenv').config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(cors());
// app.use(express.json());

// const ATLAS_URI = process.env.ATLAS_URI;
// mongoose.connect(ATLAS_URI, {
//   useNewUrlParser    : true,
//   useUnifiedTopology : true,
//   useCreateIndex     : true
// });
// const connection = mongoose.connection;
// connection.once('open', () => {
//   console.log('MongoDB connection established successfully');
// });

// /*
//   All the routes should be imported from the routes directory. Eg.
//   const puipuiRouter = require('./routes/puipui');
//   app.use('/puipui', puipuiRouter);
//   This puts all the routes in the puipui.js file on the /puipui route
// */

// app.listen(PORT, () => {
//   console.log(`Server running at port ${PORT}`);
// });

const express = require("express");
const cookieParser = require("cookie-parser");
require("./db/mongoose"); //runs the mongoose file
const userRouter = require("./routers/user"); //using it from user file
const taskRouter = require("./routers/task");
const storeRouter = require("./routers/store");
const cors = require("cors");

require("dotenv").config();

const app = express();
app.use(cors());
const port = process.env.PORT || 5000;

//app.use(express.static('public'))
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());

//routers
app.use(userRouter);
app.use(taskRouter);
app.use(storeRouter);

app.listen(port, () => {
  console.log("Server is running on port " + port);
});
