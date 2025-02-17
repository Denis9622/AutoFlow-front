import { useNavigate } from 'react-router-dom';
import styles from './HomePage.module.css';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Transform your business with{' '}
            <span className={styles.logospan}>AI Automation</span>
          </h1>
          <p className={styles.heroText}>
            We help you to streamline processes, enhance productivity, and
            unlock new potential with our AI-powered solutions.
          </p>
          <button
            onClick={() => navigate('/training')}
            className={styles.button}
          >
            Get started
            <img
              src="/images/Arrow 16.svg"
              alt="Arrow icon"
              className={styles.icon}
            />
          </button>
        </div>
        <div className={styles.imageContainer}>
          <img className={styles.image} src="/images/image.jpg" alt="Hero" />
          <div className={`${styles.label} ${styles.label1}`}>
            <img
              src="/images/feCheck.svg"
              alt="Checkmark"
              className={styles.checkmark}
            />
            <div className={styles.column}>
              <p className={styles.labelText}>AI Training Programs</p>
              <p className={styles.number}>+900 Pages</p>
            </div>
          </div>
          {/* <div className={`${styles.label} ${styles.label2}`}>
            <img
              src="/images/question.svg"
              alt="Checkmark"
              className={styles.checkmark12}
            />
          </div> */}
          <div className={`${styles.label} ${styles.label2}`}>
            <p className={styles.labelText}>Automated Outreach</p>
            <p className={styles.number}>20,000 Leads</p>
          </div>

          {/* <div className={`${styles.label} ${styles.label3}`}>
            <img
              src="/images/users.svg"
              alt="Checkmark"
              className={styles.checkmark13}
            />
          </div> */}
          <div className={`${styles.label} ${styles.label3}`}>
            <p className={styles.labelText}>Sales Insights</p>
            <p className={styles.number}>Real-time</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
