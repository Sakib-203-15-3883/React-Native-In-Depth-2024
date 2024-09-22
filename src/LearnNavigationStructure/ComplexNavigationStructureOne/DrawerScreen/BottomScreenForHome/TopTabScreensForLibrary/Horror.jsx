import { StyleSheet, Text, View, FlatList, ImageBackground, TouchableOpacity } from 'react-native';
import React from 'react';

// Sample horror books data
const horrorBooks = [
  { id: '1', title: 'Dracula', image: require('../../../../../../images/poster3.jpg') },
  { id: '2', title: 'The Shining', image: require('../../../../../../images/poster2.jpg') },
  { id: '3', title: 'It', image: require('../../../../../../images/poster1.jpg') },
];

// Custom rendering for each horror book card
const renderBook = ({ item }) => (
  <TouchableOpacity style={styles.bookCard}>
    <ImageBackground source={item.image} style={styles.bookImage}>
      <View style={styles.overlay} />
      <Text style={styles.bookTitle}>{item.title}</Text>
    </ImageBackground>
  </TouchableOpacity>
);

const Horror = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Horror Books</Text>

      {/* Book List */}
      <FlatList
        data={horrorBooks}
        renderItem={renderBook}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

export default Horror;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
    padding: 10,
  },
  headerTitle: {
    color: '#FF3333',  // Blood red color
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'Creepster-Regular', // A spooky font for the title
  },
  listContainer: {
    paddingBottom: 20,
  },
  bookCard: {
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
  },
  bookImage: {
    width: '100%',
    height: 200,
    justifyContent: 'flex-end',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',  // Dark overlay for a misty effect
  },
  bookTitle: {
    color: '#FF3333',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
});
