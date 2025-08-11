import axios from 'axios';
import { setToken } from './token';

export const loginService = async (username: string, password: string) => {
  try {
    const response = await axios.put(
      'http://127.0.0.1:5000/auth/login',
      {
        username: username,
        password,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }
    );
    console.log('Data:', response.data);
    await setToken(response.data.access_token);
    return true;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const signUpService = async (username: string, password: string) => {
  try {
    const response = await axios.post(
      'http://127.0.0.1:5000/auth/join',
      {
        username: username,
        password,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }
    );
    console.log('Data:', response.data);
    await setToken(response.data.access_token);
    return true;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
