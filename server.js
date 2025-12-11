const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// ------------------ DATA ------------------

const profile = {
  name: "P. Vydeesh",
  roll: "ME25B144",
  about: "I'm Vydeesh (ME25B144)... love discovering things.",
  email: "me25b144@smail.iitm.ac.in"
};

const hobbies = [
  "Badminton",
  "Sports",
  "Learning tech stuff",
  "Exploring fun things online",
  "Trying new skills"
];

const aspirations = [
  "Travel",
  "Blockchain",
  "Innovative tech projects",
  "Badminton 🏸"
];

const skills = [
  "JavaScript",
  "HTML + CSS",
  "Node.js Basics",
  "Tech Exploration",
  "Problem Solving"
];

// ------------------ API ENDPOINTS ------------------

app.get("/api/profile", (req, res) => {
  res.status(200).json({ success: true, data: profile });
});

app.get("/api/hobbies", (req, res) => {
  res.status(200).json({ success: true, count: hobbies.length, hobbies });
});

app.get("/api/aspirations", (req, res) => {
  res.status(200).json({ success: true, count: aspirations.length, aspirations });
});

app.get("/api/skills", (req, res) => {
  res.status(200).json({ success: true, count: skills.length, skills });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Endpoint not found" });
});

// Start server
app.listen(PORT, () => console.log(`API running on port ${PORT}`));
