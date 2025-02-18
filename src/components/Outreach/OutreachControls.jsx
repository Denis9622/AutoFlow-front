import styles from './OutreachControls.module.css';

function OutreachControls() {
  const startCampaign = () => {
    console.log('Запуск email-кампании...');
    // Тут будет вызов API для старта рассылки
  };

  const checkLeads = () => {
    console.log('Запрос статуса лидов...');
    // Тут будет API-запрос к CRM
  };

  return (
    <section className={styles.actionsSection}>
      <h2>⚡ Действия</h2>
      <button className={styles.startCampaignButton} onClick={startCampaign}>
        🚀 Запустить кампанию
      </button>
      <button className={styles.checkLeadsButton} onClick={checkLeads}>
        🔍 Проверить лидов
      </button>
    </section>
  );
}

export default OutreachControls;
