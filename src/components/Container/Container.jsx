import { Outlet } from 'react-router-dom';
import Header from './../Header/Header';
import styles from './Container.module.css';

const Container = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Outlet /> 
    </div>
  );
};

export default Container;
