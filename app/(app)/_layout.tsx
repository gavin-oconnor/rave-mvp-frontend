// app/(tabs)/_layout.tsx
import { useActionSheet } from '@expo/react-native-action-sheet';
import { Ionicons } from '@expo/vector-icons';
import { Tabs, useRouter } from 'expo-router';
import { Image, Text, TouchableOpacity, View } from 'react-native';

function PostTabBarButton(props: any) {
  const { showActionSheetWithOptions } = useActionSheet();
  const router = useRouter();

  const onPress = () => {
    const options = ['New Rave', 'New Log', 'Cancel'];
    const cancelButtonIndex = 2;
    showActionSheetWithOptions({ options, cancelButtonIndex, userInterfaceStyle: 'dark' }, (i) => {
      if (i === 0) router.push('/(app)/createrave');
      if (i === 1) router.push('/(app)/createlog');
    });
  };

  return (
    <TouchableOpacity
      {...props} // <- keep tab bar’s sizing/placement
      onPress={onPress}
      activeOpacity={0.7}
      // prevent any Android ripple highlight
      // @ts-ignore
      android_ripple={{ color: 'transparent' }}
      style={[props.style, { justifyContent: 'center', alignItems: 'center' }]}
    >
      {/* match your inactive tint so it blends in */}
      <Ionicons name="add-circle-outline" size={28} color="#9ca3af" />
      <Text style={{ color: '#9ca3af', fontSize: 12 }}>Post</Text>
    </TouchableOpacity>
  );
}

export default function TabsLayout() {
  const profilePic = 'https://i.pravatar.cc/100?img=3';

  return (
    <Tabs
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 12,
        },
        headerShown: false,
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#9ca3af',
        tabBarStyle: { backgroundColor: 'rgba(0,0,0,0.86)', borderTopWidth: 0 },
        tabBarBackground: () => <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.86)' }} />,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search-outline" size={size} color={color} />
          ),
        }}
      />

      {/* POST tab: custom button that opens the sheet */}
      <Tabs.Screen
        name="post"
        options={{
          title: 'Post',
          tabBarButton: (p) => <PostTabBarButton {...p} />, // keep layout/spacing
        }}
      />

      <Tabs.Screen
        name="map"
        options={{
          title: 'Map',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="map-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused }) => (
            <Image
              source={{ uri: profilePic }}
              style={{
                width: 28,
                height: 28,
                borderRadius: 14,
                borderWidth: focused ? 2 : 0,
                borderColor: focused ? '#fff' : 'transparent',
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="createrave"
        options={{
          href: null, // hides it from the tab bar & deep links
          headerShown: false, // optional
        }}
      />
      <Tabs.Screen
        name="createlog"
        options={{
          href: null, // hides it from the tab bar & deep links
          headerShown: false, // optional
        }}
      />
    </Tabs>
  );
}
