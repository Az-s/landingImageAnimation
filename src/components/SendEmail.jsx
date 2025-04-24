import { motion } from "framer-motion";

const SendEmail = () => {
  return (
    <motion.div
    className="send-email-card"
    initial={{ opacity: 0, y: 100 }} // Элемент начинается ниже экрана
    whileInView={{ opacity: 1, y: 0 }} // Центрируется при появлении в зоне видимости
    exit={{ opacity: 0, y: -100 }} // Исчезает вверх, когда выходит из зоны видимости
    viewport={{ amount: 0.5, once: false }} // Настройка видимости
    transition={{ duration: 0.5 }}
  >
    <form action="submit">
      <div className="send-email-content">
        <input type="email" placeholder="Ваш email" className="email-input" />
        <button type="submit" className="send-button">Отправить</button>
      </div>
    </form>
  </motion.div>
  );
};

export default SendEmail;
