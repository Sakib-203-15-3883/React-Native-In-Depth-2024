import React, { useState, useRef } from 'react';
import { FlatList, View, Text, TouchableOpacity, Image, StyleSheet, Dimensions, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const { width } = Dimensions.get('window');

const data = [
  {
    id: '1',
    title: 'Majestic Mountains',
    description: 'Towering peaks and rugged landscapes, the mountains stand as natures fortresses, offering breathtaking views and a serene escape into the wild.',
    imageUrl: 'https://images.unsplash.com/photo-1530631673369-bc20fdb32288?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '2',
    title: 'Serene Forests',
    description: 'Dense with life and mystery, forests are the Earths lungs, where the quiet rustle of leaves and the songs of birds create a symphony of tranquility.',
    imageUrl: 'https://images.unsplash.com/photo-1724579242963-ea62ff1f0d72?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '3',
    title: 'Card Title 3',
    description: 'Description for Card 3',
    imageUrl: 'https://images.unsplash.com/photo-1724838818103-a3ff16624686?q=80&w=1947&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '4',
    title: 'Card Title 4',
    description: 'Description for Card 4',
    imageUrl: 'https://images.unsplash.com/photo-1725006709140-820aed879fb0?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  // Add more items here
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
        activeOpacity={0.8}
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
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 10,
  },
  cardContainer: {
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    marginVertical:20,
  },
  image: {
    width: width - 20,
    height: 180,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
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
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  description: {
    fontSize: 18,
    color: '#ccc',
  },
});

export default Page1;