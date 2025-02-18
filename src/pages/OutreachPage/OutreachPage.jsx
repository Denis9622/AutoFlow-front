import { useEffect, useState } from 'react';
import OutreachStatus from '../../components/Outreach/OutreachStatus';
import OutreachControls from '../../components/Outreach/OutreachControls';
import SSAAccountList from '../../components/Outreach/SSAAccountList';
import styles from './OutreachPage.module.css';

function OutreachPage() {
  const [status, setStatus] = useState({
    emailCampaign: 'loading',
    callSystem: 'loading',
    followUpAutomation: 'loading',
    ssaAccounts: 0,
  });

  useEffect(() => {
    async function fetchOutreachStatus() {
      try {
        const response = await fetch('/api/outreach/status');
        const data = await response.json();
        setStatus({
          emailCampaign: data.emailCampaign ? 'active' : 'error',
          callSystem: data.callSystem ? 'active' : 'error',
          followUpAutomation: data.followUpAutomation ? 'active' : 'error',
          ssaAccounts: data.ssaAccounts || 0,
        });
      } catch (error) {
        console.error('Ошибка загрузки статуса:', error);
        setStatus({
          emailCampaign: 'error',
          callSystem: 'error',
          followUpAutomation: 'error',
          ssaAccounts: 0,
        });
      }
    }

    fetchOutreachStatus();
  }, []);

  return (
    <div className={styles.outreachSection}>
      <div className={styles.outreachtext}>
        <h1>📢 AI Outreach & Lead Reactivation</h1>
        <p>Автоматизированные рассылки, звонки и реактивация клиентов.</p>
      </div>

      <div className={styles.outreachContainer}>
        <OutreachStatus status={status} />
        <SSAAccountList count={status.ssaAccounts} />
        <OutreachControls />
      </div>
    </div>
  );
}

export default OutreachPage;
