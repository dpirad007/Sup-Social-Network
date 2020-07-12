const express = require("express");
const cookieParser = require("cookie-parser");
require("./db/mongoose"); //runs the mongoose file
const userRouter = require("./routers/user"); //using it from user file
const taskRouter = require("./routers/task");
const friendRouter = require("./routers/friend");

const cors = require("cors");

require("dotenv").config();

const app = express();
app.use(cors());
const port = process.env.PORT || 5000;

app.use(express.json());

//routers
app.use(userRouter);
app.use(taskRouter);
app.use(friendRouter);

app.listen(port, () => {
  console.log("Server is running on port " + port);
});
