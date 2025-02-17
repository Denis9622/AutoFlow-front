import { useEffect, useState } from 'react';
import styles from './IntegrationSection.module.css';

function IntegrationSection() {
  const [status, setStatus] = useState({
    trainual: 'loading',
    dId: 'loading',
    anthropic: 'loading',
    elevenLabs: 'loading',
  });

  useEffect(() => {
    async function fetchIntegrationStatus() {
      try {
        const response = await fetch('/api/integrations/status'); // Заглушка API
        const data = await response.json();
        setStatus({
          trainual: data.trainual ? 'active' : 'error',
          dId: data.dId ? 'active' : 'error',
          anthropic: data.anthropic ? 'active' : 'error',
          elevenLabs: data.elevenLabs ? 'active' : 'error',
        });
      } catch (error) {
        console.error('Ошибка загрузки статусов интеграций:', error);
        setStatus({
          trainual: 'error',
          dId: 'error',
          anthropic: 'error',
          elevenLabs: 'error',
        });
      }
    }

    fetchIntegrationStatus();
  }, []);

  const getStatusIcon = state => {
    switch (state) {
      case 'active':
        return '🟢';
      case 'error':
        return '🔴';
      case 'loading':
        return '⏳';
      default:
        return '❓';
    }
  };

  return (
    <div className={styles.integrationSection}>
      <h2>Интеграция</h2>
      <ul>
        <li>
          {getStatusIcon(status.trainual)} Подключение к{' '}
          <strong>Trainual</strong>
        </li>
        <li>
          {getStatusIcon(status.dId)} Использование <strong>D-ID</strong> для
          AI-аватара
        </li>
        <li>
          {getStatusIcon(status.anthropic)} <strong>Anthropic AI</strong> для
          обучения
        </li>
        <li>
          {getStatusIcon(status.elevenLabs)} <strong>11 Labs</strong> для
          генерации голоса
        </li>
      </ul>
    </div>
  );
}

export default IntegrationSection;
