import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import React from 'react';

// Sample store items data with local images
const storeItems = [
  { id: '1', title: 'Product 1', image: require('../../../../../images/poster1.jpg'), price: '$29.99' },
  { id: '2', title: 'Product 2', image: require('../../../../../images/poster3.jpg'), price: '$19.99' },
  { id: '3', title: 'Product 3', image: require('../../../../../images/poster2.jpg'), price: '$39.99' },
  { id: '4', title: 'Product 4', image: require('../../../../../images/poster1.jpg'), price: '$24.99' },
  { id: '5', title: 'Product 5', image: require('../../../../../images/poster3.jpg'), price: '$59.99' },
  { id: '6', title: 'Product 6', image: require('../../../../../images/poster2.jpg'), price: '$14.99' },
];

// Custom rendering for each product card
const renderItem = ({ item }) => (
  <TouchableOpacity style={styles.card}>
    <Image source={item.image} style={styles.cardImage} />
    <Text style={styles.cardTitle}>{item.title}</Text>
    <Text style={styles.cardPrice}>{item.price}</Text>
    <TouchableOpacity style={styles.addToCartButton}>
      <Text style={styles.addToCartText}>Add to Cart</Text>
    </TouchableOpacity>
  </TouchableOpacity>
);

const MyStore = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.headerTitle}>MyStore</Text>

      {/* Product Grid */}
      <FlatList
        data={storeItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}  // Grid layout with 2 columns
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.gridContainer}
      />
    </View>
  );
};

export default MyStore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#050111',
    padding: 10,
  },
  headerTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  gridContainer: {
    paddingBottom: 20,
  },
  row: {
    justifyContent: 'space-between', // Space between cards in each row
  },
  card: {
    backgroundColor: '#333',
    width: '47%',  // Adjust for spacing between cards
    borderRadius: 15,
    marginBottom: 15,
    padding: 10,
    alignItems: 'center',
  },
  cardImage: {
    width: '100%',
    height: 120,
    borderRadius: 10,
    marginBottom: 10,
  },
  cardTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardPrice: {
    color: '#FFD700',  // Gold color for price
    fontSize: 14,
    marginBottom: 10,
  },
  addToCartButton: {
    backgroundColor: '#FFD700',
    borderRadius: 8,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  addToCartText: {
    color: '#050111',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
