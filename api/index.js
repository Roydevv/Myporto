// api/index.js (letakkan file ini di folder Myporto/api/)

import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer'; // <-- Import nodemailer
// PERBAIKAN PENTING: Ubah './data.js' menjadi '../data.js'
import { educationHistory, skills, projects } from '../data.js';

const app = express();
// HAPUS BARIS PORT = 3000; KARENA TIDAK DIGUNAKAN DI SERVERLESS
// const PORT = 3000; 

app.use(cors());
app.use(express.json());

// --- ROUTES DATA LAMA ---
app.get('/api/education', (req, res) => res.json(educationHistory));
app.get('/api/skills', (req, res) => res.json(skills));
app.get('/api/projects', (req, res) => res.json(projects));


// --- API BARU UNTUK MENGIRIM EMAIL ---
app.post('/api/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  // Konfigurasi Nodemailer
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // Gunakan variabel lingkungan dari Vercel
      pass: process.env.EMAIL_PASS  // Gunakan variabel lingkungan dari Vercel
    }
  });

  // Opsi Email
  const mailOptions = {
    from: `"${name}" <${email}>`, // Pengirim
    to: process.env.EMAIL_USER, // Penerima (email Anda sendiri)
    subject: `Pesan Baru dari Portofolio dari ${name}`,
    text: `Anda mendapat pesan dari: ${name} (${email})\n\nPesan:\n${message}`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Pesan berhasil terkirim!');
  } catch (error) {
    console.error('Error sending email:', error); // Log error lebih detail
    res.status(500).send('Gagal mengirim pesan.');
  }
});

// PERBAIKAN PENTING: Ekspor aplikasi agar Vercel bisa menggunakannya
export default app; 

// HAPUS BAGIAN INI KARENA INI UNTUK SERVER TRADISIONAL, BUKAN SERVERLESS
/*
app.listen(PORT, () => {
  console.log(`Backend server berjalan di http://localhost:${PORT}`);
});
*/