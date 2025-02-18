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
    setMessages([...messages, newMessage]);
    setMessage('');
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:5000/api/support', {
        message,
      });
      setMessages(prev => [
        ...prev,
        { text: response.data.reply, sender: 'support' },
      ]);
    } catch (error) {
      console.error('Ошибка отправки в поддержку:', error);
      setMessages(prev => [
        ...prev,
        { text: '❌ Ошибка отправки', sender: 'error' },
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
