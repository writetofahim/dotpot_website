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
router.get("/api/colors", getAllColors);

// Get a single color by id
router.get("/api/colors/:id", getColorById);

// Create a new color
router.post("/api/colors", createColor);

// Update a color by id
router.put("/api/colors/:id", updateColorById);

// Delete a color by id
router.delete("/api/colors/:id", deleteColorById);

// Get selected colors
router.get("/api/colors/selected", getSelectedColors);

// Update the selected attribute of a color by id
router.post("/api/colors/selected/:id", changeSelectedColor);

module.exports = router;
