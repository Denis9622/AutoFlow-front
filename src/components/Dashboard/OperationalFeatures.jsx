import styles from './OperationalFeatures.module.css';

function OperationalFeatures() {
  return (
    <section className={styles.operationalSection}>
      <h2>Operational Features</h2>
      <ul className={styles.integrationlist}>
        <li className={styles.title}>Centralized Management of AI Agents</li>
        <li className={styles.title}>Salesforce Data Visualization</li>
        <li className={styles.title}>Role-based Access Control</li>
        <li className={styles.title}>Knowledge Base Management</li>
        <li className={styles.title}>System Performance Monitoring</li>
      </ul>
    </section>
  );
}

export default OperationalFeatures;
