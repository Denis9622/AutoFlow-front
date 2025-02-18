import styles from './SupportTickets.module.css';

function SupportTickets({ tickets }) {
  return (
    <section className={styles.supportSection}>
      <h2>📩 Поддержка</h2>
      <ul>
        {tickets.map(ticket => (
          <li key={ticket.id}>
            {ticket.subject} - {ticket.status}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default SupportTickets;
