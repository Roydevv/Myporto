import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import { educationHistory, skills, projects } from '../data.js';

// Log ini akan muncul saat fungsi diinisialisasi oleh Vercel
console.log("API Function is initializing...");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
console.log("Middleware (cors, express.json) loaded.");

// --- ROUTES API ---
app.get("/education", (req, res) => {
  console.log("Accessed /education endpoint"); // Tambahkan log di sini
  res.json(educationHistory);
});

app.get("/skills", (req, res) => {
  console.log("Accessed /skills endpoint"); // Tambahkan log di sini
  res.json(skills);
});

app.get("/projects", (req, res) => {
  console.log("Accessed /projects endpoint"); // Tambahkan log di sini
  res.json(projects);
});

// Endpoint untuk mengirim email
app.post("/send-email", async (req, res) => {
    console.log("Accessed /send-email endpoint"); // Tambahkan log di sini
    // ... sisa kode Anda
});


// Ekspor app untuk Vercel
export default app;