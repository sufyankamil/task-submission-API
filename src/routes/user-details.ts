// Routes for performing user details operation. --[CREATED]

import express, { Request, Response, NextFunction } from "express";
import { storeUserDetails } from "../controllers/user-details";
import STATUS from "../constants/statusCode";
import {storeDetails} from "../repositories/user-details";
import * as userController from "../controllers/user-details";

const router = express.Router();

router.post("/storeUserDetails", async (req: Request, res: Response, next: NextFunction) => {

    // calling the store user details repo function to store data
    const result: any = await userController.storeUserDetails(req, res);

    // If there is any error then throw error
    if (!result.success) {
        res.status(STATUS.BAD_GATEWAY).json({
            message: "unable to save user details in db",
        });
    }

    // If there is no error then send the response
    res.status(STATUS.OK).json({
        message: "User created successfully",
        user: result.user,
    });
});

export default router;
