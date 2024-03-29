const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "hangling get requests to /products"
  });
});

router.post("/", (req, res, next) => {
  res.status(200).json({
    message: "hangling post requests to /products"
  });
});

router.get("/:productId", (req, res, next) => {
  const id = req.params.productId;
  if (id === "special") {
    res.status(200).json({
      message: "discovered special id",
      id: id
    });
  } else {
    res.status(200).json({
      message: " Wrong id"
    });
  }
});
module.exports = router;
