import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {ThemeContext} from '../../Context/ThemeContext';
import axios from 'axios';

const CBG = () => {
  const {colorScheme} = useContext(ThemeContext);

  return (
    <View style={[styles.container, {backgroundColor: colorScheme.background}]}>
      <Text style={[styles.title, {color: colorScheme.text}]}>
        Interview By CBG
      </Text>
    </View>
  );
};

export default CBG;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 8,
  },
  paragraph: {
    fontSize: 16,
    color: '#999',
    lineHeight: 24,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
  },
});
