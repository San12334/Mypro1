const candidate_services = require("../services/candidate_services")

const createCandidate = {
    controller: async (req, res) => {
        let new_obj = {...req.body}
        new_obj["created_by"] = req.auth.user_id
        let new_candidate = await candidate_services.create(new_obj)
        res.respond(new_candidate, 200, 'New candidate created successfully.');
    }
}

const updateCandidate = {
    controller: async (req, res) => {
        await candidate_services.updateCandidate(req.body)
        res.respond("Candidate updated successfully", 200, 'Candidate updated successfully.');
    }
}

const deleteCandidate = {
    controller: async (req, res) => {
        await candidate_services.deleteCandidate(req.body._id)
        res.respond("Candidate deleted successfully", 200, 'Candidate deleted successfully.');
    }
}

const listCandidates = {
    controller: async (req, res) => {
        let Candidates = await candidate_services.listCandidates(req.query)
        res.respond(Candidates, 200, 'Candidates fetched sucessfully');
    }
}

const getCandidateDetails = {
    controller: async (req, res) => {
        let Candidate = await candidate_services.getCandidateDetails(req.query.candidate_id)
        res.respond(Candidate, 200, 'Candidate fetched sucessfully');
    }
}

const searchCandidates = {
    controller: async (req, res) => {
        let Candidate = await candidate_services.getCandidateDetailsByEmail(req.query.email_id)
        res.respond(Candidate, 200, 'Candidate fetched sucessfully');
    }
}

const uploadCandidateResume = {
    controller: async (req, res) => {
        res.respond({document:req.file.location}, 200, 'Document uploaded sucessfully');
    }
}


module.exports = { 
    createCandidate,
    updateCandidate,
    deleteCandidate,
    listCandidates,
    getCandidateDetails,
    uploadCandidateResume,
    searchCandidates
}