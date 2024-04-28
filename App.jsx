import React from 'react';
import NativeStack from './MainStackNavigators/NativeStack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer >
        <NativeStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;


