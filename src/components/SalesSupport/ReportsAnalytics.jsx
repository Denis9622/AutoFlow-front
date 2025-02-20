import styles from './ReportsAnalytics.module.css';

function ReportsAnalytics() {
  return (
    <section className={styles.reportsSection}>
      <h2>📈 Analytics</h2>
      <p>Sales and support reports.</p>
      <div className={styles.reportCards}>
        <div className={styles.card}>
          <h3>Sales Report</h3>
          <p>Summary of sales performance and metrics.</p>
        </div>
        <div className={styles.card}>
          <h3>Support Report</h3>
          <p>Overview of support tickets and resolution times.</p>
        </div>
      </div>
    </section>
  );
}

export default ReportsAnalytics;
