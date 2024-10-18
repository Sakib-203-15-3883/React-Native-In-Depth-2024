import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { lightColors } from './Colors';

const Button = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={[styles.button, ]} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007bff',
    width: 125, // Fixed width
    height: 40, // Fixed height
   
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Button;
