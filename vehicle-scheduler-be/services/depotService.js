require("dotenv").config();
const axios = require("axios");

const getDepots = async () => {

    console.log("TOKEN:", process.env.ACCESS_TOKEN);

    const response = await axios.get(
        "http://4.224.186.213/evaluation-service/depots",
        {
            headers: {
                Authorization: "Bearer " + process.env.ACCESS_TOKEN.trim()
            }
        }
    );

    return response.data.depots;
};

module.exports = {
    getDepots
};