import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const email = req.body.email || req.query.email;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  // Создаем транспортер для Gmail
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER, // Твоя почта
      pass: process.env.GMAIL_PASS, // Пароль приложения
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER, // себе на почту
      subject: "Новый email для Saqta от пользователя",
      text: `Пользователь оставил email: ${email}`,
    });

    res.status(200).json({ message: "Email успешно отправлен!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Ошибка при отправке письма" });
  }
}

