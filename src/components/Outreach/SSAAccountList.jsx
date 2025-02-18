import styles from './SSAAccountList.module.css';

function SSAAccountList({ count }) {
  return (
    <section className={styles.ssaSection}>
      <h2>🔗 SSA-аккаунты</h2>
      <p>
        Подключено: <strong>{count}/20</strong>
      </p>
    </section>
  );
}

export default SSAAccountList;
