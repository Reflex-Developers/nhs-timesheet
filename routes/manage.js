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

const dummyCrud = [
  {
    crud: "Create user",
    description: "Patrik Was created",
    date: "2024-02-21",
    operator: "Patrik Takacs"
  },
  {
    crud: "Create user",
    description: "Patrik Was created",
    date: "2024-02-21",
    operator: "Patrik Takacs"
  },
  {
    crud: "Create user",
    description: "Patrik Was created",
    date: "2024-02-21",
    operator: "Patrik Takacs"
  },
]

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("pages/manage", {
    title: "manage",
    activePage: "manage",
    studentsData: dummyData,
    crudLogs: dummyCrud,
  });
});

module.exports = router;
