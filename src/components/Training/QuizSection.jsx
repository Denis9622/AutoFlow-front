import styles from './QuizSection.module.css';

function QuizSection() {
  return (
    <div className={styles.quizSection}>
      <h2>📖 Knowledge Testing</h2>
      <p className={styles.comingSoon}>
        Automated testing for employee knowledge assessment will be available
        soon.
      </p>
    </div>
  );
}

export default QuizSection;
