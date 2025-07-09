// backend/data.js

// 1. Riwayat Pendidikan
export const educationHistory = [
{
    id: 1,
    institution: 'Universitas Amikom Yogyakarta',
    major: 'Informatika',
    period: '2023 - Sekarang',
},
{
    id: 2,
    institution: 'SMK AL-IMAN Banjar Agung',
    major: 'Teknik Komputer dan Jaringan',
    period: '2020 - 2023',
},
{
    id: 3,
    institution: 'MTs AL-IMAN Banjar Agung',
    major: '',
    period: '2017 - 2020',
},
{
    id: 4,
    institution: 'SDN 01 Ringin Sari',
    major: '',
    period: '2011 - 2017',
},
];

// 2. Keahlian & Teknologi
export const skills = [
{ name: 'JavaScript', level: 'Menengah' },
{ name: 'Vue.js', level: 'Mahir' },
{ name: 'Node.js', level: 'Menengah' },
{ name: 'HTML & CSS', level: 'Mahir' },
{ name: 'TailwindCSS', level: 'Menengah' },
{ name: 'Git & GitHub', level: 'Mahir' },
{ name: 'Figma', level: 'Menengah' },
{ name: 'MySQL', level: 'Mahir' },
];

// 3. Proyek Unggulan
export const projects = [
{
    title: 'Website Portofolio Pribadi',
    description: 'Portofolio interaktif yang sedang Anda lihat sekarang. Dibuat dengan Vue.js untuk frontend dan Express.js untuk backend.',
    image: '/images/proyek-portfolio.png', // Simpan gambar di folder `frontend/public/images/`
    tech: ['Vue.js', 'TailwindCSS', 'Express.js'],
    link: 'https://github.com/wahidnur659/interactive-cv', // Link ke GitHub atau demo langsung
},
{
    title: 'Aplikasi E-Commerce Sepatu',
    description: 'Proyek tugas akhir mata kuliah Pemrograman Web, membuat toko online dengan fitur keranjang belanja dan checkout.',
    image: '/images/lucien.jpg',
    tech: ['PHP', 'Laravel', 'Vue.js', 'MySQL', 'TailwindCSS'],
    link: 'https://github.com/GITikhsan/LUCIEN-AVENUE-FRONTEND.git', 
},
{
    title: 'Aplikasi E-Book Cendikia',
    description: 'Proyek Unit Kegiatan Mahasiswa Amikom Computer Club, membuat tempat membaca berupa E-book dengan fitur chat global dan membership.',
    image: '/images/cendikia.jpg',
    tech: ['Flutter', 'Firebase', 'Dart'],
    link: 'https://github.com/wahidnur659/cendikia.git',
},
];