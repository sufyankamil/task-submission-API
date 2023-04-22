// Controller for the user details

import { Request, Response } from "express";
import { storeDetails } from "../repositories/user-details";
import STATUS from "../constants/statusCode";

export const storeUserDetails = async (req: Request, res: Response) => {

    // calling the store user details repo function to store data
    const result: any = await storeDetails(req, res);
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
}