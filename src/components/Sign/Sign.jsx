import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signInSchema } from '../../components/Validation/validationSchema';
import styles from './SignIn.module.css';

function SignIn({ onClose, onLogin }) {
  const [message, setMessage] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signInSchema),
  });

  const onSubmit = async data => {
    try {
      console.log('Отправка данных:', data); // ✅ Проверяем вводимые данные
      await onLogin(data.email, data.password);
      setMessage('Login successful!');
      onClose();
    } catch (error) {
      setMessage('Error during login. Please try again.');
    }
  };

  return (
    <div className={styles.modal} onClick={onClose}>
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          X
        </button>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <h2>Log In</h2>
          <input
            type="email"
            placeholder="Email"
            {...register('email')}
            className={styles.input}
          />
          {errors.email && (
            <p className={styles.error}>{errors.email.message}</p>
          )}

          <input
            type="password"
            placeholder="Password"
            {...register('password')}
            className={styles.input}
          />
          {errors.password && (
            <p className={styles.error}>{errors.password.message}</p>
          )}

          <button type="submit" className={styles.submitButton}>
            Login
          </button>
          {message && <p className={styles.message}>{message}</p>}
        </form>
      </div>
    </div>
  );
}

export default SignIn;
