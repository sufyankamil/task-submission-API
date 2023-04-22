"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createConnection = void 0;
// Connect to the database and export the connection
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const createConnection = () => {
    const URL = process.env.MONGODB_URI || "mongodb://0.0.0.0:27017/testdb";
    console.log("URL: ", URL);
    mongoose.connect(URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }, (err) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log("Connected to database");
        }
    });
    app.listen(3009, () => {
        console.log("Server started");
    });
};
exports.createConnection = createConnection;
//# sourceMappingURL=dbCon.js.map