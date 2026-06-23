const {
    getNotifications
} = require("./services/notificationService");

const {
    calculatePriority
} = require("./utils/priorityCalculator");

async function getTopNotifications() {

    try {

        const notifications =
            await getNotifications();

        notifications.sort((a, b) => {

            return (
                calculatePriority(b) -
                calculatePriority(a)
            );

        });

        const top10 =
            notifications.slice(0, 10);

        console.log("\n===== TOP 10 PRIORITY NOTIFICATIONS =====\n");

        console.log(
            JSON.stringify(
                top10,
                null,
                2
            )
        );

    } catch (error) {

        console.log("\n===== ERROR DETAILS =====\n");

        console.log(
            "STATUS:",
            error.response?.status
        );

        console.log(
            "DATA:",
            error.response?.data
        );

        console.log(
            "MESSAGE:",
            error.message
        );

    }

}

getTopNotifications();