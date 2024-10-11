import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons'; // Import the Ionicons library

const episodes = [
  {
    id: '1',
    title1: 'The Haunted House',
    title2: 'Episode 1',
    image: 'https://via.placeholder.com/60', // Replace with your image URL
  },
  {
    id: '2',
    title1: 'Ghostly Whispers',
    title2: 'Episode 2',
    image: 'https://via.placeholder.com/60', // Replace with your image URL
  },
  {
    id: '3',
    title1: 'Midnight Shadows',
    title2: 'Episode 3',
    image: 'https://via.placeholder.com/60', // Replace with your image URL
  },
  // Add more episodes as needed
  {
    id: '4',
    title1: 'The Haunted House',
    title2: 'Episode 1',
    image: 'https://via.placeholder.com/60', // Replace with your image URL
  },
  {
    id: '5',
    title1: 'Ghostly Whispers',
    title2: 'Episode 2',
    image: 'https://via.placeholder.com/60', // Replace with your image URL
  },
  {
    id: '6',
    title1: 'Midnight Shadows',
    title2: 'Episode 3',
    image: 'https://via.placeholder.com/60', // Replace with your image URL
  },
  {
    id: '7',
    title1: 'The Haunted House',
    title2: 'Episode 1',
    image: 'https://via.placeholder.com/60', // Replace with your image URL
  },
  {
    id: '8',
    title1: 'Ghostly Whispers',
    title2: 'Episode 2',
    image: 'https://via.placeholder.com/60', // Replace with your image URL
  },
  {
    id: '9',
    title1: 'Midnight Shadows',
    title2: 'Episode 3',
    image: 'https://via.placeholder.com/60', // Replace with your image URL
  },
];

const Horror = () => {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.titles}>
          <Text style={styles.title}>{item.title1}</Text>
          <Text style={styles.subtitle}>{item.title2}</Text>
        </View>
      </View>
      <TouchableOpacity>
        {/* Replace text with an icon */}
        <Icon name="ellipsis-vertical" size={27} color="#ffffff" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={episodes}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Horror;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#121212', // Dark background for horror theme
  },
  header: {
    fontSize: 24,
    color: '#ffffff',
    marginBottom: 16,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#1e1e1e',
    padding: 10,
    borderRadius: 8,
    marginBottom: 12,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 10,
  },
  titles: {
    flexDirection: 'column',
  },
  title: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    color: '#b0b0b0',
  },
});
