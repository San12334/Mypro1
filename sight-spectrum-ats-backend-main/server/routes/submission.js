const express = require("express");
const router = express.Router();
const submission_controller = require("../controllers/submission_controller")

router.post("/createSubmission", submission_controller.createSubmission.controller)
router.post("/updateSubmission", submission_controller.updateSubmission.controller)
router.post("/deleteSubmission", submission_controller.deleteSubmission.controller)

router.get("/listSubmissions", submission_controller.listSubmissions.controller)
router.get("/getSubmissionDetails", submission_controller.getSubmissionDetails.controller)

module.exports = router
