import { signUpService } from '@/services/auth';
import globalStyles from '@/styles/globalStyles';
import { Link, useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const signup = () => {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { width, height } = useWindowDimensions();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const attemptSignUp = async () => {
    const signUpSuccessful = await signUpService(username, password);
    if (signUpSuccessful) {
      router.push('/(app)/home');
    }
  };

  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 1)',
      }}
    >
      <View style={{ height: 100 }} />
      <Text style={[globalStyles.bigText, { textAlign: 'center' }]}>Welcome to Rave</Text>
      <View style={{ height: 20 }} />
      <TextInput
        style={{
          width: width * 0.8,
          borderColor: 'white',
          borderWidth: 1,
          color: 'white',
          paddingHorizontal: 10,
          borderRadius: 10,
          height: 48,
          fontSize: 22,
        }}
        placeholder="Username"
        placeholderTextColor={'rgb(200,200,200)'}
        autoCapitalize="none"
        value={username}
        onChangeText={setUsername}
      />
      <View style={{ height: 20 }} />
      <TextInput
        style={{
          width: width * 0.8,
          borderColor: 'white',
          borderWidth: 1,
          color: 'white',
          paddingHorizontal: 10,
          borderRadius: 10,
          height: 48,
          fontSize: 22,
        }}
        placeholder="Password"
        placeholderTextColor={'rgb(200,200,200)'}
        autoCapitalize="none"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <View style={{ height: 20 }} />
      <TouchableOpacity
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: width * 0.7,
          borderColor: 'white',
          borderWidth: 1,
          paddingHorizontal: 10,
          borderRadius: 10,
          height: 48,
        }}
        onPress={attemptSignUp}
      >
        <Text
          style={{
            color: 'white',
            fontSize: 22,
          }}
        >
          Join
        </Text>
      </TouchableOpacity>
      <View style={{ height: 15 }} />
      <Text style={{ color: 'white', fontSize: 18 }}>
        Already have an account?{' '}
        <Link href="/(auth)/login" style={{ color: 'rgba(165, 192, 255, 1)' }}>
          Log In
        </Link>
      </Text>
    </View>
  );
};

export default signup;

const styles = StyleSheet.create({});
