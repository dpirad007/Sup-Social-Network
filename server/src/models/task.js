const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      trim: true,
    },
    completed: {
      type: Boolean,
      default: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId, //id of user
      required: true,
      ref: "User",
    },
    piclink: {
      type: String,
      ref: "User",
    },
    username: {
      type: String,
      required: true,
      trim: true,
    },
    project: {
      type: String,
    },
    projectdetails: {
      type: String,
    },
    featured: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Tasks = mongoose.model("Tasks", taskSchema);

module.exports = Tasks;
