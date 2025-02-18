import styles from './SalesDashboard.module.css';

function SalesDashboard() {
  return (
    <section className={styles.dashboard}>
      <h2>📊 Дашборд продаж</h2>
      <p>Общая информация о продажах и клиентах.</p>
      {/* Здесь можно добавить графики и статистику */}
    </section>
  );
}

export default SalesDashboard;
