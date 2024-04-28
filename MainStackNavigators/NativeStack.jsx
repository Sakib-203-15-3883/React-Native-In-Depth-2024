import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Main from '../src/Main/Main';
import Components from '../src/LearnComponents/Components';
import FlatList from '../src/FlatList/FlatList';

const Stack = createNativeStackNavigator();

const NativeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Components" component={Components} />
      <Stack.Screen name="FlatList" component={FlatList} />
    </Stack.Navigator>
  );
};

export default NativeStack;

const styles = StyleSheet.create({});
