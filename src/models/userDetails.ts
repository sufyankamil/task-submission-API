// Model for user details

import mongoose from "mongoose";

const userModals = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    dob: String,
});

export default mongoose.model("userDetails", userModals);