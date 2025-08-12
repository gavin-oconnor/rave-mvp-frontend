import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { withLayoutContext } from 'expo-router';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const TopTabsNavigator = createMaterialTopTabNavigator().Navigator;

// Wrap the Navigator so expo-router can manage screens by file name
const TopTabs = withLayoutContext(TopTabsNavigator);

export default function HomeTopTabsLayout() {
  const insets = useSafeAreaInsets();
  console.log(insets);
  return (
    <TopTabs
      screenOptions={{
        swipeEnabled: true,
        tabBarIndicatorStyle: { backgroundColor: '#fff' },
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#9ca3af',
        tabBarStyle: { backgroundColor: 'black', paddingTop: insets.top },
        lazy: true,
      }}
    >
      {/* These names map to files in this folder */}
      <TopTabs.Screen name="nearyou" options={{ title: 'Near You' }} />
      <TopTabs.Screen name="friends" options={{ title: 'Friends' }} />
    </TopTabs>
  );
}
