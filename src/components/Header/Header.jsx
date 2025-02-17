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
            aiautomate.
            <span className={styles.logospan}>services</span>
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
            {user && (
              <>
                <li>
                  <NavLink
                    to="/training"
                    className={({ isActive }) =>
                      isActive ? styles.navLinkActive : styles.navLink
                    }
                  >
                    AI Training
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/outreach"
                    className={({ isActive }) =>
                      isActive ? styles.navLinkActive : styles.navLink
                    }
                  >
                    Outreach
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/sales-support"
                    className={({ isActive }) =>
                      isActive ? styles.navLinkActive : styles.navLink
                    }
                  >
                    Sales Support
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/communication"
                    className={({ isActive }) =>
                      isActive ? styles.navLinkActive : styles.navLink
                    }
                  >
                    Communication
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                      isActive ? styles.navLinkActive : styles.navLink
                    }
                  >
                    Dashboard
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </nav>

        <div className={styles.userAuth}>
          {user ? (
            <>
              <span className={styles.username}>{user.name || user.email}</span>
              {/* <span className={styles.username}>
                {user.displayName || user.email}
              </span> */}
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
