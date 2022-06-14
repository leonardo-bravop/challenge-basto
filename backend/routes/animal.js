const express = require("express");
const router = express.Router();
const animalController = require("../controllers/animalController")

router.get("/get", animalController.get)
router.post("/create", animalController.create)
router.put("/edit", animalController.edit);
router.get("/search", animalController.searchBySenasaId)
router.delete("/delete", animalController.delete)

module.exports = router;