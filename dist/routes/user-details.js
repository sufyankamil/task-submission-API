"use strict";
// Routes for performing user details operation. --[CREATED]
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
const express_1 = __importDefault(require("express"));
const statusCode_1 = __importDefault(require("../constants/statusCode"));
const userController = __importStar(require("../controllers/user-details"));
const router = express_1.default.Router();
router.post("/storeUserDetails", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // calling the store user details repo function to store data
    // const result: any = await storeDetails(req, res);
    const result = yield userController.storeUserDetails(req, res);
    console.log("sssssssssssssssssssssssssss");
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
}));
exports.default = router;
//# sourceMappingURL=user-details.js.map