import PropTypes from 'prop-types';
import styles from './IntegrationItem.module.css';

function IntegrationItem({ title, icon }) {
  return (
    <li className={styles.item}>
      <span className={styles.icon}>{icon}</span>
      {title}
    </li>
  );
}

IntegrationItem.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

export default IntegrationItem;
