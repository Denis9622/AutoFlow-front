import styles from './AiAvatarSection.module.css';

function AiAvatarSection() {
  return (
    <div className={styles.aiAvatarSection}>
      <h2>AI-Аватар для обучения</h2>
      <p>
        Интерактивный AI-аватар, который отвечает на вопросы, анализирует
        материалы и адаптирует программу обучения.
      </p>
      <video
        src="/assets/ai-avatar-demo.mp4"
        controls
        className={styles.avatarVideo}
      ></video>
    </div>
  );
}

export default AiAvatarSection;
