import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
  id: {type: String, required: true},
  companyName: {type: String, required: true},
  mailAddress: {type: String, required: true},
  loginId: {type: String, required: true},
  password: {type: String, required: true},
});

const Company = mongoose.model('Company', companySchema);

module.exports = Company;