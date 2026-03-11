

const express = require("express");
const router = express.Router();

const patientController = require("../controllers/patientController");

// CREATE
router.post("/patients", patientController.createPatient);

// READ
router.get("/patients", patientController.getPatients);

// UPDATE
router.put("/patients/:id", patientController.updatePatient);

// DELETE
router.delete("/patients/:id", patientController.deletePatient);

module.exports = router;
