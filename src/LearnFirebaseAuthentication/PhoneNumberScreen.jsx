import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, StatusBar, Animated, Keyboard, Image, Dimensions } from 'react-native';

const PhoneNumberScreen = ({ onSubmit }) => {

  const [phoneNumber, setPhoneNumber] = useState('');
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const translateY = useRef(new Animated.Value(0)).current;
  
  const { height } = Dimensions.get('window');
  
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardVisible(true);
      Animated.timing(translateY, {
        toValue: -height * 0.1, // Adjust as a percentage of screen height
        duration: 300,
        useNativeDriver: true,
      }).start();
    });
    
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardVisible(false);
      Animated.timing(translateY, {
        toValue: 0, // Move down when keyboard is hidden
        duration: 300,
        useNativeDriver: true,
      }).start();
    });

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, [translateY, height]);

  return (
    <Animated.View style={[styles.container, { transform: [{ translateY, }] }]}>
      <View style={{marginTop:"60%"}}>
      <StatusBar barStyle="light-content" backgroundColor="#1c1c1c" />
      <Image
        source={require('../../images/daffodil-international-university-logo-2.png')} // Replace with your logo image path
        style={styles.logo}
      />
      <Text style={styles.title}>Enter your phone number</Text>
      <TextInput
        style={styles.input}
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        placeholder="+880 1*********"
        placeholderTextColor="gray"
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => onSubmit(phoneNumber)}
      >
        <Text style={styles.buttonText}>Send OTP</Text>
      </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    // backgroundColor: '#1c1c1c',
  },
  logo: {
    width: 70, // Adjust size relative to screen
    height: 70, // Adjust size relative to screen
    alignSelf: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: '600',
  },
  input: {
    height: 45,
    borderColor: '#444',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
    marginHorizontal:10,
    color: 'white',
    backgroundColor: '#333',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 2,
  },
  button: {
    height: 50,
    backgroundColor: '#007BFF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 2,
    marginHorizontal:10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default PhoneNumberScreen;
