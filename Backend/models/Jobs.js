const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
    companyName: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    salary: { type: Number, required: true },
    applicants: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }]
}, { timestamps: true });

module.exports = mongoose.model("Job", JobSchema);
