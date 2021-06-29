const mongoose = require("mongoose");

const { Schema } = mongoose;

const visitScheme = new Schema({
  userId: String,
  patientName: String,
  doctorName: String,
  visitDate: String,
  complaint: String,
  user: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "users._id" 
    }
});



module.exports = Visit = mongoose.model("visits", visitScheme);
