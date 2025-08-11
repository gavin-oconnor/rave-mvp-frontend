import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { Text, View } from 'react-native';
import { getToken } from '../services/token';

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    const checkLogin = async () => {
      const token = await getToken();
      if (token) {
        console.log('TOKEN');
        console.log(`Token is ${token}`);
        router.replace('/(app)/home');
      } else {
        console.log('NO TOKEN');
        router.replace('/(auth)/login');
      }
    };

    checkLogin();
  }, []);

  return (
    <View style={{ backgroundColor: 'purple' }}>
      <Text>Hello World</Text>
    </View>
  ); // or a loading spinner
}
