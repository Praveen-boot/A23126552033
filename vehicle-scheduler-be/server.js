const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const schedulerRoutes = require("./routes/schedulerRoutes");
const { getVehicles } = require("./services/vehicleService");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/schedule", schedulerRoutes);

app.get("/", (req, res) => {
    res.send("Vehicle Scheduler Backend Running");
});

app.get("/test-token", async (req, res) => {

    try {

        const response = await axios.get(
            "http://4.224.186.213/evaluation-service/depots",
            {
                headers: {
                    Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
                }
            }
        );

        res.json(response.data);

    } catch (error) {

        res.status(500).json({
            status: error.response?.status,
            data: error.response?.data,
            message: error.message
        });

    }

});

app.get("/test-vehicles", async (req, res) => {

    try {

        const vehicles = await getVehicles();

        res.json(vehicles);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});