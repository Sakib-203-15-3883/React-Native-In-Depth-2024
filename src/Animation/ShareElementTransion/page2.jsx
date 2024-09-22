import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Animated, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const { width } = Dimensions.get('window');

const Page2 = ({ route }) => {
  const { item, imageLayout } = route.params;

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
    ]).start(() => {
      // Sequential animation for text after the image transition
      Animated.sequence([
        // Title animation
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
        ]),
        // Add a slight delay before animating the description
        Animated.delay(200),
        // Description animation
        Animated.parallel([
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
      ]).start();
    });
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
    
    
    
    backgroundColor:"black"
  
  },
  image: {
    borderRadius: 15,
    shadowColor: '#000',
    shadowOpacity: 0.6,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
  },
  content: {
    marginTop: 350,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#fff',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    letterSpacing:1.6
  },
  description: {
    fontSize: 14,
    color: '#ddd',
    lineHeight: 24,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 6,
    letterSpacing:1.4
  },
});
