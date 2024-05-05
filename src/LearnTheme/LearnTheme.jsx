import {StyleSheet, Text, ScrollView, View} from 'react-native';
import React, {useContext} from 'react';
import {ThemeContext} from '../../Context/ThemeContext';
import {SafeAreaView} from 'react-native-safe-area-context';

const LearnTheme = () => {
  const {colorScheme} = useContext(ThemeContext);

  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: colorScheme.background}]}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={{padding: 20}}>
          <Text style={[styles.title, {color: colorScheme.text}]}>
            Understanding how to apply theme in React Native
          </Text>
          <Text style={[styles.paragraph, {color: colorScheme.text}]}>
            We implement theme [light/dark] in react native app with
            AsyncStorage and context api for the whole app.
          </Text>
          <Text style={[styles.subtitle, {color: colorScheme.text}]}>
            i. react-native-async-storage/async-storage :
          </Text>
          <Text style={[styles.paragraph, {color: colorScheme.text}]}>
            First, we install react-native-async-storage/async-storage to store
            the user preference. It stores small data as a key-value pair and
            it's global to the app. we use it to store the selected theme
            preferences.
          </Text>
          <Text style={[styles.subtitle, {color: colorScheme.text}]}>
            ii. ThemeContext.jsx :
          </Text>
          <Text style={[styles.paragraph, {color: colorScheme.text}]}>
            The theme implementation involves: Using AsyncStorage to store and
            retrieve the selected theme. Creating a ThemeContext to provide the
            theme state and toggle function to the components. Dynamically
            applying the selected theme's color scheme to the UI components.
          </Text>
          <Text style={[styles.notes, {color: colorScheme.text}]}>
          Context API: The Context API is a feature in React that allows you to pass data through the component tree without having to pass props down manually at every level. It provides a way to share values like themes or user preferences across components.
          </Text>
          <Text style={[styles.notes, {color: colorScheme.text}]}>
          AsyncStorage: AsyncStorage is a simple, unencrypted, asynchronous, persistent, key-value storage system that is global to the app. It is commonly used in React Native apps for storing small amounts of data locally.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LearnTheme;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  paragraph: {
    fontSize: 16,
    marginTop: 5,
    marginBottom: 10,
  },
  notes: {
    fontSize: 14,
    fontStyle: 'italic',
    marginTop: 20,
  },
});
