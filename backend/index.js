// backend/index.js

import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer'; // <-- Import nodemailer
import { educationHistory, skills, projects } from './data.js';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// --- ROUTES DATA LAMA (BIARKAN SAJA) ---
app.get('/api/education', (req, res) => res.json(educationHistory));
app.get('/api/skills', (req, res) => res.json(skills));
app.get('/api/projects', (req, res) => res.json(projects));


// --- API BARU UNTUK MENGIRIM EMAIL ---
app.post('/api/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  // Konfigurasi Nodemailer (GANTI DENGAN DATAMU)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'wahidnur659@gmail.com', // <-- GANTI DENGAN EMAILMU
      pass: 'bzar gegm xitl bcyz' // <-- GANTI DENGAN APP PASSWORD
    }
  });

  // Opsi Email
  const mailOptions = {
    from: `"${name}" <${email}>`, // Pengirim
    to: 'wahidnur659@gmail.com', // Penerima (emailmu sendiri)
    subject: `Pesan Baru dari Portofolio dari ${name}`,
    text: `Anda mendapat pesan dari: ${name} (${email})\n\nPesan:\n${message}`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Pesan berhasil terkirim!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Gagal mengirim pesan.');
  }
});


// Jalankan server
app.listen(PORT, () => {
  console.log(`Backend server berjalan di http://localhost:${PORT}`);
});