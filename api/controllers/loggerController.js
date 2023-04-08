const morgan = require('morgan')
const winston = require('winston')
const userAgent = require('useragent')

const adminLogger = async (req, res) => {
    const { level, message } = req.body;
    const agent = userAgent.parse(req.headers['user-agent']);

    const logger = winston.createLogger({
        // format: winston.format.combine(
        //     winston.format.timestamp(),
        //     winston.format.combine(({ timestamp, level, message }) => {
        //         return `${timestamp} [${level}] ${agent.toAgent()} ${req.path} - ${message}`;
        //     })
        // ),
        format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.json()
        ),
        transports: [
            new winston.transports.File({
                filename: `logs/admin.log`,
                level: level,
            }),
        ],
    });


    logger.log(level, message);

    res.sendStatus(200);
};

const clientLogger = async (req, res) => {
    const { level, message } = req.body;
    const agent = userAgent.parse(req.headers['user-agent']);

    const logger = winston.createLogger({
        // format: winston.format.combine(
        //     winston.format.timestamp(),
        //     winston.format.combine(({ timestamp, level, message }) => {
        //         return `${timestamp} [${level}] ${agent.toAgent()} ${req.path} - ${message}`;
        //     })
        // ),
        format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.json()
        ),
        transports: [
            new winston.transports.File({
                filename: `logs/client.log`,
                level: level,
            }),
        ],
    });

    logger.log(level, message);

    res.sendStatus(200);
};

module.exports = {
    adminLogger,
    clientLogger
};
