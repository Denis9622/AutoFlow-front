import { Routes, Route } from 'react-router-dom';
import Container from '../components/Container/Container';
import HomePage from '../pages/HomePage/HomePage';
import TrainingPage from '../pages/TrainingPage/TrainingPage';
import OutreachPage from '../pages/OutreachPage/OutreachPage';
import SalesSupportPage from '../pages/SalesSupportPage/SalesSupportPage';
import CommunicationPage from '../pages/CommunicationPage/CommunicationPage';
import DashboardPage from '../pages/DashboardPage/DashboardPage';

function App() {
  return (
    <Routes>
      {/* Container оборачивает все страницы и включает Header */}
      <Route path="/" element={<Container />}>
        <Route index element={<HomePage />} />
        <Route path="training" element={<TrainingPage />} />
        <Route path="outreach" element={<OutreachPage />} />
        <Route path="sales-support" element={<SalesSupportPage />} />
        <Route path="communication" element={<CommunicationPage />} />
        <Route path="dashboard" element={<DashboardPage />} />
      </Route>
    </Routes>
  );
}

export default App;
