import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator, Image } from 'react-native';
import { firebase } from '@react-native-firebase/database';

const FetchCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true); // State to manage loading

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        // Replace with your actual database URL
        const reference = firebase
          .app()
          .database('https://learnreactnative2024-default-rtdb.asia-southeast1.firebasedatabase.app/')
          .ref('/courses');

        // Fetch data from the "courses" node in your Firebase Realtime Database
        const snapshot = await reference.once('value');
        const data = snapshot.val();

        // Log fetched data to the console for debugging
        console.log("Fetched Data:", data);

        // Check if data is null
        if (data === null) {
          console.warn("No data found at '/courses'");
          setLoading(false); // Set loading to false if no data
          return; // Exit if no data found
        }

        // Convert the courses object into an array of courses
        const coursesArray = Object.keys(data).map(courseId => ({
          id: courseId,
          ...data[courseId],
        }));

        setCourses(coursesArray);
        console.log("Courses Array:", coursesArray);
      } catch (error) {
        console.error('Error fetching courses: ', error);
      } finally {
        setLoading(false); // Set loading to false after fetch is complete
      }
    };

    fetchCourses();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? ( // Check loading state
        <ActivityIndicator size="large" color="#fff" />
      ) : courses.length === 0 ? (
        <Text style={styles.noDataText}>No courses available</Text>
      ) : (
        <FlatList
          data={courses}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.courseCard}>
              <Text style={styles.courseTitle}>{item.courseTitle}</Text>
              <Text style={styles.courseCode}> {item.courseCode}</Text>
              {item.image && ( // Check if image exists before rendering
                <Image
                  source={{ uri: item.image }} // Use the URI from the item
                  style={styles.courseImage} // Apply styling to the image
                />
              )}
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#000', // Set background color to black
  },
  courseCard: {
    padding: 16,
    marginBottom: 10,
    backgroundColor: '#1c1c1c', // Darker card background for contrast
    borderRadius: 8,
    elevation: 2, // Add slight elevation for shadow effect
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff', // White text for visibility
    marginBottom: 8,
  },
  courseCode: {
    color: '#ccc', // Light gray for secondary text
  },
  courseImage: {
    width: '100%', // Full width of the card
    height: 150, // Set a fixed height for the image
    borderRadius: 8, // Round the corners of the image
    marginTop: 10, // Space between text and image
  },
  noDataText: {
    color: '#fff', // White text for no data message
    textAlign: 'center',
    marginTop: 20,
  },
});

export default FetchCourses;
