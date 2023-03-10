const employee_schema = require("./employee_schema")
const demand_schema = require("./demand_schema")
const candidate_schema = require("./candidate_schema")
const submission_schema = require("./submission_schema")

module.exports = (db) => {

    db.model("employee", employee_schema);
    db.model("demand", demand_schema);
    db.model("candidate", candidate_schema);
    db.model("submission", submission_schema);
    
    
    return db;

}