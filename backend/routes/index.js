const express = require("express");
const router = express.Router()
const animal = require("./animal")

router.use("/animal", animal)

module.exports = router