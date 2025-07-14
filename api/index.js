// Myporto/api/index.js

import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';

// PERBAIKAN PENTING: Jalur ke data.js harus '../data.js' karena data.js ada di root Myporto
import { educationHistory, skills, projects } from '../data.js';

const app = express();

app.use(cors());
app.use(express.json());

// --- ROUTES UNTUK MENGAMBIL DATA ---
app.get('/api/education', (req, res) => res.json(educationHistory));
app.get('/api/skills', (req, res) => res.json(skills));
app.get('/api/projects', (req, res) => res.json(projects));

// --- API UNTUK MENGIRIM EMAIL ---
app.post('/api/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  // Konfigurasi Nodemailer - GUNAKAN ENVIRONMENT VARIABLES
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // Variabel Lingkungan dari Vercel
      pass: process.env.EMAIL_PASS  // Variabel Lingkungan dari Vercel
    }
  });

  // Opsi Email
  const mailOptions = {
    from: `"${name}" <${email}>`, // Pengirim
    to: process.env.EMAIL_USER, // Penerima (email Anda sendiri, dari env var juga)
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

// PERBAIKAN PENTING: Ekspor aplikasi agar Vercel bisa menggunakannya sebagai serverless function
export default app;

// HAPUS BARIS app.listen() DAN PORT LAMA KARENA TIDAK DIGUNAKAN UNTUK SERVERLESS
// app.listen(PORT, () => {
//   console.log(`Backend server berjalan di http://localhost:${PORT}`);
// });