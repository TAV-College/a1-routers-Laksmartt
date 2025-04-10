const express = require("express");
const { initDB } = require("../models/db_base"); 

const router = express.Router();


router.get("/", (req, res) => {
  res.render("index", { title: "Home" });
});


router.get("/init", (req, res) => {
  console.log("Initializing database...");
  initDB();
  res.json({ msg: "DB initialized" });
});


module.exports = router;
