const mongoose = require("mongoose");

const friendSchema = new mongoose.Schema(
  {
    requests: [
      {
        request: {
          type: String,
        },
      },
    ],
    accepted: [
      {
        accept: {
          type: String,
        },
      },
    ],
    senderid: {
      type: mongoose.Schema.Types.ObjectId, //id of user
      required: true,
      ref: "User",
    },
    receiverid: {
      type: mongoose.Schema.Types.ObjectId, //id of user
      required: true,
      ref: "User",
    },

    senderusername: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

friendSchema.methods.sendRequest = async function () {
  const friend = this;
  const request = friend.senderid;
  friend.requests = friend.requests.concat({ request: request });
  await friend.save();

  return friend;
};

const Friends = mongoose.model("Friends", friendSchema);

module.exports = Friends;
