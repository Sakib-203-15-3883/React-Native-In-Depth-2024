import {GestureHandlerRootView} from 'react-native-gesture-handler';
import React from 'react';
import NativeStack from './MainStackNavigators/NativeStack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {PaperProvider} from 'react-native-paper';
import {ThemeProvider} from './Context/ThemeContext';

const App = () => {
  return (
    <GestureHandlerRootView>
      <ThemeProvider>
        <PaperProvider>
          <SafeAreaProvider>
            <NavigationContainer>
              <NativeStack />
            </NavigationContainer>
          </SafeAreaProvider>
        </PaperProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
};

export default App;
