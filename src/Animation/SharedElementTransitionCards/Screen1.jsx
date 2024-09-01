import React, { useState, useRef } from 'react';
import { FlatList, View, Text, TouchableOpacity, StyleSheet, Dimensions, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const { width } = Dimensions.get('window');

const data = [
  {
    id: '1',
    title: 'Majestic Mountains',
    description: 'Towering peaks and rugged landscapes, the mountains stand as natures fortresses, offering breathtaking views and a serene escape into the wild.',
  },
  {
    id: '2',
    title: 'Serene Forests',
    description: 'Dense with life and mystery, forests are the Earths lungs, where the quiet rustle of leaves and the songs of birds create a symphony of tranquility.',
  },
  {
    id: '3',
    title: 'Majestic Mountains',
    description: 'Towering peaks and rugged landscapes, the mountains stand as natures fortresses, offering breathtaking views and a serene escape into the wild.',
  },
  {
    id: '4',
    title: 'Serene Forests',
    description: 'Dense with life and mystery, forests are the Earths lungs, where the quiet rustle of leaves and the songs of birds create a symphony of tranquility.',
  },
  {
    id: '5',
    title: 'Majestic Mountains',
    description: 'Towering peaks and rugged landscapes, the mountains stand as natures fortresses, offering breathtaking views and a serene escape into the wild.',
  },
  {
    id: '6',
    title: 'Serene Forests',
    description: 'Dense with life and mystery, forests are the Earths lungs, where the quiet rustle of leaves and the songs of birds create a symphony of tranquility.',
  },
  // Add more items here
];

const Screen1 = () => {
  const navigation = useNavigation();
  const [selectedLayout, setSelectedLayout] = useState(null);
  const contentRefs = useRef({});
  const scaleValue = useRef(new Animated.Value(1)).current;

  const onPressIn = () => {
    Animated.spring(scaleValue, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const onPressOut = () => {
    Animated.spring(scaleValue, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const onPress = (item) => {
    contentRefs.current[item.id]?.measure((x, y, width, height, pageX, pageY) => {
      setSelectedLayout({ x: pageX, y: pageY, width, height });
      navigation.navigate('Screen2', { item, contentLayout: { x: pageX, y: pageY, width, height } });
    });
  };

  const renderItem = ({ item }) => (
    <Animated.View style={[styles.cardContainer, { transform: [{ scale: scaleValue }] }]}>
      <TouchableOpacity
        style={styles.card}
        onPress={() => onPress(item)}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        activeOpacity={0.9}
      >
        <LinearGradient
          colors={['rgba(0, 0, 0, 0.2)', 'rgba(0, 0, 0, 0.8)']}
          style={styles.overlay}
        />
        <View style={styles.content} ref={el => (contentRefs.current[item.id] = el)}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282828',
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  cardContainer: {
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#333',
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#fff', // White border color
    overflow: 'hidden',
    elevation: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: '#ddd',
  },
  flatListContent: {
    paddingBottom: 20,
  },
});

export default Screen1;
