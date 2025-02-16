import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import Header from './Header/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
