const express = require("express");
const router = express.Router();

// Global variables

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("pages/create", {
    title: "create",
    activePage: "create",
    firstname: "Patrik",
  });
});

module.exports = router;
