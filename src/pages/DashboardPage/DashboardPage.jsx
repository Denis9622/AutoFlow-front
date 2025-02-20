import DashboardComponents from '../../components/Dashboard/DashboardComponents';
import OperationalFeatures from '../../components/Dashboard/OperationalFeatures';
import AnalyticsSection from '../../components/Dashboard/AnalyticsSection';
import styles from './DashboardPage.module.css';

function DashboardPage() {
  return (
    <div className={styles.dashboardSection}>
      <div className={styles.dashboardText}>
        <h1>Unified Dashboard</h1>
        <p>Centralized control panel for all AI tools.</p>
      </div>
      <div className={styles.dashboardContainer}>
        <DashboardComponents />
        <OperationalFeatures />
        <AnalyticsSection />
      </div>
    </div>
  );
}

export default DashboardPage;
