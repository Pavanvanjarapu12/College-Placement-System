const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(express.json());
app.use(cors());

// Example route
app.get("/", (req, res) => {
    res.send(" Server is running!");
});

// Start the server
app.listen(PORT, () => {
    console.log(` Server running at: http://localhost:${PORT}`);
});
