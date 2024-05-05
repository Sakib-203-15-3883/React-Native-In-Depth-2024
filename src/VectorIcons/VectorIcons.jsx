import React, {useContext} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import Home from 'react-native-vector-icons/AntDesign';
import Camera from 'react-native-vector-icons/Entypo';
import Moon from 'react-native-vector-icons/Entypo';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ThemeContext} from '../../Context/ThemeContext';

const TextDataComponent = () => {
  const {colorScheme} = useContext(ThemeContext);

  return (
    <ScrollView
      style={[styles.container, {backgroundColor: colorScheme.background}]}>
      <SafeAreaView>
        <View>
          <Text style={[styles.title, {color: colorScheme.text}]}>
            React Native Vector Icons
          </Text>
          <View style={styles.item}>
            <Text style={[styles.text, , {color: colorScheme.text}]}>
              To use React Native Vector Icons in our React Native project,
              first we need to install and configure the React Native Vector
              Icons package from the documentation.
            </Text>
          </View>
        </View>

        <View style={styles.buttons}>
          <Text style={[styles.title, {color: colorScheme.text}]}>
            {' '}
            Here i display icons from react native vector icons{' '}
          </Text>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: 40,
              flexWrap: 'wrap',
            }}>
            <Home name="home" size={60} color={colorScheme.text} />
            <Camera name="camera" size={60} color={colorScheme.text} />
            <Moon name="moon" size={60} color={colorScheme.text} />
            <Home name="home" size={60} color={colorScheme.text} />
            <Camera name="camera" size={60} color={colorScheme.text} />
            <Moon name="moon" size={60} color={colorScheme.text} />
            <Home name="home" size={60} color={colorScheme.text} />
            <Camera name="camera" size={60} color={colorScheme.text} />
            <Moon name="moon" size={60} color={colorScheme.text} />
            <Home name="home" size={60} color={colorScheme.text} />
            <Camera name="camera" size={60} color={colorScheme.text} />
            <Moon name="moon" size={60} color={colorScheme.text} />
            <Home name="home" size={60} color={colorScheme.text} />
            <Camera name="camera" size={60} color={colorScheme.text} />
            <Moon name="moon" size={60} color={colorScheme.text} />
            <Home name="home" size={60} color={colorScheme.text} />
            <Camera name="camera" size={60} color={colorScheme.text} />
            <Moon name="moon" size={60} color={colorScheme.text} />
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    // color: 'black',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginLeft: 10,
    // color: 'black',
  },
  buttons: {
    marginTop: '15%',
  },
});

export default TextDataComponent;
