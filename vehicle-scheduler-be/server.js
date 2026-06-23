const express = require("express");
const cors = require("cors");
require("dotenv").config();

const schedulerRoutes = require("./routes/schedulerRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/schedule", schedulerRoutes);

app.get("/", (req, res) => {
    res.send("Vehicle Scheduler Backend Running");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});