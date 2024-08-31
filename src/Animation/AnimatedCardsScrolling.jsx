


import { StyleSheet, Text, View, Animated, FlatList } from 'react-native';
import React, { useRef } from 'react';

const AnimatedCardsScrolling = () => {
  const scrolly = useRef(new Animated.Value(0)).current;
  const ITEM_SIZE = 70 + 20 * 3;
  const Data = [
        {
          title: 'title1',
          address: 'is simply dummy text...',
          description: 'It is a long established fact...',
        },
        {
          title: 'title2',
          address: 'is simply dummy text...',
          description: 'It is a long established fact...',
        },
        {
          title: 'title3',
          address: 'is simply dummy text...',
          description: 'It is a long established fact...',
        },
        {
          title: 'title4',
          address: 'is simply dummy text...',
          description: 'It is a long established fact...',
        },
        {
          title: 'title1',
          address: 'is simply dummy text...',
          description: 'It is a long established fact...',
        },
        {
          title: 'title2',
          address: 'is simply dummy text...',
          description: 'It is a long established fact...',
        },
        {
          title: 'title3',
          address: 'is simply dummy text...',
          description: 'It is a long established fact...',
        },
        {
          title: 'title4',
          address: 'is simply dummy text...',
          description: 'It is a long established fact...',
        },
        {
          title: 'title1',
          address: 'is simply dummy text...',
          description: 'It is a long established fact...',
        },
        {
          title: 'title2',
          address: 'is simply dummy text...',
          description: 'It is a long established fact...',
        },
        {
          title: 'title3',
          address: 'is simply dummy text...',
          description: 'It is a long established fact...',
        },
        {
          title: 'title4',
          address: 'is simply dummy text...',
          description: 'It is a long established fact...',
        },
        // Add more items as needed
      ];
    

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Animated Cards Scrolling</Text>
      <Animated.FlatList
        data={Data}
        renderItem={({ item, index }) => {
          const inputRange = [
            -1,
            0,
            ITEM_SIZE * index,
            ITEM_SIZE * (index + 1),
          ];

          const scale = scrolly.interpolate({
            inputRange,
            outputRange: [1, 1, 1, 0.8],
          });

          const opacity = scrolly.interpolate({
            inputRange,
            outputRange: [1, 1, 1, 0],
          });

          const translateY = scrolly.interpolate({
            inputRange,
            outputRange: [40, 40, 20, 0],
          });

          const rotate = scrolly.interpolate({
            inputRange,
            outputRange: ['0deg', '0deg', '0deg', '15deg'],
          });

          return (
            <Animated.View
              style={[
                styles.card,
                {
                  transform: [{ scale }, { translateY }, { rotate }],
                  opacity,
                },
              ]}
            >
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.address}>{item.address}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </Animated.View>
          );
        }}
        keyExtractor={(item, index) => index.toString()}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrolly } } }],
          { useNativeDriver: true }
        )}
      />
    </View>
  );
};

export default AnimatedCardsScrolling;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '5%',
    backgroundColor: 'black',
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
    textAlign: 'center',
  },
  card: {
    marginVertical: 10,
    borderWidth: 2,
    borderRadius: 15,
    borderColor: 'blue',
    padding: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  address: {
    fontSize: 14,
    color: 'gray',
  },
  description: {
    fontSize: 12,
    color: 'darkgray',
  },
});

