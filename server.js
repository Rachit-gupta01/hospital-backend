const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const patientRoutes = require("./routes/patientRoutes");
const app = express();

app.use(express.json());
app.use("/api", patientRoutes);
app.get("/", (req, res) => {
res.send("Hospital Backend API Running");
});
mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.listen(process.env.PORT, ()=>{
console.log("Server running on port 5000");
});