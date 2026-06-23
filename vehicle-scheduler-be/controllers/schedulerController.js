const { getDepots } = require("../services/depotService");
const { getVehicles } = require("../services/vehicleService");
const knapsack = require("../algorithms/knapsack");

const getOptimalSchedule = async (req, res) => {

    try {

        const depotId = Number(req.params.depotId);

        console.log("Fetching depots...");
        const depots = await getDepots();

        console.log("Fetching vehicles...");
        const vehicleResponse = await getVehicles();

        console.log(vehicleResponse);

        const vehicles = vehicleResponse.vehicles || vehicleResponse;

        const depot = depots.find(
            d => d.ID === depotId
        );

        if (!depot) {
            return res.status(404).json({
                message: "Depot not found"
            });
        }

        const result = knapsack(
            vehicles,
            depot.MechanicHours
        );

        res.status(200).json({
            depotId,
            mechanicHours: depot.MechanicHours,
            totalImpact: result.totalImpact,
            selectedTasks: result.selectedTasks
        });

    } catch (error) {

        console.log("ERROR:", error.response?.data);

        res.status(500).json({
            message: error.message,
            details: error.response?.data
        });

    }
};

module.exports = {
    getOptimalSchedule
};