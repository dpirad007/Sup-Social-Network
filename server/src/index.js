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
const port = process.env.PORT;

app.use(express.json());

//routers
app.use(userRouter);
app.use(taskRouter);
app.use(friendRouter);

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(port, () => {
  console.log("Server is running on port " + port);
});
