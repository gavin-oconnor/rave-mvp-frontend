import { loginService } from '@/services/auth';
import globalStyles from '@/styles/globalStyles';
import { Link, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const login = () => {
  const router = useRouter();
    const insets = useSafeAreaInsets();
    const { width, height } = useWindowDimensions();
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const attemptLogin = async() => {
        const loginSuccessful = await loginService(username,password);
        if(loginSuccessful) {
          router.push('/(app)/home');
        }
    }
  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
        flex: 1,
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 1)",
      }}
    >
        <View style={{height: 100}}/>
      <Text style={[globalStyles.bigText, {textAlign: "center"}]}>Welcome Back to Rave</Text>
      <View style={{height: 20}}/>
      <TextInput style={{
        width: width*0.8,
        borderColor: "white", 
        borderWidth: 1, 
        color: "white", 
        paddingHorizontal: 10,
        borderRadius: 10,
        height: 48,
        fontSize: 22
      }}
      autoCapitalize='none'
      placeholder='Username or Email'
      placeholderTextColor={"rgb(200,200,200)"}
    value={username}
    onChangeText={setUsername}
      />
      <View style={{height: 20}}/>
      <TextInput style={{
        width: width*0.8,
        borderColor: "white", 
        borderWidth: 1, 
        color: "white", 
        paddingHorizontal: 10,
        borderRadius: 10,
        height: 48,
        fontSize: 22
      }}
      autoCapitalize='none'
      placeholder='Password'
      placeholderTextColor={"rgb(200,200,200)"}
      secureTextEntry={true}
      value={password}
      onChangeText={setPassword}
      />
      <View style={{height: 20}}/>
      <TouchableOpacity style={{
        justifyContent: "center",
        alignItems: "center",
        width: width*0.7,
        borderColor: "white", 
        borderWidth: 1, 
        paddingHorizontal: 10,
        borderRadius: 10,
        height: 48,
      }}
      onPress={attemptLogin}
      >
        <Text style={{
            color: "white", 
            fontSize: 22
        }}>
            Log In
            </Text>
      </TouchableOpacity>
      <View style={{height:15}}/>
      <Text style={{color:"white", fontSize: 18}}>
        Don't have an account? <Link href="/(auth)/signup" style={{color:"rgba(165, 192, 255, 1)"}}>Join Rave</Link>
      </Text>
    </View>
  )
}

export default login

const styles = StyleSheet.create({

})