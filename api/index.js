// Myporto/api/index.js

import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';

// Jalur ke data.js
import { educationHistory, skills, projects } from '../data.js';

const app = express();

app.use(cors());
app.use(express.json());

// --- ROUTES TANPA AWALAN /api ---
app.get('/education', (req, res) => res.json(educationHistory));
app.get('/skills', (req, res) => res.json(skills));
app.get('/projects', (req, res) => res.json(projects));

// --- API UNTUK MENGIRIM EMAIL ---
app.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  // Pastikan variabel lingkungan sudah diatur di Vercel
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: process.env.EMAIL_USER,
    subject: `Pesan Baru dari Portofolio dari ${name}`,
    text: `Anda mendapat pesan dari: ${name} (${email})\n\nPesan:\n${message}`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Pesan berhasil terkirim!');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Gagal mengirim pesan.');
  }
});

// Ekspor aplikasi untuk Vercel
export default app;