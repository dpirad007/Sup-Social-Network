const express = require("express");
const router = express.Router();

const data = {
  products: [
    {
      _id: 1,
      name: "Journal cover",
      category: "HardBound ( 5 pic)",
      image: "",
      price: 60,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
    },
    {
      _id: 2,
      name: "Journal Sheets",
      category: "100 pages",
      image: "",
      price: 68,
      brand: "Nike",
      rating: 4.2,
      numReviews: 10,
    },
    {
      _id: 3,
      name: "Threads",
      category: "2 pic",
      image: "",
      price: 70,
      brand: "Nike",
      rating: 3,
      numReviews: 10,
    },
    {
      _id: 4,
      name: "Journal Sheets",
      category: "500 pages",
      image: "",
      price: 70,
      brand: "Nike",
      rating: 3,
      numReviews: 10,
    },
    {
      _id: 5,
      name: "TextBook",
      category: "book",
      image: "",
      price: 70,
      brand: "Nike",
      rating: 3,
      numReviews: 10,
    },
  ],
};

router.get("/api/store", (req, res) => {
  res.send(data.products);
});

module.exports = router;
