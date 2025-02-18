import { useState } from 'react';
import axios from 'axios';
import styles from './ChatSupport.module.css';

function ChatSupport() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!message.trim()) return;

    const newMessage = { text: message, sender: 'user' };
    setMessages(prev => [...prev, newMessage]);
    setMessage('');
    setLoading(true);

    try {
      await axios.post('http://localhost:5000/api/support', { message });

      // ✅ Добавляем автоответ от поддержки
      setTimeout(() => {
        setMessages(prev => [
          ...prev,
          {
            text: 'Спасибо за обращение! Ваша заявка принята.',
            sender: 'support',
          },
        ]);
      }, 500); // Добавляем небольшую задержку для реалистичности
    } catch (error) {
      console.error(
        '❌ Ошибка отправки:',
        error.response?.data || error.message
      );
      setMessages(prev => [
        ...prev,
        {
          text: `❌ Ошибка: ${
            error.response?.data?.message || 'Неизвестная ошибка'
          }`,
          sender: 'error',
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={styles.chatSection}>
      <h2>💬 Чат поддержки</h2>
      <div className={styles.chatWindow}>
        {messages.map((msg, idx) => (
          <p
            key={idx}
            className={
              msg.sender === 'user' ? styles.userMsg : styles.supportMsg
            }
          >
            {msg.text}
          </p>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={e => setMessage(e.target.value)}
        placeholder="Введите сообщение..."
      />
      <button onClick={handleSend} disabled={loading}>
        {loading ? '⏳ Отправка...' : 'Отправить'}
      </button>
    </section>
  );
}

export default ChatSupport;
