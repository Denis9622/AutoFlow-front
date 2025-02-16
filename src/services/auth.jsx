import axios from 'axios';

const API_URL = 'http://localhost:5000/api/autoflow'; // Укажите ваш реальный API URL

export const register = async (email, password, name) => {
  const response = await axios.post(`${API_URL}/register`, {
    email,
    password,
    name,
  });
  return response.data;
};

export const login = async (email, password) => {
  const response = await axios.post(`${API_URL}/login`, { email, password });
  return response.data;
};

export const logout = async () => {
  try {
    await axios.post(`${API_URL}/logout`, {}, { withCredentials: true });

    localStorage.removeItem('userId'); // ✅ Очищаем ID пользователя
    localStorage.removeItem('token'); // ✅ Очищаем токен (если есть)

    console.log('Пользователь вышел'); // ✅ Проверяем, сработало ли
  } catch (error) {
    console.error('Ошибка при выходе:', error);
  }
};


// Получение текущего пользователя
export const getCurrentUser = async (userId) => {
  const response = await axios.get(`${API_URL}/current-user`, {
    params: { userId },
    withCredentials: true,
  });
  return response.data;
};
