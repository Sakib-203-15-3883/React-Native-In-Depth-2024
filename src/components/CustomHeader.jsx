import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'; // Correct import
import Icon from 'react-native-vector-icons/Ionicons';

const CustomHeader = ({ title, onBackPress }) => {
  return (
    <LinearGradient
      colors={['#1a1a1a', '#4d0000']} // Dark gradient colors for a horror theme
      style={styles.header}
    >
      <View style={styles.container}>
        {onBackPress && ( // Conditionally render back button if onBackPress is provided
          <TouchableOpacity onPress={onBackPress} style={styles.backButton} accessibilityLabel="Go back">
            <Icon name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>
        )}
        <Text style={styles.title}>{title}</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 70, // Height for the header
    justifyContent: 'center',
    alignItems: 'center', // Center align items
    paddingTop: 10, // Padding for status bar
    paddingHorizontal: 16, // Add horizontal padding for spacing
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center', // Align items vertically
    width: '100%', // Ensure container takes full width
  },
  backButton: {
    marginRight: 8, // Reduced space between back button and title
  },
  title: {
    fontSize: 25, // Adjusted font size for better fit
    color: '#fff', // Text color
    flex: 1, // Allow title to take remaining space
    textAlign: 'left',
    fontWeight:"700" // Align title to the left to place beside the back icon
  },
});

export default CustomHeader;
