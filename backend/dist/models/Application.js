"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const applicationSchema = new mongoose_1.default.Schema({
    id: { type: String, required: true },
    companyId: { type: String, required: true, ref: 'Company' },
    propertyName: { type: String, required: true },
    propertyAddress: { type: String, required: true },
    remarks: { type: String },
    responseStatus: { type: String, required: true },
    applyDateTime: { type: Date, required: true },
    files: [{
            id: { type: String, requiered: true },
            fileType: { type: String, required: true },
            fileName: { type: String, required: true },
        }],
});
const Application = mongoose_1.default.model('Application', applicationSchema);
module.exports = Application;
