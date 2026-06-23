require("dotenv").config();
const axios = require("axios");

const getVehicles = async () => {

    const response = await axios.get(
        "http://4.224.186.213/evaluation-service/vehicles",
        {
            headers: {
                Authorization: "Bearer " + process.env.ACCESS_TOKEN.trim()
            }
        }
    );

    return response.data;
};

module.exports = {
    getVehicles
};