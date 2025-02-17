import styles from './QuizSection.module.css';

function QuizSection() {
  return (
    <div className={styles.quizSection}>
      <h2>Тестирование знаний</h2>
      <p>
        Скоро будет доступно автоматизированное тестирование для проверки знаний
        сотрудников.
      </p>
    </div>
  );
}

export default QuizSection;
