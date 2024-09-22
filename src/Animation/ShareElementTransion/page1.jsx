import React, { useState, useRef } from 'react';
import { FlatList, View, Text, TouchableOpacity, Image, StyleSheet, Dimensions, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const { width } = Dimensions.get('window');

const data = [
  {
    id: '1',
    title: 'The Mysteries of the Ocean',
    description: 'The ocean, a vast expanse of blue, teems with life and secrets. Its depths hold diverse ecosystems, ancient shipwrecks, and unexplored wonders, captivating our imagination and reminding us of nature\'s beauty and power.',
    imageUrl: 'https://images.unsplash.com/photo-1530631673369-bc20fdb32288?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '2',
    title: 'Serene Forests',
    description: 'Dense with life and mystery, forests are the Earth\'s lungs, where the quiet rustle of leaves and the songs of birds create a symphony of tranquility.',
    imageUrl: 'https://images.unsplash.com/photo-1724579242963-ea62ff1f0d72?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '3',
    title: 'The Evolution of the Automobile',
    description: 'Cars have revolutionized transportation, evolving from early models to advanced, eco-friendly machines. They symbolize innovation, freedom, and convenience, shaping modern society by connecting people and places.',
    imageUrl: 'https://images.unsplash.com/photo-1724838818103-a3ff16624686?q=80&w=1947&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '4',
    title: 'Card Title 4',
    description: 'Description for Card 4',
    imageUrl: 'https://images.unsplash.com/photo-1725006709140-820aed879fb0?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const Page1 = () => {
  const navigation = useNavigation();
  const [selectedImageLayout, setSelectedImageLayout] = useState(null);
  const imageRefs = useRef({});
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
    imageRefs.current[item.id]?.measure((x, y, width, height, pageX, pageY) => {
      setSelectedImageLayout({ x: pageX, y: pageY, width, height });
      navigation.navigate('page2', { item, imageLayout: { x: pageX, y: pageY, width, height } });
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
        <Image
          source={{ uri: item.imageUrl }}
          style={styles.image}
          ref={el => (imageRefs.current[item.id] = el)}
        />
        <LinearGradient
          colors={['transparent', 'rgba(0, 0, 0, 0.8)']}
          style={styles.overlay}
        />
        <View style={styles.content}>
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
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', // Modern dark background
    padding: 15,
  },
  listContent: {
    paddingBottom: 20,
  },
  cardContainer: {
    marginBottom: 25,
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 12, // Subtle shadow for cards
  },
  card: {
    backgroundColor: '#282828',
    borderRadius: 20,
    overflow: 'hidden',
  },
  image: {
    width: width - 30,
    height: 200,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  content: {
    padding: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 10,
    letterSpacing:1.6
  },
  description: {
    fontSize: 16,
    color: '#B0B0B0',
    lineHeight: 22,
    letterSpacing:1.4
  },
});

export default Page1;
