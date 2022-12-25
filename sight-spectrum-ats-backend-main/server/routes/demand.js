const express = require("express");
const router = express.Router();
const demand_controller = require("../controllers/demand_controller")

router.post("/createDemand", demand_controller.createDemand.controller)
router.post("/updateDemand", demand_controller.updateDemand.controller)
router.post("/deleteDemand", demand_controller.deleteDemand.controller)

router.get("/listDemands", demand_controller.listDemands.controller)
router.get("/getDemandDetails", demand_controller.getDemandDetails.controller)

module.exports = router
