import PropTypes from 'prop-types';
import IntegrationItem from './IntegrationItem';
import styles from './IntegrationList.module.css';

function IntegrationList({
  integrations = [
    // ⬅ Устанавливаем значение по умолчанию прямо в параметрах
    { title: 'Mailbox Integration (42 accounts)', icon: '📧' },
    { title: 'Calendar Synchronization', icon: '📅' },
    { title: 'Integration with Microsoft Teams', icon: '💬' },
    { title: 'Cross-platform Notifications', icon: '🔔' },
  ],
}) {
  return (
    <section className={styles.integrationSection}>
      <h2 className={styles.title}>⚙️ System Integration</h2>
      <ul className={styles.list}>
        {integrations.map((item, index) => (
          <IntegrationItem key={index} title={item.title} icon={item.icon} />
        ))}
      </ul>
    </section>
  );
}

IntegrationList.propTypes = {
  integrations: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      icon: PropTypes.string,
    })
  ),
};

export default IntegrationList;
