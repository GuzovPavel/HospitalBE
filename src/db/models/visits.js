const mongoose = require("mongoose");

const { Schema } = mongoose;

const visitScheme = new Schema({
  userId: String,
  patientName: String,
  doctorName: String,
  visitDate: String,
  complaint: String,
});

module.exports = Visit = mongoose.model("visits", visitScheme);