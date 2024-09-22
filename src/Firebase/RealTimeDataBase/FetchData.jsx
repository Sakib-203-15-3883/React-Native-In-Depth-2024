import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import database from '@react-native-firebase/database';

const CoursesList = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const reference = database().ref('/courses');
    reference.on('value', snapshot => {
      console.log('Snapshot:', snapshot.val());
    });
  
    return () => reference.off();
  }, []);
  

  // If loading, show a loading message
  if (loading) {
    return <Text>Loading...</Text>;
  }

  // If there's an error, display an error message
  if (error) {
    return <Text>{error}</Text>;
  }

  // If no courses are found, display a message
  if (!courses.length) {
    return <Text>No courses available.</Text>;
  }

  // Render each course in a FlatList
  const renderItem = ({ item }) => (
    <View style={styles.courseCard}>
      <Text style={styles.courseTitle}>{item.courseTitle}</Text>
      <Text>Course Code: {item.courseCode}</Text>
      <Text>Department: {item.department}</Text>
      <Text>PDF: {item.pdfLink}</Text>
    </View>
  );

  return (
    <FlatList
      data={courses}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};

const styles = StyleSheet.create({
  courseCard: {
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CoursesList;
