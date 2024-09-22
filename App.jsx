import 'react-native-gesture-handler';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import NativeStack from './MainStackNavigators/NativeStack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {PaperProvider} from 'react-native-paper';
import {ThemeProvider} from './Context/ThemeContext';
import messaging from '@react-native-firebase/messaging';

import {Platform, PermissionsAndroid, Alert, View} from 'react-native';

const App = () => {
  

  
 
  // const checkApplicationPermission = async () => {
  //   if (Platform.OS === 'android') {
  //     try {
  //       await PermissionsAndroid.request(
  //         PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
  //       );
  //     } catch (error) {}
  //   }
  // };

  // const requestUserPermission = async () => {
  //   const authStatus = await messaging().requestPermission();
  //   console.log(`authorization status`, authStatus);
  //   return (
  //     authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
  //     authStatus === messaging.AuthorizationStatus.PROVISIONAL
  //   );
  // };

  useEffect(() => {
    // checkApplicationPermission();

    // if (requestUserPermission()) {
    //   messaging()
    //     .getToken()
    //     .then(fcmToken => {
    //       console.log(`FCM Token `, fcmToken);
    //     });
    // } else console.log(`not authorization status`, authStatus);

    messaging()
      .getToken()
      .then(fcmToken => {
        console.log(`FCM Token `, fcmToken);
      });
  }, []);

  return (
    <GestureHandlerRootView style={{flex: 1}}>
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
