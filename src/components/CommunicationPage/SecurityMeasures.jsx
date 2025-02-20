import styles from './SecurityMeasures.module.css';

function SecurityMeasures() {
  return (
    <section className={styles.securitySection}>
      <h2>Security Measures</h2>
      <ul className={styles.integrationlist}>
        <li className={styles.title}>Individual Authentication</li>
        <li className={styles.title}>Segregated Data Access</li>
        <li className={styles.title}>Email and Calendar Isolation</li>
        <li className={styles.title}>Secure Integration with Teams</li>
        <li className={styles.title}>Automatic Logging</li>
      </ul>
    </section>
  );
}

export default SecurityMeasures;
