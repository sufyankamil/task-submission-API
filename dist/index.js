"use strict";
// Setting up Node-Express application
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const helmet_1 = __importDefault(require("helmet"));
const dbCon_1 = require("./db-init/dbCon");
// Create an instance of express
const app = (0, express_1.default)();
app.set("trust-proxy", 1);
// Block all unwanted headers using helmet
app.use((0, helmet_1.default)());
// Disable x-powered-by header separately
app.disable("x-powered-by");
// Setup server
// app.use(cors());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({
    extended: false,
}));
app.disable("etag"); // Disables caching
// Routes
// app.use("/userDetails", userDetails);
(0, dbCon_1.createConnection)();
exports.default = app;
//# sourceMappingURL=index.js.map