import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Метод не разрешён' });
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email обязателен' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL, // твой Gmail
        pass: process.env.PASSWORD, // пароль приложения Gmail
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL,
      to: 'Adema.satybekova@gmail.com', // куда отправлять
      subject: 'Новый email для Saqta от пользователя',
      text: `Пользователь оставил email: ${email}`,
    });

    return res.status(200).json({ message: 'Email успешно отправлен!' });
  } catch (error) {
    console.error('Ошибка отправки:', error);
    return res.status(500).json({ message: 'Ошибка отправки письма' });
  }
}
