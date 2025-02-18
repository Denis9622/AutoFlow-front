import SalesDashboard from '../../components/SalesSupport/SalesDashboard';
import SupportTickets from '../../components/SalesSupport/SupportTickets';
import ChatSupport from '../../components/SalesSupport/ChatSupport';
import AccountManagement from '../../components/SalesSupport/AccountManagement';
import ReportsAnalytics from '../../components/SalesSupport/ReportsAnalytics';
import styles from './SalesSupportPage.module.css';


function SalesSupport() {
  const tickets = [{ id: 1, subject: 'Проблема с оплатой', status: 'Открыт' }];
  const accounts = [{ id: 1, name: 'Иван Иванов', role: 'Менеджер' }];

  return (
    <div className={styles.supportContainer}>
      <SalesDashboard />
      <SupportTickets tickets={tickets} />
      <ChatSupport />
      <AccountManagement accounts={accounts} />
      <ReportsAnalytics />
    </div>
  );
}

export default SalesSupport;
