import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './SupportTickets.module.css';

function SupportTickets() {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await axios.get(
          'http://localhost:5000/api/support/tickets'
        );
        setTickets(response.data);
      } catch (err) {
        setError('Ошибка загрузки заявок');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTickets();
  }, []);

  if (loading) return <p>⏳ Загрузка заявок...</p>;
  if (error) return <p>❌ {error}</p>;

  return (
    <section className={styles.supportSection}>
      <h2>📩 Заявки в поддержку</h2>
      {tickets.length === 0 ? (
        <p>Нет активных заявок.</p>
      ) : (
        <ul>
          {tickets.map(ticket => (
            <li key={ticket._id} className={styles.ticketItem}>
              <strong>{ticket.userName}</strong> ({ticket.userEmail}) -{' '}
              <span>{ticket.status}</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );

}

export default SupportTickets;
