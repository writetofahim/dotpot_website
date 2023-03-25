const express = require('express');
const router = express.Router();
const teamMemberController = require('../controllers/teamMemberController');
const adminMiddleware = require('../middlewares/adminMiddleware');


// Create a new team member
router.post('/',  adminMiddleware, teamMemberController.createTeamMember);

// Get all team members
router.get('/', teamMemberController.getAllTeamMembers);

// Get a specific team member by ID
router.get('/:id', teamMemberController.getTeamMemberById);

// Update a team member by ID
router.put('/:id', adminMiddleware, teamMemberController.updateTeamMemberById);

// Delete a team member by ID
router.delete('/:id', adminMiddleware, teamMemberController.deleteTeamMemberById);

module.exports = router;
