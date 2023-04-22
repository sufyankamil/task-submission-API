"use strict";
// Controller for the user details
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
exports.storeUserDetails = void 0;
const user_details_1 = require("../repositories/user-details");
const statusCode_1 = __importDefault(require("../constants/statusCode"));
const storeUserDetails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("sssssssssssssssssssssssssss");
    // calling the store user details repo function to store data
    const result = yield (0, user_details_1.storeDetails)(req, res);
    // If there is any error then throw error
    if (!result.success) {
        res.status(statusCode_1.default.BAD_GATEWAY).json({
            message: "unable to save user details in db",
        });
    }
    // If there is no error then send the response
    res.status(statusCode_1.default.OK).json({
        message: "User created successfully",
        user: result.user,
    });
});
exports.storeUserDetails = storeUserDetails;
//# sourceMappingURL=user-details.js.map