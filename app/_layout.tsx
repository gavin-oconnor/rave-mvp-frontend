// app/_layout.tsx
import { ActionSheetProvider } from '@expo/react-native-action-sheet';
import { Slot } from 'expo-router';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <ActionSheetProvider>
        <Slot />
      </ActionSheetProvider>
    </SafeAreaProvider>
  );
}
