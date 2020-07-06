const express = require("express");
const Friend = require("../models/friend");
const router = express.Router();

router.post("/friend", async (req, res) => {
  const friend = new Friend({
    ...req.body, //...->es6 spread operator,(...req.body)->will copy all properties from body into the object
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

module.exports = router;
