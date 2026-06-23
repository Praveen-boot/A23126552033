function logger(req, res, next) {

    const logData = {
        timestamp: new Date().toISOString(),
        method: req.method,
        url: req.originalUrl
    };

    console.log(JSON.stringify(logData));

    next();
}

module.exports = logger;