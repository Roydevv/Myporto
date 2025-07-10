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
    institution: 'SMa BHUDAYA 2 AGUSTINUS',
    major: 'IPA',
    period: '2020 - 2023',
},
{
    id: 3,
    institution: 'SMPN 32 JAKARTA',
    major: '',
    period: '2017 - 2020',
},
{
    id: 4,
    institution: 'SD HARAVRD',
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
    image: '/images/bg-cover.jpg', // Simpan gambar di folder `frontend/public/images/`
    tech: ['Vue.js', 'TailwindCSS', 'Express.js'],
    link: 'https://github.com/Roydevv/Myporto.git', // Link ke GitHub atau demo langsung
},
{
    title: 'Aplikasi Top UP All Game',
    description: 'Proyek tugas akhir mata kuliah Pemrograman Web, membuat toko online dengan fitur keranjang belanja dan checkout.',
    image: '/images/lucien.jpg',
    tech: ['PHP', 'Laravel', 'Vue.js', 'MySQL', 'TailwindCSS'],
    link: 'https://Koosell.github.io/final-project-fullstack', 
},
{
    title: 'Aplikasi ABC Top Up',
    description: 'Proyek Unit Kegiatan Mahasiswa Amikom Computer Club, membuat tempat membaca berupa E-book dengan fitur chat global dan membership.',
    image: '/images/abc.jpg',
    tech: ['Flutter', 'Firebase', 'Dart'],
    link: 'https://Koosell.github.io/final-project-fullstack',
},
];