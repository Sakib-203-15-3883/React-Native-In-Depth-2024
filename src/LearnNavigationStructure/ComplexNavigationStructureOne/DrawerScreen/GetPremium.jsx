import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Home from './BottomScreenForHome/Home';
import Library from './BottomScreenForHome/Library';
import MyStore from './BottomScreenForHome/MyStore';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation'; // Correct tab import
import Icon from 'react-native-vector-icons/MaterialIcons'; // Vector icons

const Tab = createMaterialBottomTabNavigator();

const Main = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      shifting={true} // Enable animations
      activeColor="#4A90E2" // Active icon/text color
      inactiveColor="gray" // Inactive icon/text color
      barStyle={{ backgroundColor: '#07011B' }} // Tab bar background color
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Library"
        component={Library}
        options={{
          tabBarLabel: 'Library',
          tabBarIcon: ({ color }) => (
            <Icon name="library-books" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="MyStore"
        component={MyStore}
        options={{
          tabBarLabel: 'MyStore',
          tabBarIcon: ({ color }) => (
            <Icon name="store" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Main;
