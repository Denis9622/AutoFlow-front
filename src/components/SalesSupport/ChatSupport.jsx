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
      const response = await axios.post(
        'https://auto-flow-front.vercel.app/api/support',
        {
          message,
          userId: user.id,
          userName: user.name,
          userEmail: user.email,
        }
      );

      setMessages(prev => [
        ...prev,
        { text: response.data.reply, sender: 'support' },
      ]);
    } catch (error) {
      console.error('Send error:', error.response?.data || error.message);
      setMessages(prev => [
        ...prev,
        {
          text: `Error: ${error.response?.data?.message || 'Unknown error'}`,
          sender: 'error',
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={styles.chatSection}>
      <h2>💬 Chat Support</h2>
      {user && (
        <p>
          👤 Sending as: <strong>{user.name}</strong> ({user.email})
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
        placeholder="Enter message..."
      />
      <button
        className={styles.chatButton}
        onClick={handleSend}
        disabled={loading}
      >
        {loading ? '⏳ Sending...' : 'Send'}
      </button>
    </section>
  );
}

export default ChatSupport;
