import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './ChatSupport.module.css';

function ChatSupport() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleSend = async () => {
    if (!message.trim() || !user) return;

    const newMessage = { text: message, sender: 'user' };
    setMessages(prev => [...prev, newMessage]);
    setMessage('');
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:5000/api/support', {
        message,
        userId: user.id, // Передача ID пользователя
        userName: user.name, // Передача имени пользователя
        userEmail: user.email, // Передача email пользователя
      });

      setMessages(prev => [
        ...prev,
        { text: response.data.reply, sender: 'support' },
      ]);
    } catch (error) {
      console.error('Ошибка отправки:', error.response?.data || error.message);
      setMessages(prev => [
        ...prev,
        {
          text: `Ошибка: ${
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
      {user && (
        <p>
          👤 Отправка от имени: <strong>{user.name}</strong> ({user.email})
        </p>
      )}
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
