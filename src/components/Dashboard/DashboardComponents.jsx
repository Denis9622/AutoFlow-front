import styles from './DashboardComponents.module.css';

function DashboardComponents() {
  return (
    <section className={styles.dashboardSection}>
      <h2>Main Components</h2>
      <ul className={styles.integrationlist}>
        <li className={styles.title}>Unified Management Interface</li>
        <li className={styles.title}>Real-time System Monitoring</li>
        <li className={styles.title}>Performance Analysis</li>
        <li className={styles.title}>User Management Console</li>
        <li className={styles.title}>System Status Indicators</li>
        <li className={styles.title}>Resource Usage Metrics</li>
      </ul>
    </section>
  );
}

export default DashboardComponents;
