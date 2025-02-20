import styles from './AnalyticsSection.module.css';

function AnalyticsSection() {
  return (
    <section className={styles.analyticsSection}>
      <h2>Analytics Capabilities</h2>
      <ul className={styles.integrationlist}>
        <li className={styles.title}>Task Tracking</li>
        <li className={styles.title}>AI Agent Efficiency Metrics</li>
        <li className={styles.title}>System Usage Analysis</li>
        <li className={styles.title}>Activity History View</li>
      </ul>
    </section>
  );
}

export default AnalyticsSection;
