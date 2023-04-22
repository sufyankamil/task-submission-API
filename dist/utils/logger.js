"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpLogger = void 0;
/**
 * To Use:
 * 1) Import this file and as logger eg: import logger from './logger'
 * 2) Use logger.info for all info, logger warn for all warnings and logger error for all errors.
 * 3) For critical errors only, use logger error otherwise use warn or info
 * 4) If something fails but is manageable, use warn to let the auditor know what needs attention
 * 5) If something is just for information such as a new entry was created in the DB, use info
 * 6) Use logger error that needs attention and should be fixed immediately for the app to function properly in production
 * 7) logger.http is used by morgan to log http requests, don't use it
 * 8) In development, you can use logger debug, logger verbose and logger.silly. Use these only for development, if anything should be a part of the production logs, it should be logged using logger.info, logger.warn or logger error
 * 9) Log files will be stored inside the logs folder and will be updated daily. They will not be pushed to the git repo
 */
const winston = __importStar(require("winston"));
// Default exported function that will set up Winston for logging
// Getting the required function from the format module
const { combine, timestamp, label, printf } = winston.format;
// Creating a custom formats for logs
const customFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp}, ${level.toUpperCase()} [${label}] => ${message}`;
});
const httpFormat = printf(({ level, message, label }) => {
    return `${level.toUpperCase()} [${label}] => ${message}`;
});
// Create a logger using winston
const logger = winston.createLogger({
    // Setting the level to log info or higher only
    level: "info",
    // Using the custom format for logging
    transports: [
        new winston.transports.Console({
            level: "info",
            format: combine(
            // winston.format.colorize({ colors }),
            label({ label: "APP_BUILDER.SERVER" }), timestamp({ format: "YYYY-MM-DDTHH:mm:ss:ms" }), customFormat),
        }),
    ],
    // Do not exit application in case of an error
    exitOnError: false,
});
// If environment is not production, then log all levels to the console as well
if (process.env.NODE_ENV !== "production") {
    logger.add(new winston.transports.Console({
        level: "silly",
        format: winston.format.simple(),
    }));
}
// Logger for HTTP requests only
exports.httpLogger = winston.createLogger({
    level: "http",
    transports: [
        new winston.transports.Console({
            level: "http",
            format: combine(label({ label: "NEAR.SERVER" }), httpFormat),
        }),
    ],
});
exports.default = logger;
//# sourceMappingURL=logger.js.map