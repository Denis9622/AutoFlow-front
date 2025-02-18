import { useState } from 'react';
import axios from 'axios';
import styles from './AiAvatarSection.module.css';

function AiAvatarSection() {
  const [avatarActive, setAvatarActive] = useState(false);
  const [userMessage, setUserMessage] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [avatarExpression, setAvatarExpression] = useState('neutral'); // Добавляем состояние для выражения лица

  const handleAvatarToggle = () => {
    setAvatarActive(prev => !prev);
    setAiResponse('');
    setUserMessage('');
  };

  const handleSendMessage = async () => {
    if (!userMessage.trim()) return;

    setLoading(true);
    setAiResponse('');
    setAvatarExpression('thinking'); // Устанавливаем выражение лица "думает"

    try {
      const response = await axios.post(
        'http://localhost:5000/api/sendMessage',
        {
          message: userMessage,
        }
      );

      setAiResponse(response.data.response || '❌ Ошибка: пустой ответ от AI');
      setAvatarExpression('happy'); // Устанавливаем счастливое выражение лица при получении ответа
    } catch (error) {
      setAiResponse('❌ Ошибка при получении ответа AI');
      console.error('❌ Ошибка AI:', error);
      setAvatarExpression('neutral'); // Устанавливаем нейтральное выражение лица при ошибке
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

      <h2>🎓 AI-Аватар для обучения</h2>
      <p>
        Интерактивный AI-аватар помогает адаптировать обучение, отвечая на
        вопросы.
      </p>

      <button className={styles.avatarButton} onClick={handleAvatarToggle}>
        {avatarActive
          ? '🔴 Завершить диалог'
          : '🗣 Взаимодействовать с AI-Аватаром'}
      </button>

      {avatarActive && (
        <div className={styles.avatarDialog}>
          <p>🤖 Привет! Чем могу помочь в обучении?</p>
          <input
            type="text"
            value={userMessage}
            placeholder="Введите вопрос..."
            className={styles.inputField}
            onChange={e => setUserMessage(e.target.value)}
          />
          <button className={styles.sendButton} onClick={handleSendMessage}>
            Отправить
          </button>
          {loading && <p>⏳ AI думает...</p>}
          {aiResponse && <p className={styles.aiResponse}>💡 {aiResponse}</p>}
        </div>
      )}
    </div>
  );
}

export default AiAvatarSection;
