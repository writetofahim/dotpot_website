const TeamMember = require('../models/TeamMember');

exports.createTeamMember = async (req, res) => {
  try {
    const newTeamMember = new TeamMember(req.body);
    const savedTeamMember = await newTeamMember.save();
    res.status(201).json(savedTeamMember);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};

/**
@params {Object} req - The request object.
@params {Object} res - The response object.
@returns {Object} - Returns a JSON object containing an array of teamMembers and metadata about the pagination.
@description Retrieves teamMembers from the database with pagination based on the query parameters.
@param {Number} req.query.page - The page number to retrieve. Defaults to 1 if not specified.
@param {Number} req.query.limit - The number of teamMembers to retrieve per page. Defaults to 10 if not specified.
*/
exports.getAllTeamMembers = async (req, res) => {
  // Get the current page number from the query parameters, default to 1 if not specified
  const page = parseInt(req.query.page) || 1;
  // Get the number of teamMembers to display per page from the query parameters, default to 10 if not specified
  const limit = parseInt(req.query.limit) || 10;

  try {
    // Get the total number of teamMembers in the database
    const totalTeamMembers = await TeamMember.countDocuments({});
    // Calculate the total number of pages based on the limit and total number of teamMembers
    const totalPages = Math.ceil(totalTeamMembers / limit);
    // Calculate the starting index of the teamMembers to retrieve
    const startIndex = (page - 1) * limit;
    // Calculate the ending index of the teamMembers to retrieve
    const endIndex = page * limit;

    // Retrieve the teamMembers from the database based on the pagination parameters
    const teamMembers = await TeamMember.find({}).skip(startIndex).limit(limit);
    // Send the teamMembers as a response along with metadata about the pagination
    res.json({
      totalTeamMembers,
      totalPages,
      currentPage: page,
      teamMembers: teamMembers
    });
  } catch (err) {
    // If there's an error, log it to the console and send a 500 response
    console.log(err);
    res.status(500).send({ error: 'Server error' });
  }
};

exports.getTeamMemberById = async (req, res) => {
  try {
    const teamMember = await TeamMember.findById(req.params.id);
    if (!teamMember) {
      return res.status(404).send('Team member not found');
    }
    res.status(200).json(teamMember);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};

exports.updateTeamMemberById = async (req, res) => {
  try {
    const updatedTeamMember = await TeamMember.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedTeamMember) {
      return res.status(404).send('Team member not found');
    }
    res.status(200).json(updatedTeamMember);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};

exports.deleteTeamMemberById = async (req, res) => {
  try {
    const deletedTeamMember = await TeamMember.findByIdAndDelete(req.params.id);
    if (!deletedTeamMember) {
      return res.status(404).send('Team member not found');
    }
    res.status(200).send('Team member deleted successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};
