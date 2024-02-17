const express = require("express");
const router = express.Router();

// Global variables

const dummyData = [
  { 
    image: "/images/nhs-logo.png",
    fullname: "Patrik Takacs",
    lastTimePresent: "02/17/2024",
    ranks: ["VP", "Member"],
    hours: "20.5h"
  },{ 
    image: "/images/nhs-logo.png",
    fullname: "Patrik Takacs",
    lastTimePresent: "02/17/2024",
    ranks: ["VP", "Member"],
    hours: "20.5h"
  },{ 
    image: "/images/nhs-logo.png",
    fullname: "Patrik Takacs",
    lastTimePresent: "02/17/2024",
    ranks: ["VP", "Member"],
    hours: "20.5h"
  },{ 
    image: "/images/nhs-logo.png",
    fullname: "Patrik Takacs",
    lastTimePresent: "02/17/2024",
    ranks: ["VP", "Member"],
    hours: "20.5h"
  },{ 
    image: "/images/nhs-logo.png",
    fullname: "Patrik Takacs",
    lastTimePresent: "02/17/2024",
    ranks: ["VP", "Member"],
    hours: "20.5h"
  },{ 
    image: "/images/nhs-logo.png",
    fullname: "Patrik Takacs",
    lastTimePresent: "02/17/2024",
    ranks: ["VP", "Member"],
    hours: "20.5h"
  },{ 
    image: "/images/nhs-logo.png",
    fullname: "Patrik Takacs",
    lastTimePresent: "02/17/2024",
    ranks: ["VP", "Member"],
    hours: "20.5h"
  },{ 
    image: "/images/nhs-logo.png",
    fullname: "Patrik Takacs",
    lastTimePresent: "02/17/2024",
    ranks: ["VP", "Member"],
    hours: "20.5h"
  },{ 
    image: "/images/nhs-logo.png",
    fullname: "Patrik Takacs",
    lastTimePresent: "02/17/2024",
    ranks: ["VP", "Member"],
    hours: "20.5h"
  },{ 
    image: "/images/nhs-logo.png",
    fullname: "Patrik Takacs",
    lastTimePresent: "02/17/2024",
    ranks: ["VP", "Member"],
    hours: "20.5h"
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("pages/index", {
    title: "home",
    activePage: "home",
    firstname: "Patrik",
    studentsData: dummyData,
  });
});

module.exports = router;
