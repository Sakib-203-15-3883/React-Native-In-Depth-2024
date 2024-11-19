import React, {useState, useEffect, useCallback} from 'react';

import {
  FlatList,
  Text,
  StyleSheet,
  View,
  Dimensions,
  ActivityIndicator,
  Pressable,
} from 'react-native';

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withDelay,
} from 'react-native-reanimated';

// Screen width for dynamic styling
const {width} = Dimensions.get('window');
const CARD_WIDTH = width / 2 - 20;
const CARD_HEIGHT = 100;

// Card Component with animation
const AnimatedCard = React.memo(({item, index}) => {
  const translateY = useSharedValue(50); // Start position
  const opacity = useSharedValue(0); // Start opacity
  const scale = useSharedValue(0.8); // Start scale

  // Staggered animation effect
  useEffect(() => {
    const delay = index * 80;
    translateY.value = withDelay(delay, withSpring(0));
    opacity.value = withDelay(delay, withSpring(1));
    scale.value = withDelay(delay, withSpring(1));
  }, [index]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{translateY: translateY.value}, {scale: scale.value}],
    opacity: opacity.value,
  }));

  const handlePress = useCallback(() => {
    console.log('Card Pressed:', item.title);
  }, [item]);

  return (
    <Animated.View style={[animatedStyle, styles.card]}>
      <Pressable
        onPress={handlePress}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? '#388E3C' : '#4CAF50',
            flex: 1,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
          },
        ]}>
        <Text style={[styles.cardText, {color: '#fff'}]}>{item.title}</Text>
      </Pressable>
    </Animated.View>
  );
});

// Fetch Data Logic separated into its own component for better reuse

const FetchData = ({setData, setIsLoading}) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/posts',
        );
        const result = await response.json();
        setData(result.slice(0, 20)); // Limit items
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [setData, setIsLoading]);

  return null;
};

// Loading Component
const Loading = () => (
  <View style={styles.loadingContainer}>
    <ActivityIndicator size="large" color="#4CAF50" />
    <Text>Loading...</Text>
  </View>
);

// Main Animation Screen

const FadeAnimation = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch data in a separate component for reusability
  return (
    <>
      <FetchData setData={setData} setIsLoading={setIsLoading} />

      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={data}
          numColumns={2}
          initialNumToRender={10}
          maxToRenderPerBatch={10}
          windowSize={5}
          keyExtractor={item => item.id.toString()}
          columnWrapperStyle={styles.row}
          contentContainerStyle={styles.container}
          renderItem={({item, index}) => (
            <AnimatedCard item={item} index={index} />
          )}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: 'whitesmoke',
  },
  container: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: 'whitesmoke',
  },
  row: {
    justifyContent: 'space-between',
  },
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
  cardText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FadeAnimation;
