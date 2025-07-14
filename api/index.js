// api/index.js
import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';

const app = express();
// const port = process.env.PORT || 3000; // Baris ini juga bisa dihapus jika port hanya untuk app.listen

// Middleware
app.use(cors());
app.use(express.json());

// Dummy Data
const educationHistory = [
    { id: 1, period: '2020-Sekarang', institution: 'Universitas ABC', major: 'Informatika' },
    { id: 2, period: '2017-2020', institution: 'SMA Negeri 123', major: 'IPA' }
];

const skills = [
    { id: 1, name: 'JavaScript', level: 'Advanced' },
    { id: 2, name: 'Vue.js', level: 'Intermediate' },
    { id: 3, name: 'Node.js', level: 'Intermediate' },
    { id: 4, name: 'HTML/CSS', level: 'Advanced' },
    { id: 5, name: 'Tailwind CSS', level: 'Intermediate' },
    { id: 6, name: 'Express.js', level: 'Intermediate' }
];

const projects = [
    {
        title: 'E-commerce Platform',
        image: '/images/project1.jpg',
        description: 'Membangun platform e-commerce lengkap dengan fitur keranjang belanja, checkout, dan manajemen produk.',
        tech: ['Vue.js', 'Node.js', 'Express.js', 'MongoDB', 'Stripe']
    },
    {
        title: 'Aplikasi Manajemen Tugas',
        image: '/images/project2.jpg',
        description: 'Aplikasi web untuk mengelola tugas-tugas harian dengan fitur daftar tugas, prioritas, dan notifikasi.',
        tech: ['React', 'Firebase', 'Redux', 'Material-UI']
    }
];

// Routes
app.get('/api/education', (req, res) => {
    res.json(educationHistory);
});

app.get('/api/skills', (req, res) => {
    res.json(skills);
});

app.get('/api/projects', (req, res) => {
    res.json(projects);
});

app.post('/api/send-email', async (req, res) => {
    const { name, email, message } = req.body;

    // TODO: Konfigurasi Nodemailer
    const transporter = nodemailer.createTransport({
        service: 'gmail', // Contoh: 'gmail', 'outlook', dll.
        auth: {
            user: process.env.EMAIL_USER, // Variabel lingkungan untuk email pengirim
            pass: process.env.EMAIL_PASS  // Variabel lingkungan untuk password email pengirim
        }
    }
);

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'tujuan_email_anda@example.com', // Ganti dengan email tujuan Anda
        subject: `Pesan dari Portofolio - ${name}`,
        html: `<p>Nama: ${name}</p><p>Email: ${email}</p><p>Pesan: ${message}</p>`
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email berhasil dikirim!' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'Gagal mengirim email.', error: error.message });
    }
});

// Vercel serverless function entry point
export default app;

// BAGIAN INI HARUS DIHAPUS SEPENUHNYA UNTUK DEPLOYMENT KE VERCEL
// if (process.env.NODE_ENV !== 'production') {
//     app.listen(port, () => {
//         console.log(`Server is running on http://localhost:${port}`);
//     });
// }