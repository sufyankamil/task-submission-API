"use strict";
// Repository for user details table in database (src\repositories\user-details.ts)
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.storeDetails = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const userDetails_1 = __importDefault(require("../models/userDetails"));
const logger_1 = __importDefault(require("../utils/logger"));
const statusCode_1 = __importDefault(require("../constants/statusCode"));
const storeDetails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("sssssssssssssssssssssssssss");
    try {
        const { firstname, lastname, email, phone, dob } = req.body;
        const user = new userDetails_1.default({
            _id: new mongoose_1.default.Types.ObjectId(),
            firstname,
            lastname,
            email,
            phone,
            dob,
        });
        yield user.save();
        res.status(statusCode_1.default.OK).json({
            message: "User created successfully",
            user,
        });
    }
    catch (err) {
        // logging the error
        logger_1.default.error(`at:"repositories/userDetails/storeUserDetails" => ${JSON.stringify(err)}`);
    }
});
exports.storeDetails = storeDetails;
//# sourceMappingURL=user-details.js.map