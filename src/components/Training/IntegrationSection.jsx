import styles from './IntegrationSection.module.css';

function IntegrationSection() {
  const integrations = [
    { name: 'Trainual', state: 'active', version: '1.2.0' },
    { name: 'D-ID', state: 'error', version: 'N/A' },
    { name: 'Anthropic', state: 'active', version: '2.1.3' },
    { name: 'Eleven Labs', state: 'loading', version: 'N/A' },
  ];

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
    <div className={styles.integrationSection}>
      <h2>🔗 Integration Status</h2>
      <button className={styles.refreshButton} onClick={() => {}}>
        🔄 Refresh Status
      </button>
      <p>Last updated: --:--</p>
      <div className={styles.integrationList}>
        {integrations.map(({ name, state, version }) => (
          <div key={name} className={styles.integrationCard}>
            <h3>{name}</h3>
            <p>Status: {getStatusIcon(state)}</p>
            <p>Version: {version}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default IntegrationSection;
