import mongoose from "mongoose";
var companySchema = new mongoose.Schema({
    id: { type: String, required: true },
    companyName: { type: String, required: true },
    mailAddress: { type: String, required: true },
    loginId: { type: String, required: true },
    password: { type: String, required: true },
});
var Company = mongoose.model('Company', companySchema);
export default Company;
