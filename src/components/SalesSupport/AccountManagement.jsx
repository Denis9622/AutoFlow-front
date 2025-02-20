import styles from './AccountManagement.module.css';

const roleTranslations = {
  Admin: 'Admin',
  Manager: 'Manager',
  User: 'User',
};

const dummyAccounts = [
  { id: 1, name: 'John Doe', role: 'Admin' },
  { id: 2, name: 'Jane Smith', role: 'Manager' },
  { id: 3, name: 'Alice Johnson', role: 'User' },
];

function AccountManagement() {
  return (
    <section className={styles.accountSection}>
      <h2>👤 Account Management</h2>
      {dummyAccounts.length === 0 ? (
        <p className={styles.noAccounts}>No accounts available.</p>
      ) : (
        <ul className={styles.accountList}>
          {dummyAccounts.map(acc => (
            <li key={acc.id} className={styles.accountItem}>
              <span className={styles.accountName}>{acc.name}</span>
              <span
                className={`${styles.accountRole} ${
                  styles[acc.role.toLowerCase()]
                }`}
              >
                {roleTranslations[acc.role] || acc.role}
              </span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default AccountManagement;
