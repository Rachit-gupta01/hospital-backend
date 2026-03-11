
const Patient = require("../models/patientModel");

exports.createPatient = async (req, res) => {

try {

const patient = new Patient(req.body);

await patient.save();

res.status(201).json(patient);

} catch (err) {

res.status(500).json({ error: err.message });

}

};

exports.getPatients = async (req, res) => {

try {

const patients = await Patient.find();

res.json(patients);

} catch (err) {

res.status(500).json({ error: err.message });

}

};