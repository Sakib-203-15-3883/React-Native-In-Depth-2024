import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';

// Data with local images using 'require'
const data1 = [
  { id: '1', title: 'Action Movie', image: require('../../../../../images/poster1.jpg') },
  { id: '2', title: 'Adventure Movie', image: require('../../../../../images/poster2.jpg') },
  { id: '3', title: 'Comedy Movie', image: require('../../../../../images/poster3.jpg') },
  { id: '4', title: 'Action Movie', image: require('../../../../../images/poster1.jpg') },
  { id: '5', title: 'Adventure Movie', image: require('../../../../../images/poster2.jpg') },
  { id: '6', title: 'Comedy Movie', image: require('../../../../../images/poster3.jpg') },
];

const data2 = [
  { id: '1', title: 'Romance Movie', image: require('../../../../../images/poster3.jpg') },
  { id: '2', title: 'Sci-Fi Movie', image: require('../../../../../images/poster2.jpg') },
  { id: '3', title: 'Drama Movie', image: require('../../../../../images/poster3.jpg') },
  { id: '4', title: 'Action Movie', image: require('../../../../../images/poster1.jpg') },
  { id: '5', title: 'Adventure Movie', image: require('../../../../../images/poster2.jpg') },
  { id: '6', title: 'Comedy Movie', image: require('../../../../../images/poster3.jpg') },
];

const data3 = [
  { id: '1', title: 'Thriller Movie', image: require('../../../../../images/poster1.jpg') },
  { id: '2', title: 'Horror Movie', image: require('../../../../../images/poster3.jpg') },
  { id: '3', title: 'Fantasy Movie', image: require('../../../../../images/poster3.jpg') },
  { id: '4', title: 'Action Movie', image: require('../../../../../images/poster1.jpg') },
  { id: '5', title: 'Adventure Movie', image: require('../../../../../images/poster2.jpg') },
  { id: '6', title: 'Comedy Movie', image: require('../../../../../images/poster3.jpg') },
];

const data4 = [
  { id: '1', title: 'Action Movie', image: require('../../../../../images/poster1.jpg') },
  { id: '2', title: 'Adventure Movie', image: require('../../../../../images/poster2.jpg') },
  { id: '3', title: 'Comedy Movie', image: require('../../../../../images/poster3.jpg') },
  { id: '4', title: 'Action Movie', image: require('../../../../../images/poster1.jpg') },
  { id: '5', title: 'Adventure Movie', image: require('../../../../../images/poster2.jpg') },
  { id: '6', title: 'Comedy Movie', image: require('../../../../../images/poster3.jpg') },
];

// Render card with local image
const renderItem = ({ item }) => (
  <TouchableOpacity style={styles.card}>
    <Image source={item.image} style={styles.cardImage} />
    <Text style={styles.cardTitle}>{item.title}</Text>
  </TouchableOpacity>
);

const Home = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Section 1 */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Popular Movies</Text>
        <FlatList
          data={data1}
          horizontal
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      {/* Section 2 */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Trending Now</Text>
        <FlatList
          data={data2}
          horizontal
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      {/* Section 3 */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>New Releases</Text>
        <FlatList
          data={data3}
          horizontal
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      {/* Section 3 */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>New Releases</Text>
        <FlatList
          data={data4}
          horizontal
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#050111',
    padding: 10,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  card: {
    width: 150,
    height: 170,
    borderRadius: 10,
    overflow: 'hidden',
    marginRight: 10,
    backgroundColor: '#333',
  },
  cardImage: {
    width: '100%',
    height: '75%',
    borderRadius: 10,
  },
  cardTitle: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
    paddingVertical: 5,
  },
});
