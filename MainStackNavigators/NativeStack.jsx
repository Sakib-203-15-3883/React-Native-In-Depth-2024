import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Main from '../src/Main/Main';
import Components from '../src/LearnComponents/Components';
import FlatList from '../src/FlatList/FlatList';
import VectorIcons from '../src/VectorIcons/VectorIcons';
import LearnTheme from '../src/LearnTheme/LearnTheme';
import AnimatedTabBar from '../src/AnimatedTapBar/AnimatedTabBar';
import AnimatedCard from '../src/Animation/AnimatedCard';
import Bottom from '../src/BottomSheet/BottomSheet';
import HorizontalButtonList from '../src/Animation/HorizontalButtonList';

const Stack = createNativeStackNavigator();

const NativeStack = () => {

  return (

    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Main} />
      <Stack.Screen name="Components" component={Components} />
      <Stack.Screen name="VectorIcons" component={VectorIcons} />
      <Stack.Screen name="LearnTheme" component={ LearnTheme} />
      <Stack.Screen name="AnimatedTabBar" component={AnimatedTabBar} />
      <Stack.Screen name="FlatList" component={FlatList} />
      <Stack.Screen name="AnimatedCard" component={AnimatedCard} />
      <Stack.Screen name="BottomSheet" component={Bottom} />
      <Stack.Screen name="HorizontalButtonList" component={HorizontalButtonList} />
    </Stack.Navigator>
  );
};

export default NativeStack;

const styles = StyleSheet.create({});
