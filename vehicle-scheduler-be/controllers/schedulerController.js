const { getDepots } = require("../services/depotService");
const { getVehicles } = require("../services/vehicleService");
const knapsack = require("../algorithms/knapsack");

const getOptimalSchedule = async (req, res) => {

    try {

        const depotId = Number(req.params.depotId);

        const depots = await getDepots();

        const depot = depots.find(
            depot => depot.ID === depotId
        );

        if (!depot) {

            return res.status(404).json({
                message: "Depot not found"
            });

        }

        const vehicleResponse = await getVehicles();

        const vehicles = vehicleResponse.vehicles || vehicleResponse;

        const result = knapsack(
            vehicles,
            depot.MechanicHours
        );

        res.status(200).json({
            depotId: depot.ID,
            mechanicHours: depot.MechanicHours,
            totalImpact: result.totalImpact,
            selectedTasks: result.selectedTasks
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

module.exports = {
    getOptimalSchedule
};