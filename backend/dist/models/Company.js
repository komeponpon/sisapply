import mongoose from "mongoose";
var companySchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    companyName: { type: String, required: true, unique: true },
    mailAddress: { type: String, required: true, unique: true },
    loginId: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
});
var Company = mongoose.model('Company', companySchema);
export default Company;
