import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "react-toastify";

// Функция для сохранения email в Firestore
const SendEmail = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);
    try {
      const response = await fetch(
        "https://your-vercel-project.vercel.app/api/sendEmail", // ⬅️ вот сюда правильный URL
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error(`Ошибка сети: ${response.status}`);
      }
      
      toast.error(`Email успешно отправлен!`);
    } catch (error) {
      console.error("Ошибка:", error);
      toast.error(`Не удалось отправить email.`);
    }
  };

  return (
    <motion.div
      className="send-email-card"
      initial={{ opacity: 0, y: 100 }} // Начальное состояние
      whileInView={{ opacity: 1, y: 0 }} // Переход на активное состояние
      exit={{ opacity: 0, y: -100 }} // Исчезновение
      transition={{ duration: 0.5 }} // Настройки плавности
    >
      <form onSubmit={handleSubmit}>
        <div className="send-email-content">
          <input
            type="email"
            placeholder="Введите email"
            className="email-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Обновление состояния при вводе
          />
          <button type="submit" className="send-button">
            Отправить
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default SendEmail;
