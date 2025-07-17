const Job = require("../models/Jobs");

exports.createJob = async (req, res) => {
    try {
        const job = new Job(req.body);
        await job.save();
        res.status(201).json({ msg: "Job created successfully", job });
    } catch (err) {
        res.status(500).json({ msg: "Server Error" });
    }
};

exports.getJobs = async (req, res) => {
    try {
        const jobs = await Job.find();
        res.json(jobs);
    } catch (err) {
        res.status(500).json({ msg: "Server Error" });
    }
};
