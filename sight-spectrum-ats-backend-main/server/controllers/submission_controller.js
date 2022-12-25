const submission_services = require("../services/submission_services")

const createSubmission = {
    controller: async (req, res) => {
        let new_obj = {...req.body}
        new_obj["submitted_by"] = req.auth.user_id
        let new_submission = await submission_services.create(new_obj)
        res.respond(new_submission, 200, 'Submission created successfully.');
    }
}

const updateSubmission = {
    controller: async (req, res) => {
        await submission_services.updateSubmission(req.body)
        res.respond("Submission updated successfully", 200, 'Submission updated successfully.');
    }
}

const deleteSubmission = {
    controller: async (req, res) => {
        await submission_services.deleteSubmission(req.body._id)
        res.respond("Submission deleted successfully", 200, 'Submission deleted successfully.');
    }
}

const listSubmissions = {
    controller: async (req, res) => {
        let submissions = await submission_services.listSubmissions(req.query)
        res.respond(submissions, 200, 'Submissionss fetched sucessfully');
    }
}

const getSubmissionDetails = {
    controller: async (req, res) => {
        let submission = await submission_services.getSubmissionDetails(req.query.submission_id)
        res.respond(submission, 200, 'Submission fetched sucessfully');
    }
}




module.exports = { 
    createSubmission,
    updateSubmission,
    deleteSubmission,
    getSubmissionDetails,
    listSubmissions
}