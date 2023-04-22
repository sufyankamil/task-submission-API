// Repository for user details table in database (src\repositories\user-details.ts)

import mongoose from "mongoose";
import userDetails from "../models/userDetails";
import logger from "../utils/logger";
import STATUS from "../constants/statusCode";

export const storeDetails = async (req: any, res: any) => {

    try {
        const {firstname, lastname, email, phone, dob} = req.body;
        const user = new userDetails({
            _id: new mongoose.Types.ObjectId(),
            firstname,
            lastname,
            email,
            phone,
            dob,
        });
        await user.save();
        res.status(STATUS.OK).json({
            message: "User created successfully",
            user,
        });
    } catch (err) {
        // logging the error
        logger.error(
            `at:"repositories/userDetails/storeUserDetails" => ${JSON.stringify(
                err
            )}`
        );
    }
};