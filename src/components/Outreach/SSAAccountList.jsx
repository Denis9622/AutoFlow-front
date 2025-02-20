import styles from './SSAAccountList.module.css';

function SSAAccountList({ count }) {
  const maxAccounts = 20;
  const percentage = (count / maxAccounts) * 100;
  const isFull = count >= maxAccounts;

  return (
    <section className={styles.ssaSection}>
      <h2>🔗 SSA Accounts</h2>
      <p>
        Connected:{' '}
        <strong>
          {count}/{maxAccounts}
        </strong>
      </p>

      <div className={styles.progressBar}>
        <div
          className={`${styles.progress} ${isFull ? styles.full : ''}`}
          style={{ width: `${percentage}%` }}
        />
      </div>

      {isFull && (
        <p className={styles.fullMessage}>✅ All accounts are connected!</p>
      )}
    </section>
  );
}

export default SSAAccountList;
