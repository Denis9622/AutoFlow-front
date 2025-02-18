import styles from './AccountManagement.module.css';

function AccountManagement({ accounts }) {
  return (
    <section className={styles.accountSection}>
      <h2>👤 Управление аккаунтами</h2>
      <ul>
        {accounts.map(acc => (
          <li key={acc.id}>
            {acc.name} ({acc.role})
          </li>
        ))}
      </ul>
    </section>
  );
}

export default AccountManagement;
