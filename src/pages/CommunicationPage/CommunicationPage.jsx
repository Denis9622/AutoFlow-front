import IntegrationList from '../../components/CommunicationPage/IntegrationList';
import AutomationFeatures from '../../components/CommunicationPage/AutomationFeatures';
import SecurityMeasures from '../../components/CommunicationPage/SecurityMeasures';
import styles from './CommunicationPage.module.css';


function CommunicationPage() {
  return (
    <div className={styles.communicationSection}>
      <div className={styles.communicationtext}>
        <h1>Communication & Task Management</h1>
        <p>Automation of task, email, and calendar management.</p>
      </div>
      <div className={styles.communicationContainer}>
        <IntegrationList />
        <AutomationFeatures />
        <SecurityMeasures />
      </div>
    </div>
  );
}

export default CommunicationPage;
