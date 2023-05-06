const express = require("express");
const router = express.Router();
const {
  getAllColors,
  getColorById,
  createColor,
  updateColorById,
  deleteColorById,
  getSelectedColors,
  changeSelectedColor,
} = require("../controllers/colorController");

// Get all colors
router.get("/", getAllColors);

// Get selected colors
router.get("/selected", getSelectedColors);

// Create a new color
router.post("/", createColor);

// Get a single color by id
router.get("/:id", getColorById);

// Update a color by id
router.put("/:id", updateColorById);

// Delete a color by id
router.delete("/:id", deleteColorById);

// Update the selected attribute of a color by id
router.post("/selected/:id", changeSelectedColor);

module.exports = router;
