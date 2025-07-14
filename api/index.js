// Myporto/api/index.js

import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
// PERBAIKAN: Ubah './data.js' menjadi '../data.js'
import { educationHistory, skills, projects } from '../data.js';

const app = express();

app.use(cors());
app.use(express.json());

// --- ROUTES DATA LAMA ---
app.get('/api/education', (req, res) => res.json(educationHistory));
app.get('/api/skills', (req, res) => res.json(skills));
app.get('/api/projects', (req, res) => res.json(projects));

// --- API BARU UNTUK MENGIRIM EMAIL ---
app.post('/api/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // Gunakan variabel lingkungan dari Vercel
      pass: process.env.EMAIL_PASS  // Gunakan variabel lingkungan dari Vercel
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

// PERBAIKAN PENTING: Ekspor aplikasi untuk Vercel
export default app;

// HAPUS BAGIAN app.listen INI KARENA TIDAK DIPERLUKAN UNTUK SERVERLESS
/*
app.listen(PORT, () => {
  console.log(`Backend server berjalan di http://localhost:${PORT}`);
});
*/