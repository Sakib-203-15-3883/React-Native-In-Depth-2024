import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';


import LightImage from '../../images/light4.png'; 
import DarkImage from '../../images/dark-mode-1.png';   

const HorizontalButtons = () => {

  const [activeButton, setActiveButton] = useState('dark');

  return (

    <View style={styles.container}>

      {/* Conditionally render the image based on the active button */}

      <View style={styles.imageContainer}>
        {activeButton === 'light' && <Image source={LightImage} style={styles.image} />}
        {activeButton === 'dark' && <Image source={DarkImage} style={styles.image} />}
      </View>
      

      <View style={styles.buttons}>
        <TouchableOpacity
          style={[
            styles.button,
            activeButton === 'light' && styles.activeButton
          ]}
          onPress={() => setActiveButton('light')}
        >
          <Text style={styles.buttonText}>Light</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            activeButton === 'dark' && styles.activeButton
          ]}
          onPress={() => setActiveButton('dark')}
        >
          <Text style={styles.buttonText}>Dark</Text>
        </TouchableOpacity>
      </View>

      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    backgroundColor: '#72707B',
    marginHorizontal: '10%',
    borderRadius: 30,
  },
  button: {
    flex: 1,
    margin: 20,
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
  },
  activeButton: {
    backgroundColor: 'whitesmoke',
  },
  buttonText: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
  },
  imageContainer: {
    marginTop: 20,
    marginBottom:"20%",
    alignItems: 'center',
  },
  image: {
    width: 100,  
    height: 100, 
  },
});

export default HorizontalButtons;
