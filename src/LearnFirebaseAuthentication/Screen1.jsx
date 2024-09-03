import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import auth from '@react-native-firebase/auth';
import PhoneNumberScreen from './PhoneNumberScreen';
import VerifyCodeScreen from './VerifyCodeScreen';
import AuthenticatedScreen from './AuthenticatedScreen';

const Screen1 = () => {
  const [confirm, setConfirm] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);

  // Function to sign in with phone number using SafetyNet
  async function signIn(phoneNumber) {
    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      setConfirm(confirmation);
    } catch (error) {
      if (error.code === 'auth/network-request-failed') {
        alert('Network error: Please check your connection and try again.');
      } else {
        alert(error.message);
      }
      console.log(error.message);
    }
    
  }

  // Function to confirm the verification code
  async function confirmVerificationCode(code) {
    try {
      await confirm.confirm(code);
      setConfirm(null);
    } catch (error) {
      alert('Invalid code');
      console.log(error);
    }
  }

  // Track the authentication state
  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged((user) => {
      if (user) {
        setAuthenticated(true);
      } else {
        setAuthenticated(false);
      }
    });

    return unsubscribe;
  }, []);

  // UI to display different screens based on state
  if (authenticated) return <AuthenticatedScreen />;
  if (confirm) return <VerifyCodeScreen onSubmit={confirmVerificationCode} />;
  return (
    <View style={{ backgroundColor: "black", flex: 1 }}>
      <PhoneNumberScreen onSubmit={signIn} />
    </View>
  );
};

export default Screen1;
