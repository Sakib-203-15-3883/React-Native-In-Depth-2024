import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

export default function App() {
  const backgroundColor = useSharedValue('red');

  const toggleColor = () => {
    backgroundColor.value = backgroundColor.value === 'red' ? 'green' : 'red';
  };

  const animatedStyles = useAnimatedStyle(() => ({
    backgroundColor: withTiming(backgroundColor.value, { duration: 400 }), // Smooth transition
  }));

  return (
    <View style={styles.container}>

      <Animated.View style={[styles.box, animatedStyles]} />

      <TouchableOpacity style={styles.button} onPress={toggleColor}>
        <Text style={styles.buttonText}>
         Change Color
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  box: {
    width: 120,
    height: 120,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    shadowColor: '#007AFF',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 3,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
