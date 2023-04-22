// Setting up Node-Express application

import express from 'express';
import bodyParser from 'body-parser';
import logger from "./utils/logger";
import helmet from 'helmet';
import {createConnection} from "./db-init/dbCon";
import userDetails from "./routes/user-details";

// Create an instance of express
const app = express();

app.set("trust-proxy", 1);

// Block all unwanted headers using helmet
app.use(helmet());

// Disable x-powered-by header separately
app.disable("x-powered-by");

// Setup server
// app.use(cors());
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: false,
    })
);
app.disable("etag"); // Disables caching

// Routes
app.use("/userDetails", userDetails);

createConnection();

export default app;