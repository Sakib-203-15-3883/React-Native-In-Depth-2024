import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Animated, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const Screen2 = ({ route }) => {
  const { item, contentLayout } = route.params;
  const titleOpacity = useRef(new Animated.Value(0)).current;
  const descriptionOpacity = useRef(new Animated.Value(0)).current;
  const titleTranslateY = useRef(new Animated.Value(20)).current;
  const descriptionTranslateY = useRef(new Animated.Value(20)).current;

  useEffect(() => {
    if (contentLayout) {
      Animated.sequence([
        Animated.timing(titleOpacity, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(titleTranslateY, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(descriptionOpacity, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(descriptionTranslateY, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [contentLayout]);
  

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Animated.Text 
          style={[
            styles.title, 
            { 
              opacity: titleOpacity,
              transform: [{ translateY: titleTranslateY }]
            }
          ]}
        >
          {item.title}
        </Animated.Text>
        <Animated.Text 
          style={[
            styles.description, 
            { 
              opacity: descriptionOpacity,
              transform: [{ translateY: descriptionTranslateY }]
            }
          ]}
        >
          {item.description}
        </Animated.Text>
      </View>
    </View>
  );
};

export default Screen2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 10,
  },
  content: {
    marginTop: 20,
    padding: 15,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginVertical: 10,
    color: 'white',
  },
  description: {
    fontSize: 18,
    color: 'white',
  },
});
