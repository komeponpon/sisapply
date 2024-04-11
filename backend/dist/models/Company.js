"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const companySchema = new mongoose_1.default.Schema({
    id: { type: String, required: true },
    companyName: { type: String, required: true },
    mailAddress: { type: String, required: true },
    loginId: { type: String, required: true },
    password: { type: String, required: true },
});
const Company = mongoose_1.default.model('Company', companySchema);
module.exports = Company;
