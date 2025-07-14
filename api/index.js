// api/index.js
import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
// Path ini sudah benar jika data.js berada di root folder Myporto/
import { educationHistory, skills, projects } from '../data.js';

const app = express();

app.use(cors());
app.use(express.json());

// ROUTE DATA
app.get('/api/education', (req, res) => res.json(educationHistory));
app.get('/api/skills', (req, res) => res.json(skills));
app.get('/api/projects', (req, res) => res.json(projects));

// ROUTE KIRIM EMAIL
app.post('/api/send-email', async (req, res) => {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER, // Pastikan ini diatur di Vercel
            pass: process.env.EMAIL_PASS  // Pastikan ini diatur di Vercel
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

// PENTING: Ekspor aplikasi agar Vercel bisa menggunakannya
export default app;