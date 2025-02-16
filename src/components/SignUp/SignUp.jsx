import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signUpSchema } from '../../components/Validation/validationSchema';
import { register as registerUser } from '../../services/auth';
import styles from './SignUp.module.css';

function SignUp({ onClose }) {
  const [message, setMessage] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });

  const onSubmit = async data => {
    try {
      await registerUser(data.email, data.password, data.name);
      setMessage('Регистрация успешна! Добро пожаловать!');
      onClose();
    } catch (error) {
      setMessage('Ошибка регистрации. Попробуйте снова.');
    }
  };

  return (
    <div className={styles.modal} onClick={onClose}>
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          X
        </button>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <h2>Registration</h2>
          <input
            type="text"
            placeholder="Name"
            {...register('name')}
            className={styles.input}
          />
          {errors.name && <p className={styles.error}>{errors.name.message}</p>}
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
            Sign Up
          </button>
          {message && <p className={styles.message}>{message}</p>}
        </form>
      </div>
    </div>
  );
}

export default SignUp;
