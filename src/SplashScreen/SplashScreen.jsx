import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Animated, StyleSheet, StatusBar, Dimensions } from 'react-native';
import SplashScreenNative from 'react-native-splash-screen';  // Import the native splash screen

const { width } = Dimensions.get('window'); // Get device width

const CustomSplashScreen = ({ onAppReady }) => {
  const [isAppReady, setIsAppReady] = useState(false);
  const lineWidthAnim = useRef(new Animated.Value(0)).current;  // Line width animation
  const opacityAnim = useRef(new Animated.Value(1)).current;  // Fade-out animation

  useEffect(() => {
    // Hide the native splash screen
    SplashScreenNative.hide();
    
    // Expand the line from small point to full width
    Animated.sequence([
      Animated.timing(lineWidthAnim, {
        toValue: width,
        duration: 1000,
        useNativeDriver: false, // We can't use native driver for width
      }),
      Animated.timing(opacityAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true, // Fade-out animation
      })
    ]).start(() => {
      setTimeout(() => {
        setIsAppReady(true);
        if (onAppReady) onAppReady(); // Notify parent component that the app is ready
      }, 500); // Delay to let the animation complete before transitioning
    });
  }, [lineWidthAnim, opacityAnim, onAppReady]);

  if (isAppReady) {
    return null; // Return nothing when the app is ready
  }

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Animated.View
        style={[
          styles.line,
          {
            width: lineWidthAnim, // Animated width
            opacity: opacityAnim, // Fade-out effect
          }
        ]}
      />
      <Text style={styles.text}>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#062445', // Background color
  },
  line: {
    height: 4, // Line thickness
    backgroundColor: '#ffffff', // Line color
    position: 'absolute', // Center the line
    bottom: 100, // Adjust according to your design
  },
  text: {
    marginTop: 20,
    fontSize: 18,
    color: 'white',
  },
});

export default CustomSplashScreen;
