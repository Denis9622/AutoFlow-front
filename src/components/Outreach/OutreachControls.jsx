import styles from './OutreachControls.module.css';

function OutreachControls() {
  const startCampaign = () => {
    console.log('Starting email campaign...');
  };

  const checkLeads = () => {
    console.log('Requesting lead status...');
  };

  return (
    <section className={styles.actionsSection}>
      <h2>⚡ Outreach Actions</h2>
      <div className={styles.buttonsContainer}>
        <button className={styles.startCampaignButton} onClick={startCampaign}>
          🚀 Start Campaign
        </button>
        <button className={styles.checkLeadsButton} onClick={checkLeads}>
          🔍 Check Leads
        </button>
      </div>
    </section>
  );
}

export default OutreachControls;
