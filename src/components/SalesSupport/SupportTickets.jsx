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
          'https://auto-flow-front.vercel.app/api/support/tickets'
        );
        setTickets(response.data);
      } catch (err) {
        setError('Error loading tickets');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTickets();
  }, []);

  if (loading) return <p>⏳ Loading tickets...</p>;
  if (error) return <p>❌ {error}</p>;

  return (
    <section className={styles.supportSection}>
      <h2>📩 Support Tickets</h2>
      {tickets.length === 0 ? (
        <p>No active tickets.</p>
      ) : (
        <ul className={styles.ticketList}>
          {tickets.map(ticket => (
            <li key={ticket._id} className={styles.ticketItem}>
              <div className={styles.ticketHeader}>
                <strong>{ticket.userName}</strong>{' '}
                <span>({ticket.userEmail})</span>
              </div>
              <div className={styles.ticketStatus}>
                <span>Status:</span> <span>{ticket.status}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default SupportTickets;
