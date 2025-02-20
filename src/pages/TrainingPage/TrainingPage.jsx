import UploadSection from '../../components/Training/UploadSection';
import AiAvatarSection from '../../components/Training//AiAvatarSection';
import IntegrationSection from '../../components/Training/IntegrationSection';
import QuizSection from '../../components/Training/QuizSection';
import styles from './TrainingPage.module.css';

function TrainingPage() {
  return (
    <div className={styles.container}>
      <h1>AI Training & Onboarding Automation</h1>
      <p>
        Welcome to the AI training and automated employee onboarding system.
        Here you can upload materials, take tests, and interact with the AI
        avatar.
      </p>

      <AiAvatarSection />
      <IntegrationSection />
      <QuizSection />
      <UploadSection />
    </div>
  );
}

export default TrainingPage;
