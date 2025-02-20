import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from './HomePage.module.css';

function HomePage() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem('accessToken')
  );

  useEffect(() => {
    const checkAuth = () =>
      setIsAuthenticated(!!localStorage.getItem('accessToken'));
    window.addEventListener('storage', checkAuth); // Отслеживаем изменения в localStorage
    return () => window.removeEventListener('storage', checkAuth);
  }, []);

  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          Transform your business with{' '}
          <span className={styles.logospan}>AI Automation</span>
        </h1>
        <p className={styles.heroText}>
          We help you to streamline processes, enhance productivity, and unlock
          new potential with our AI-powered solutions.
        </p>
        <button
          onClick={() => navigate(isAuthenticated ? '/training' : '/register')}
          className={styles.button}
        >
          {isAuthenticated ? 'Get Started' : 'Register'}
          <img
            src="/images/Arrow 16.svg"
            alt="Arrow icon"
            className={styles.icon}
          />
        </button>
      </div>
    </div>
  );
}

export default HomePage;
