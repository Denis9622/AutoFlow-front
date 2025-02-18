import styles from './OutreachStatus.module.css';

function OutreachStatus({ status }) {
  const getStatusIcon = state => {
    switch (state) {
      case 'active':
        return '🟢 Активно';
      case 'error':
        return '🔴 Ошибка';
      case 'loading':
        return '⏳ Загрузка...';
      default:
        return '❓ Неизвестно';
    }
  };

  return (
    <section className={styles.statusSection}>
      <h2>📊 Статус систем</h2>
      <ul>
        <li>Email-рассылка: {getStatusIcon(status.emailCampaign)}</li>
        <li>AI-звонки: {getStatusIcon(status.callSystem)}</li>
        <li>
          Фоллоу-ап автоматизация: {getStatusIcon(status.followUpAutomation)}
        </li>
      </ul>
    </section>
  );
}

export default OutreachStatus;
