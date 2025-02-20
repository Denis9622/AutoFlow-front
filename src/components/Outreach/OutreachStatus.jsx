import styles from './OutreachStatus.module.css';

function OutreachStatus({ status }) {
  const getStatusIcon = state => {
    switch (state) {
      case 'active':
        return '🟢 Active';
      case 'error':
        return '🔴 Error';
      case 'loading':
        return '⏳ Loading...';
      default:
        return '❓ Unknown';
    }
  };

  return (
    <section className={styles.statusSection}>
      <h2>📊 System Status</h2>
      <ul className={styles.statusList}>
        <li className={styles.statusItem}>
          <span>Email Campaign:</span>
          <span>{getStatusIcon(status.emailCampaign)}</span>
        </li>
        <li className={styles.statusItem}>
          <span>AI Calls:</span>
          <span>{getStatusIcon(status.callSystem)}</span>
        </li>
        <li className={styles.statusItem}>
          <span>Follow-up Automation:</span>
          <span>{getStatusIcon(status.followUpAutomation)}</span>
        </li>
      </ul>
    </section>
  );
}

export default OutreachStatus;
