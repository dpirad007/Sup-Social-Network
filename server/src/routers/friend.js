const express = require("express");
const Friend = require("../models/friend");
const router = express.Router();

router.post("/friend", async (req, res) => {
  const friend = new Friend({
    ...req.body,
  });
  try {
    const request = await friend.sendRequest();

    res.status(201).send({ friend, request });
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/requests/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const requestfriend = await Friend.find({ receiverid: _id });

    if (!requestfriend) {
      return res.status(404).send();
    }

    res.send(requestfriend);
  } catch (e) {
    res.status(500).send();
  }
});

router.get("/requests/check/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const requestfriend = await Friend.find({
      receiverid: _id,
    });

    if (!requestfriend) {
      return res.status(404).send();
    }

    res.send(requestfriend);
  } catch (e) {
    res.status(500).send();
  }
});

router.get("/getfriends/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const requestfriend = await Friend.find({
      receiverid: _id,
    });

    if (!requestfriend) {
      return res.status(404).send();
    }

    res.send(requestfriend);
  } catch (e) {
    res.status(500).send();
  }
});

router.delete("/friend/delete/:id", async (req, res) => {
  try {
    const request = await Friend.findOneAndDelete({
      receiverid: req.params.id,
      senderusername: req.body.sendername,
    });

    if (!request) {
      return res.status(404).send();
    }
    res.send(request);
  } catch (e) {
    res.status(500).send();
  }
});

router.patch("/friend/add/:id", async (req, res) => {
  try {
    const friendAdd = await Friend.findOne({
      receiverid: req.params.id,
      senderusername: req.body.sendername,
    });

    if (!friendAdd) {
      return res.status(404).send();
    }

    friendAdd.senderusername = null;

    friendAdd.requests = [];

    // friendAdd.accepted = friendAdd.accepted.concat({
    //   accept: req.body.sendername,
    // });

    friendAdd.accepted = req.body.sendername;

    await friendAdd.save();
    res.send(friendAdd);
  } catch (e) {
    res.status(400).send();
  }
});

module.exports = router;
