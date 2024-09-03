import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import auth from '@react-native-firebase/auth';

const AuthenticatedScreen = () => {
  const user = auth().currentUser;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>You are authenticated!</Text>
      {user && (
        <View style={styles.infoContainer}>
          <Text style={styles.label}>UID:</Text>
          <Text style={styles.info}>{user.uid}</Text>
          
          <Text style={styles.label}>Phone Number:</Text>
          <Text style={styles.info}>{user.phoneNumber}</Text>
          
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.info}>{user.email ? user.email : "Not provided"}</Text>
          
          <Text style={styles.label}>Display Name:</Text>
          <Text style={styles.info}>{user.displayName ? user.displayName : "Not provided"}</Text>
          
          <Text style={styles.label}>Provider ID:</Text>
          <Text style={styles.info}>{user.providerId}</Text>
        </View>
      )}
      <TouchableOpacity style={styles.button} onPress={() => auth().signOut()}>
        <Text style={styles.buttonText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'black',
  },
  title: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  infoContainer: {
    backgroundColor: '#1f1f1f',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  label: {
    color: '#888',
    fontSize: 16,
    marginBottom: 5,
  },
  info: {
    color: 'white',
    fontSize: 18,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AuthenticatedScreen;
