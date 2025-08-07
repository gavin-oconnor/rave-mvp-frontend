// utils/token.ts
import * as SecureStore from 'expo-secure-store';

export const getToken = async () => await SecureStore.getItemAsync('access_token');
export const setToken = async (token: string) => await SecureStore.setItemAsync('access_token', token);
export const deleteToken = async () => await SecureStore.deleteItemAsync('access_token');
