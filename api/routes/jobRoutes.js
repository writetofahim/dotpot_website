const express = require("express");
const router = express.Router();
const jobController = require("../controllers/jobController");
const adminMiddleware = require("../middlewares/adminMiddleware");

// GET /jobs - get all jobs
router.get("/", jobController.getAllJobs);

// GET /jobs/:id - get job by id
router.get("/:id", jobController.getJobById);

// POST /jobs - create a new job
router.post("/", adminMiddleware, jobController.createJob);

// PUT /jobs/:id - update a job
router.put("/:id", adminMiddleware, jobController.updateJobById);

// DELETE /jobs/:id - delete a job
router.delete("/:id", adminMiddleware, jobController.deleteJobById);

// POST route to like a job
router.post("/:jobId/like", jobController.likeJob);

// POST route to unlike a job
router.post("/:jobId/unlike", jobController.unlikeJob);

module.exports = router;
