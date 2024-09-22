import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import React from 'react';

// Sample data for historical events
const historyEvents = [
  { id: '1', title: 'World War I', image: require('../../../../../../images/poster1.jpg'), description: 'The First World War was a global war that lasted from 1914 to 1918.' },
  { id: '2', title: 'World War II', image: require('../../../../../../images/poster3.jpg'), description: 'The Second World War was fought from 1939 to 1945 and involved most of the world,s nations.' },
  { id: '3', title: 'French Revolution', image: require('../../../../../../images/poster2.jpg'), description: 'A period of radical social and political change in France from 1789 to 1799.' },
];

// Custom rendering for each historical event card
const renderItem = ({ item }) => (
  <TouchableOpacity style={styles.card}>
    <Image source={item.image} style={styles.cardImage} />
    <View style={styles.cardContent}>
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardDescription}>{item.description}</Text>
    </View>
  </TouchableOpacity>
);

const History = () => {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Historical Events</Text>
      </View>

      {/* List of Historical Events */}
      <FlatList
        data={historyEvents}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

export default History;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#050111',
  },
  header: {
    padding: 10,
    alignItems: 'center',
    
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  listContainer: {
    padding: 10,
  },
  card: {
    backgroundColor: '#333',
    borderRadius: 15,
    marginBottom: 15,
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: 150,
  },
  cardContent: {
    padding: 10,
  },
  cardTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardDescription: {
    color: 'gray',
    fontSize: 14,
  },
});
