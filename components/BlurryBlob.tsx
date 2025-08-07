import { BlurView } from 'expo-blur';
import { View } from 'react-native';

export default function BlurryBlob({
  color = '#FF6B6B',
  size = 200,
  top = 0,
  left = 0,
}) {
  return (
    <View
      style={{
        position: 'absolute',
        top,
        left,
        borderRadius: size,
        backgroundColor: color,
        flex:1,
        opacity: 0.2,
        filter: 'blur(100px)', // for web (Expo web), ignored in native
      }}
    >
      {/* Optional: add a blur behind the color */}
      <BlurView
        intensity={80}
        tint="light"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          flex:1,
          borderRadius: size,
        }}
      />
    </View>
  );
}