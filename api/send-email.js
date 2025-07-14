import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed')
  }

  const { name, email, message } = req.body

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  })

  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: process.env.EMAIL_USER,
    subject: `Pesan Baru dari Portofolio dari ${name}`,
    text: `Anda mendapat pesan dari: ${name} (${email})\n\nPesan:\n${message}`
  }

  try {
    await transporter.sendMail(mailOptions)
    res.status(200).send('Pesan berhasil terkirim!')
  } catch (error) {
    console.error('Gagal mengirim email:', error)
    res.status(500).send('Gagal mengirim pesan.')
  }
}