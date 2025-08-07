// app/_layout.tsx
import { Slot } from 'expo-router';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function RootLayout() {
  return <SafeAreaProvider>
    <Slot/>
  </SafeAreaProvider>
}
