// backend/data.js

// 0. Informasi Pribadi & Ringkasan (Personal Info & Summary)
// Bagian ini adalah tentang diri Anda secara umum.
export const personalInfo = {
  name: "Roy Devgantara Purba",
  title: "Gelar/Profesi Anda (contoh: Full-Stack Developer, Mahasiswa Informatika)",
  tagline: "Slogan atau ringkasan singkat yang menarik tentang diri Anda dan apa yang Anda tawarkan.",
  bio: `Tulis paragraf singkat di sini tentang siapa Anda, apa minat Anda di bidang teknologi,
        apa yang membuat Anda bersemangat, dan tujuan karier Anda. Ini adalah 'elevator pitch' Anda.`,
  profilePicture: "/images/profile.jpg", // Ganti dengan path foto profil Anda
  contact: {
    email: "emailanda@example.com",
    phone: "+6281234567890", // Opsional
    location: "Kota, Negara Anda (contoh: Depok, Indonesia)"
  },
  socialLinks: {
    github: "https://github.com/YourGitHubUsername",
    linkedin: "https://linkedin.com/in/YourLinkedInProfile",
    twitter: "https://twitter.com/YourTwitterHandle", // Opsional
    // Tambahkan platform lain jika Anda punya
  }
};

// 1. Riwayat Pendidikan (Education History) - Data yang sudah Anda berikan
export const educationHistory = [
  {
    id: 1,
    institution: "Universitas Amikom Yogyakarta",
    major: "Informatika",
    period: "2023 - Sekarang"
  },
  {
    id: 2,
    institution: "SMA Bhudaya 2 Agustinus",
    major: "IPA",
    period: "2020 - 2023"
  },
  {
    id: 3,
    institution: "SMPN 32 Jakarta",
    major: "",
    period: "2017 - 2020"
  },
  {
    id: 4,
    institution: "SD Haravrd", // Periksa kembali apakah ada typo di nama sekolah "Haravrd"
    major: "",
    period: "2011 - 2017"
  }
];

// 2. Keahlian & Teknologi (Skills & Technologies) - Data yang sudah Anda berikan
export const skills = [
  { name: "JavaScript", level: "Menengah" },
  { name: "Vue.js", level: "Mahir" },
  { name: "Node.js", level: "Menengah" },
  { name: "HTML & CSS", level: "Mahir" },
  { name: "TailwindCSS", level: "Menengah" },
  { name: "Git & GitHub", level: "Mahir" },
  { name: "Figma", level: "Menengah" },
  { name: "MySQL", level: "Mahir" }
];

// 3. Proyek Unggulan (Featured Projects) - Data yang sudah Anda berikan
export const projects = [
  {
    title: "Website Portofolio Pribadi",
    description:
      "Portofolio interaktif yang sedang Anda lihat sekarang. Dibuat dengan Vue.js untuk frontend dan Express.js untuk backend.",
    image: "/images/bg-cover.jpg",
    tech: ["Vue.js", "TailwindCSS", "Express.js"],
    link: "https://github.com/Roydevv/Myporto.git"
  },
  {
    title: "Aplikasi Top UP All Game",
    description:
      "Proyek tugas akhir mata kuliah Pemrograman Web, membuat toko online dengan fitur keranjang belanja dan checkout.",
    image: "/images/lucien.jpg",
    tech: ["PHP", "Laravel", "Vue.js", "MySQL", "TailwindCSS"],
    link: "https://koosell.github.io/final-project-fullstack"
  },
  {
    title: "Aplikasi ABC Top Up",
    description:
      "Proyek Unit Kegiatan Mahasiswa Amikom Computer Club, membuat tempat membaca berupa E-book dengan fitur chat global dan membership.",
    image: "/images/abc.jpg",
    tech: ["Flutter", "Firebase", "Dart"],
    link: "https://koosell.github.io/final-project-fullstack"
  }
];

// 4. Pengalaman Kerja/Organisasi (Work/Organization Experience) - BAGIAN BARU (Opsional)
// Tambahkan bagian ini jika Anda memiliki pengalaman kerja atau organisasi.
export const workExperience = [
  {
    id: 1,
    title: "unior Web Developer",
    company: "ASTRA",
    period: "Sekarang",
    description: [
      "Memaksimalkan Kinerja Website Perusaan Yang Saya Bentuk Dengan Tim.",
      "Pembuatan Website Perusahaan Dengan Menggunakan Framework Vue.js.",
    ]
  },
  // Tambahkan objek lain untuk pengalaman lain jika ada
];

// 6. Testimoni (Testimonials) - BAGIAN BARU (Opsional, jika ada)
// Jika Anda memiliki testimoni dari klien, kolega, atau mentor.
export const testimonials = [
  {
    id: 1,
    quote: "Bekerja Dengan Enjoy Dengan Tanggung Jawab Penuh.",
    author: "Jhon",
    title: "Kepala Divisi",
  },
  // Tambahkan testimoni lain jika ada
];