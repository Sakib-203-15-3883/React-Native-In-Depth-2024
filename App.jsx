import {GestureHandlerRootView} from 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import NativeStack from './MainStackNavigators/NativeStack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {PaperProvider} from 'react-native-paper';
import {ThemeProvider} from './Context/ThemeContext';
import messaging from '@react-native-firebase/messaging';
import CustomSplashScreen from './src/SplashScreen/SplashScreen';
import {Platform, PermissionsAndroid, Alert, View} from 'react-native';

const App = () => {
  const [isSplashVisible, setIsSplashVisible] = React.useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsSplashVisible(false);
    }, 500); // Hide splash after 3 seconds
  }, []);
 
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
             
             
                
                

                {isSplashVisible ? <CustomSplashScreen /> : <NativeStack />}
         
              
            </NavigationContainer>
          </SafeAreaProvider>
        </PaperProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
};

export default App;
