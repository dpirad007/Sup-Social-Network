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
        request: {
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
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

//dobut(diff betwenn statics and methods)
friendSchema.methods.sendRequest = async function () {
  //normal function since we ahve to use this
  const friend = this;
  const request = friend.senderid;
  friend.requests = friend.requests.concat({ request: request });
  await friend.save();

  return friend;
};

const Friends = mongoose.model("Friends", friendSchema);

module.exports = Friends;
