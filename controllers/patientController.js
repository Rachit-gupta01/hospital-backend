

const Patient = require("../models/patientModel");

// CREATE
exports.createPatient = async (req, res) => {
 const patient = new Patient(req.body);
 await patient.save();
 res.json(patient);
};

// READ
exports.getPatients = async (req, res) => {
 const patients = await Patient.find();
 res.json(patients);
};

// UPDATE
exports.updatePatient = async (req, res) => {
 const patient = await Patient.findByIdAndUpdate(
  req.params.id,
  req.body,
  { new: true }
 );
 res.json(patient);
};

// DELETE
exports.deletePatient = async (req, res) => {
 await Patient.findByIdAndDelete(req.params.id);
 res.json({ message: "Patient deleted" });
};
