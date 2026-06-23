const axios = require("axios");
require("dotenv").config();

const getNotifications = async () => {

    const response = await axios.get(
        "http://4.224.186.213/evaluation-service/notifications",
        {
            headers: {
                Authorization:
                    "Bearer " +
                    process.env.ACCESS_TOKEN.trim()
            }
        }
    );

    return response.data.notifications;
};

module.exports = {
    getNotifications
};