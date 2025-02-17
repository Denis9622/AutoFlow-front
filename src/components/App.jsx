import { Routes, Route } from 'react-router-dom';
import Container from '../components/Container/Container';
import TrainingPage from '../pages/TrainingPage/TrainingPage';
import OutreachPage from '../pages/OutreachPage/OutreachPage';
import SalesSupportPage from '../pages/SalesSupportPage/SalesSupportPage';
import CommunicationPage from '../pages/CommunicationPage/CommunicationPage';
import DashboardPage from '../pages/DashboardPage/DashboardPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Container />} />

        <Route path="/training" element={<TrainingPage />} />
        <Route path="/outreach" element={<OutreachPage />} />
        <Route path="/sales-support" element={<SalesSupportPage />} />
        <Route path="/communication" element={<CommunicationPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </>
  );
}

export default App;
