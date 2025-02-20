import { useState, useEffect } from 'react';
import styles from './SalesDashboard.module.css';

function SalesDashboard() {
  const [salesData, setSalesData] = useState({
    totalSales: 0,
    transactions: 0,
    avgCheck: 0,
    trend: 'neutral',
  });

  useEffect(() => {
    setTimeout(() => {
      setSalesData({
        totalSales: 12500,
        transactions: 340,
        avgCheck: 37,
        trend: 'up',
      });
    }, 1000);
  }, []);

  return (
    <section className={styles.dashboard}>
      <h2>📊 Sales Dashboard</h2>
      <div className={styles.stats}>
        <div className={styles.statCard}>
          <h3>💰 Total Sales</h3>
          <p>${salesData.totalSales.toLocaleString()}</p>
        </div>
        <div className={styles.statCard}>
          <h3>🛒 Transactions</h3>
          <p>{salesData.transactions}</p>
        </div>
        <div className={styles.statCard}>
          <h3>📉 Avg. Check</h3>
          <p>${salesData.avgCheck}</p>
        </div>
      </div>

      <div className={styles.trend}>
        {salesData.trend === 'up'
          ? '📈 Sales are growing!'
          : salesData.trend === 'down'
          ? '📉 Sales are declining!'
          : '🔍 No changes'}
      </div>
    </section>
  );
}

export default SalesDashboard;
