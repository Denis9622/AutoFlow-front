import { useEffect, useState } from 'react';
import { login, logout } from '../../services/auth';
import { NavLink } from 'react-router-dom';
import SignIn from '../Sign/Sign';
import SignUp from '../SignUp/SignUp';
import styles from './Header.module.css';

function Header() {
  const [user, setUser] = useState(null);
  const [isSignUpOpen, setSignUpOpen] = useState(false);
  const [isSignInOpen, setSignInOpen] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');

    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      console.log('Загруженный пользователь из localStorage:', parsedUser);

      setUser(parsedUser);
    }
  }, []);

  const handleLogin = async (email, password) => {
    try {
      const userData = await login(email, password);
      console.log('Полученные данные пользователя:', userData);

      if (!userData) throw new Error('Пользователь не найден');

      localStorage.setItem('user', JSON.stringify(userData));
      setUser(userData);
      setSignInOpen(false);
    } catch (error) {
      console.error('Ошибка входа:', error);
    }
  };

  const handleLogout = async () => {
    try {
      console.log('Нажата кнопка Logout');

      await logout();
      localStorage.removeItem('user');
      setUser(null);
      window.location.reload();
    } catch (error) {
      console.error('Ошибка выхода:', error);
    }
  };

  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.logo}>
          <a href="/">
            <span className={styles.logospan}>psychologists.</span>services
          </a>
        </h1>

        <nav className={styles.nav}>
          <ul className={styles.ulclass}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? styles.navLinkActive : styles.navLink
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/catalog"
                className={({ isActive }) =>
                  isActive ? styles.navLinkActive : styles.navLink
                }
              >
                Psychologists
              </NavLink>
            </li>
            {user && (
              <li>
                <NavLink
                  to="/favorites"
                  className={({ isActive }) =>
                    isActive ? styles.navLinkActive : styles.navLink
                  }
                >
                  Favorites
                </NavLink>
              </li>
            )}
          </ul>
        </nav>

        <div className={styles.userAuth}>
          {user ? (
            <>
              <span className={styles.username}>{user.name || user.email}</span>
              <button
                onClick={handleLogout}
                className={`${styles.linkAuth} ${styles.logoutButton}`}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => setSignInOpen(true)}
                className={styles.linkAuth}
              >
                Log In
              </button>
              <button
                onClick={() => setSignUpOpen(true)}
                className={styles.linkAuth}
              >
                Registration
              </button>
            </>
          )}
        </div>
      </header>

      {isSignUpOpen && <SignUp onClose={() => setSignUpOpen(false)} />}
      {isSignInOpen && (
        <SignIn onClose={() => setSignInOpen(false)} onLogin={handleLogin} />
      )}
    </>
  );
}

export default Header;
