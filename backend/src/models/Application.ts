import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
  id: {type: String, required: true},
  companyId: {type: String, required: true, ref: 'Company'},
  propertyName: {type: String, required: true},
  propertyAddress: {type: String, required: true},
  remarks: {type: String},
  responseStatus: {type: String, required: true},
  applyDateTime: {type: Date, required: true},
  files:[{
    id: {type: String, required: true},
    fileType: {type: String, required: true},
    fileName: {type: String, required: true},
  }],
});

const Application = mongoose.model('Application', applicationSchema);

export default Application;