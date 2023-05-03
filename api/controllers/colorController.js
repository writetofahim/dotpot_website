// Import the Color model
const Color = require("../models/Color");

// Controller for getting all colors
/**
 * @description Get all colors
 * @route GET /api/colors
 * @access Public
 * @return {json} - Status and JSON { success:true, data:array, message:string }
 */
const getAllColors = async (req, res) => {
  try {
    const colors = await Color.find();
    res
      .status(200)
      .json({ success: true, data: colors, message: "Colors found" });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, data: null, message: error.message });
  }
};

// Controller for getting a single color by id
/**
 * @description Get a single color by id
 * @route GET /api/colors/:id
 * @access Public
 * @params {string} id - The id of the color to retrieve
 * @return {json} - Status and JSON { success:true, data:object, message:string }
 */
const getColorById = async (req, res) => {
  try {
    const color = await Color.findById(req.params.id);
    if (!color) {
      return res
        .status(404)
        .json({ success: false, data: null, message: "Color not found" });
    }
    res
      .status(200)
      .json({ success: true, data: color, message: "Color found" });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, data: null, message: error.message });
  }
};

// Controller for creating a new color
/**
 * @description Create a new color
 * @route POST /api/colors
 * @access Private
 * @params {string} name - The name of the color
 * @params {object} colors - An object containing the various colors for the color
 * @return {json} - Status and JSON { success:true, data:object, message:string }
 */
const createColor = async (req, res) => {
  try {
    const { name, colors } = req.body;
    const newColor = new Color({ name, colors });
    const color = await newColor.save();
    res
      .status(201)
      .json({ success: true, data: color, message: "Color created" });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, data: null, message: error.message });
  }
};

// Controller for updating a color by id
/**
 * @description Update a color by id
 * @route PUT /api/colors/:id
 * @access Private
 * @params {string} id - The id of the color to update
 * @params {string} name - The updated name of the color
 * @params {object} colors - An object containing the updated various colors for the color
 * @return {json} - Status and JSON { success:true, data:object, message:string }
 */
const updateColorById = async (req, res) => {
  try {
    const { name, colors, border, particleColor } = req.body;
    const updatedColor = await Color.findByIdAndUpdate(
      req.params.id,
      { name, colors, border, particleColor },
      { new: true }
    );
    if (!updatedColor) {
      return res
        .status(404)
        .json({ success: false, data: null, message: "Color not found" });
    }
    res
      .status(200)
      .json({ success: true, data: updatedColor, message: "Color updated" });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, data: null, message: error.message });
  }
};

// Controller for deleting a color by id
/**
 * @description Delete a color by id
 * @route DELETE /api/colors/:id
 * @access Private
 * @params {string} id - The id of the color to delete
 * @return {json} - Status and JSON { success:true, data:null, message:string }
 */
const deleteColorById = async (req, res) => {
  try {
    const deletedColor = await Color.findByIdAndDelete(req.params.id);
    if (!deletedColor) {
      return res
        .status(404)
        .json({ success: false, data: null, message: "Color not found" });
    }
    res
      .status(200)
      .json({ success: true, data: null, message: "Color deleted" });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, data: null, message: error.message });
  }
};

// Controller for getting selected colors
/**
@description Get selected colors
@route GET /api/colors/selected
@access Public
@return {json} - Status and JSON { success:true, data:array, message:string }
*/
const getSelectedColors = async (req, res) => {
  try {
    const colors = await Color.find({ selected: true });
    res
      .status(200)
      .json({ success: true, data: colors, message: "Selected colors found" });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, data: null, message: error.message });
  }
};

// Controller for change a selected color
/**
 * @description Update the selected attribute of a color by id
 * @route POST /api/colors/select/:id
 * @access Private
 * @params {string} id - The id of the color to update
 * @return {json} - Status and JSON { success:true, data:object, message:string }
 */
const changeSelectedColor = async (req, res) => {
  try {
    // Get the id of the color to update
    const colorId = req.params.id;

    // Find the color by id
    const colorToUpdate = await Color.findById(colorId);

    // If the color is not found, return a 404 error
    if (!colorToUpdate) {
      return res
        .status(404)
        .json({ success: false, data: null, message: "Color not found" });
    }

    // Update the selected attribute of the color
    await Color.updateMany({}, { $set: { selected: false } });
    colorToUpdate.selected = true;
    await colorToUpdate.save();

    // Return a success response with the updated color
    res
      .status(200)
      .json({ success: true, data: colorToUpdate, message: "Color selected" });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, data: null, message: error.message });
  }
};

module.exports = {
  getAllColors,
  getColorById,
  createColor,
  updateColorById,
  deleteColorById,
  getSelectedColors,
  changeSelectedColor,
};
