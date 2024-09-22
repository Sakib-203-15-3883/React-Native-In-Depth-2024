import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import History from './TopTabScreensForLibrary/History';
import Horror from './TopTabScreensForLibrary/Horror';
import Fiction from './TopTabScreensForLibrary/Fiction';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const Library = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabBarLabel,
        tabBarIndicatorStyle: styles.tabBarIndicator,
        tabBarActiveTintColor: '#FFD700',  // Gold for active tab
        tabBarInactiveTintColor: 'gray',  // Gray for inactive tab
      }}
    >
      <Tab.Screen name="History" component={History} />
      
      <Tab.Screen name="Fiction" component={Fiction} />
      <Tab.Screen name="Horror" component={Horror} />
    </Tab.Navigator>
  );
};

export default Library;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#050111',  // Dark background color
    elevation: 0,  // Remove shadow
    shadowOpacity: 0,
    height: 60,  // Increase height for a modern look
  },
  tabBarLabel: {
    fontSize: 16,  // Increased font size for better readability
    fontWeight: 'bold',
    textTransform: 'capitalize',  // Only capitalize the first letter
    marginBottom: 8,  // Add some space between text and indicator
  },
  tabBarIndicator: {
    backgroundColor: '#FFD700',  // Gold color for indicator
    height: 4,  // Thicker indicator
    borderRadius: 2,  // Rounded edges for the indicator
  },
});
