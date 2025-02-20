import { useState } from 'react';
import axios from 'axios';
import styles from './AiAvatarSection.module.css';

function AiAvatarSection() {
  const [avatarActive, setAvatarActive] = useState(false);
  const [userMessage, setUserMessage] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [avatarExpression, setAvatarExpression] = useState('neutral'); 
  const [userName] = useState(''); 

  const handleAvatarToggle = () => {
    setAvatarActive(prev => !prev);
    setAiResponse('');
    setUserMessage('');
  };

  const handleSendMessage = async () => {
    if (!userMessage.trim()) return;

    setLoading(true);
    setAiResponse('');
    setAvatarExpression('thinking'); 

    try {
      const response = await axios.post(
        'http://localhost:5000/api/sendMessage',
        {
          message: userMessage,
          userName: userName,
        }
      );

      setAiResponse(
        response.data.response || '❌ Error: empty response from AI'
      );
      setAvatarExpression('happy'); 
    } catch (error) {
      setAiResponse('❌ Error receiving AI response');
      console.error('❌ AI error:', error);
      setAvatarExpression('neutral'); 
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.aiAvatarSection}>
      <img
        src={`/public/images/${avatarExpression}.png`}
        alt="AI Avatar"
        className={styles.avatarImage}
      />

      <h2>🎓 AI Avatar for Training</h2>
      <p>
        The interactive AI avatar helps adapt training by answering questions.
      </p>

      <button className={styles.avatarButton} onClick={handleAvatarToggle}>
        {avatarActive ? '🔴 End Dialog' : '🗣 Interact with AI Avatar'}
      </button>

      {avatarActive && (
        <div className={styles.avatarDialog}>
          <p>🤖 Hello! How can I assist with training?</p>
          <input
            type="text"
            value={userMessage}
            placeholder="Enter your question..."
            className={styles.inputField}
            onChange={e => setUserMessage(e.target.value)}
          />
          <button className={styles.sendButton} onClick={handleSendMessage}>
            Send
          </button>
          {loading && <p>⏳ AI is thinking...</p>}
          {aiResponse && <p className={styles.aiResponse}>💡 {aiResponse}</p>}
        </div>
      )}
    </div>
  );
}

export default AiAvatarSection;
