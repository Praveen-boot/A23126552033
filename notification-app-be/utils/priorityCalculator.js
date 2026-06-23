function getTypeWeight(type) {

    if (type === "Placement") return 3;

    if (type === "Result") return 2;

    return 1;
}

function calculatePriority(notification) {

    const weight =
        getTypeWeight(notification.Type);

    const timestamp =
        new Date(notification.Timestamp).getTime();

    return weight * 1000000000000 + timestamp;
}

module.exports = {
    calculatePriority
};