const demand_services = require("../services/demand_services")

const createDemand = {
    controller: async (req, res) => {
        let new_obj = {...req.body}
        new_obj["created_by"] = req.auth.user_id
        let new_demand = await demand_services.create(new_obj)
        res.respond(new_demand, 200, 'Demand created successfully.');
    }
}

const updateDemand = {
    controller: async (req, res) => {
        await demand_services.updateDemand(req.body)
        res.respond("Demand updated successfully", 200, 'Demand updated successfully.');
    }
}

const deleteDemand = {
    controller: async (req, res) => {
        await demand_services.deleteDemand(req.body._id)
        res.respond("Demand deleted successfully", 200, 'Demand deleted successfully.');
    }
}

const listDemands = {
    controller: async (req, res) => {
        let demands = await demand_services.listDemands(req.query)
        res.respond(demands, 200, 'Demands fetched sucessfully');
    }
}

const getDemandDetails = {
    controller: async (req, res) => {
        let demand = await demand_services.getDemandDetails(req.query.demand_id)
        res.respond(demand, 200, 'Demands fetched sucessfully');
    }
}

module.exports = { 
    createDemand,
    updateDemand,
    deleteDemand,
    listDemands,
    getDemandDetails
}