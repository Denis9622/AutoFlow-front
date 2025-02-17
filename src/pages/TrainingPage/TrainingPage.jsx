import UploadSection from '../../components/Training/UploadSection';
import AiAvatarSection from '../../components/Training//AiAvatarSection';
import IntegrationSection from '../../components/Training/IntegrationSection';
import QuizSection from '../../components/Training/QuizSection';
import styles from './TrainingPage.module.css';

import Header from '../../components/Header/Header';



function TrainingPage() {
  return (
    <div>
      <Header />

      <div className={styles.container}>
        <h1>AI Training & Onboarding Automation</h1>
        <p>
          Добро пожаловать в систему AI-обучения и автоматизированного
          онбординга сотрудников. Здесь вы можете загружать материалы, проходить
          тестирование и взаимодействовать с AI-аватаром.
        </p>

        <AiAvatarSection />
        <IntegrationSection />
        <QuizSection />
        <UploadSection />
      </div>
    </div>
  );
}

export default TrainingPage;
