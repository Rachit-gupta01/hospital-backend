//const express = require("express");
// const router = express.Router();

// const patientController = require("../controllers/patientController");

// router.post("/patients",patientController.createPatient);

// router.get("/patients",patientController.getPatients);

// router.get("/patients/:id",patientController.getPatientById);

// router.put("/patients/:id",patientController.updatePatient);

// router.delete("/patients/:id",patientController.deletePatient);

// router.get("/patients/search",patientController.searchPatient);

// module.exports = router;
const express = require("express");
const router = express.Router();

const patientController = require("../controllers/patientController");

router.post("/patients", patientController.createPatient);

router.get("/patients", patientController.getPatients);

module.exports = router;