import React, {useState, useEffect, useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Easing,
  TouchableOpacity,
} from 'react-native';

import {ThemeContext} from '../../Context/ThemeContext';
const AnimatedCard = () => {
  const {colorScheme} = useContext(ThemeContext);
  const [borderColorAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    animateBorder();
  }, []);

  const animateBorder = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(borderColorAnim, {
          toValue: 1,
          duration: 2000,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
        Animated.timing(borderColorAnim, {
          toValue: 0,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
      ]),
    ).start();
  };

  const borderColorInterpolate = borderColorAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['#ff5733', '#1E0C51'],
  });

  const animatedStyle = {
    borderColor: borderColorInterpolate,
  };

  return (
    <View style={[styles.container, {backgroundColor: colorScheme.background}]}>
      <TouchableOpacity style={[styles.card, animatedStyle]} onPress={() => {}}>
        <Text style={[styles.title, {color: colorScheme.text}]}>
          Card Title
        </Text>
        <Text style={[styles.description, {color: colorScheme.text}]}>
          Description line 1{'\n'}Description line 2
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '5%',
  },
  card: {
    borderWidth: 2,
    borderRadius: 8,
    padding: 16,
    margin: 16,
    alignItems: 'center',
     borderColor: '#ff5733',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    textAlign: 'center',
    marginBottom: 12,
  },

  buttonText: {
    // color: "color",
    fontWeight: 'bold',
  },
});

export default AnimatedCard;
