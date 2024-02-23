const express = require("express");
const router = express.Router();

// Global variables

const studentsArray = [
"TestUser1",
"TestUser1",
"TestUser1",
"TestUser1",
"TestUser1",
"TestUser1",
"TestUser1",
"TestUser1",
"TestUser1",
"TestUser1",
"TestUser1",
"TestUser1",
"TestUser1",
"TestUser1",
"TestUser1",
"TestUser1",
"TestUser1",
"TestUser1",
"TestUser1",
"TestUser1",
]

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("pages/create", {
    title: "create",
    activePage: "create",
    students: studentsArray,
  });
});

module.exports = router;
