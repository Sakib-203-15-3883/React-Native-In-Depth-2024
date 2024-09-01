import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Animated, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const Page2 = ({ route }) => {
  const { item, imageLayout } = route.params;
  console.log(imageLayout); // Check if imageLayout is defined

  
  const { x = 0, y = 0, width = 0, height = 0 } = imageLayout;

  const animatedImagePosition = useRef(new Animated.ValueXY({ x, y })).current;
  const animatedImageSize = useRef(new Animated.ValueXY({ x: width, y: height })).current;
  const titleOpacity = useRef(new Animated.Value(0)).current;
  const descriptionOpacity = useRef(new Animated.Value(0)).current;
  const titleTranslateY = useRef(new Animated.Value(20)).current;
  const descriptionTranslateY = useRef(new Animated.Value(20)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.spring(animatedImagePosition.x, {
        toValue: 10,
        useNativeDriver: false,
      }),
      Animated.spring(animatedImagePosition.y, {
        toValue: 10,
        useNativeDriver: false,
      }),
      Animated.spring(animatedImageSize.x, {
        toValue: width - 20,
        useNativeDriver: false,
      }),
      Animated.spring(animatedImageSize.y, {
        toValue: 300,
        useNativeDriver: false,
      }),
      // Animate title and description after image transition
      Animated.sequence([
        Animated.delay(300), // delay to sync with image animation
        Animated.parallel([
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
        ]),
      ]),
    ]).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Image 
        source={{ uri: item.imageUrl }} 
        style={[
          styles.image, 
          {
            position: 'absolute',
            left: animatedImagePosition.x,
            top: animatedImagePosition.y,
            width: animatedImageSize.x,
            height: animatedImageSize.y,
          }
        ]}
      />
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

export default Page2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 10,
  },
  image: {
    borderRadius: 10,
  },
  content: {
    marginTop: 320,
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
