import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';

// Sample data for popular books
const popularBooks = [
  { id: '1', title: 'Dune', image: require('../../../../../../images/poster1.jpg') },
  { id: '2', title: '1984', image: require('../../../../../../images/poster1.jpg') },
  { id: '3', title: 'The Hobbit', image: require('../../../../../../images/poster1.jpg') },
];

// Fiction categories
const categories = ['Sci-Fi', 'Fantasy', 'Mystery', 'Adventure', 'Drama'];

// Sample data for fiction books (for the grid)
const fictionBooks = [
  { id: '1', title: 'The Hunger Games', image: require('../../../../../../images/poster3.jpg') },
  { id: '2', title: 'Harry Potter', image: require('../../../../../../images/poster3.jpg') },
  { id: '3', title: 'The Catcher in the Rye', image: require('../../../../../../images/poster3.jpg') },
  { id: '4', title: 'To Kill a Mockingbird', image: require('../../../../../../images/poster3.jpg') },
  { id: '5', title: 'Brave New World', image: require('../../../../../../images/poster3.jpg') },
];

// Render popular book carousel item
const renderPopularBook = ({ item }) => (
  <TouchableOpacity style={styles.carouselItem}>
    <Image source={item.image} style={styles.bookImage} />
    <Text style={styles.carouselTitle}>{item.title}</Text>
  </TouchableOpacity>
);

// Render fiction book grid item
const renderFictionBook = ({ item }) => (
  <TouchableOpacity style={styles.gridItem}>
    <Image source={item.image} style={styles.bookImage} />
    <Text style={styles.gridTitle}>{item.title}</Text>
  </TouchableOpacity>
);

const Fiction = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Fiction</Text>
      </View>

      {/* Popular Books Carousel */}
      <View style={styles.carouselContainer}>
        <Text style={styles.sectionTitle}>Popular Fiction</Text>
        <FlatList
          data={popularBooks}
          renderItem={renderPopularBook}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.carousel}
        />
      </View>

      {/* Fiction Categories */}
      <View style={styles.categoriesContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {categories.map((category, index) => (
            <TouchableOpacity key={index} style={styles.categoryTag}>
              <Text style={styles.categoryText}>{category}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Fiction Books Grid */}
      <FlatList
        data={fictionBooks}
        renderItem={renderFictionBook}
        numColumns={2}
        keyExtractor={(item) => item.id}
        columnWrapperStyle={styles.gridRow}
        contentContainerStyle={styles.gridContainer}
      />
    </ScrollView>
  );
};

export default Fiction;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#050111',
  },
  header: {
    padding: 10,
    backgroundColor: '#FFD700',  // Gold background for the header
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerTitle: {
    color: '#050111',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  carouselContainer: {
    padding: 10,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  carousel: {
    paddingHorizontal: 5,
  },
  carouselItem: {
    backgroundColor: '#333',
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
    width: 150,
  },
  bookImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
  },
  carouselTitle: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
    textAlign: 'center',
  },
  categoriesContainer: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  categoryTag: {
    backgroundColor: '#FFD700',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginRight: 10,
  },
  categoryText: {
    color: '#050111',
    fontWeight: 'bold',
    fontSize: 14,
  },
  gridContainer: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  gridRow: {
    justifyContent: 'space-between',
  },
  gridItem: {
    backgroundColor: '#333',
    borderRadius: 10,
    width: '47%',
    padding: 10,
    marginBottom: 15,
  },
  gridTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
    textAlign: 'center',
  },
});
