import styles from './AutomationFeatures.module.css';

function AutomationFeatures() {
  return (
    <section className={styles.automationSection}>
      <h2 className={styles.sectionTitle}>Automation Features</h2>
      <ul className={styles.featuresList}>
        <li className={styles.featureItem}>
          🗣️ Natural Language Command Processing
        </li>
        <li className={styles.featureItem}>
          ✉️ Automatic Draft Email Generation
        </li>
        <li className={styles.featureItem}>
          📅 Calendar Optimization and Management
        </li>
        <li className={styles.featureItem}>🔔 Cross-platform Notifications</li>
        <li className={styles.featureItem}>📧 Email Correspondence Analysis</li>
        <li className={styles.featureItem}>🔐 Role-based Access Control</li>
      </ul>
    </section>
  );
}

export default AutomationFeatures;
