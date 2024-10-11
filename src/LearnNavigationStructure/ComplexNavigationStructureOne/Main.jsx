import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import GetPremium from './DrawerScreen/GetPremium';
import SupportInbox from './DrawerScreen/SupportInbox';
import WhatsNew from './DrawerScreen/WhatsNew';
import Share from './DrawerScreen/Share';
import Settings from './DrawerScreen/Settings';
import Games from './DrawerScreen/Games';
import Login from './DrawerScreen/Login';

import {createDrawerNavigator, DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Vector icons
import Profile from "../../../images/profile1.png";
import { useNavigation } from '@react-navigation/native';
const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props} contentContainerStyle={{flexGrow: 1}}>
        {/* Custom Header for Drawer */}
        <View style={styles.headerContainer}>
          {/* Left Side: Profile Pic, Username, Phone Number */}
          <View style={styles.userInfo}>
            <Image
              source={Profile} // Replace with actual profile pic URL
              style={styles.profilePic}
            />
            <View>
              <Text style={styles.userName}>user</Text>
              <Text style={styles.userPhone}>01616120246</Text>
            </View>
          </View>

          {/* Right Side: Icon */}
          <Icon name="wb-sunny" size={30} color="white" style={styles.headerIcon} />
        </View>

        {/* Drawer Items */}
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      {/* Drawer Footer with Login Button */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => props.navigation.navigate('Login')}
        >
          <Icon name="login" size={24} color="white" style={styles.footerIcon} />
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Main = () => {
  const navigation = useNavigation();
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: true,
        drawerStyle: {
          backgroundColor: 'black',
          width: 280,
        },
        drawerActiveBackgroundColor: '#37424F',
        drawerLabelStyle: {
          fontSize: 15,
          fontWeight: 'bold',
        },
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: '#E6D9D9',
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />} // Set custom drawer content
    >
      <Drawer.Screen 
        name="ABCD" 
        component={GetPremium} 
        options={{
          drawerIcon: ({color}) => <Icon name="home" size={24} color={color} />,
          // Custom header for the Home screen
          headerStyle: {
            backgroundColor: 'black', // Set the background color of the Home header here
          },
          headerTintColor: '#fff', // Set the color of the header text and icons
          headerTitleStyle: {
            fontWeight: 'bold', // Optional: set header title style
          },
          // Custom header icons
          headerRight: () => (
            <View style={{flexDirection: 'row', marginRight: 10}}>
              {/* Search Icon */}
              <TouchableOpacity onPress={() => { navigation.navigate("SearchScreen1") }}>
                <Icon name="search" size={24} color="white" style={{marginRight: 15}} />
              </TouchableOpacity>

              {/* 3-dot menu Icon */}
              <TouchableOpacity onPress={() => { /* Handle 3-dot menu press */ }}>
                <Icon name="more-vert" size={24} color="white" />
              </TouchableOpacity>
            </View>
          ),
        }} 
      />
      <Drawer.Screen 
        name="Support Inbox" 
        component={SupportInbox} 
        options={{
          drawerIcon: ({color}) => <Icon name="inbox" size={24} color={color} />,
        }} 
      />
      <Drawer.Screen 
        name="What's New" 
        component={WhatsNew} 
        options={{
          drawerIcon: ({color}) => <Icon name="new-releases" size={24} color={color} />,
        }} 
      />
      <Drawer.Screen 
        name="Share" 
        component={Share} 
        options={{
          drawerIcon: ({color}) => <Icon name="share" size={24} color={color} />,
        }} 
      />
      <Drawer.Screen 
        name="Settings" 
        component={Settings} 
        options={{
          drawerIcon: ({color}) => <Icon name="settings" size={24} color={color} />,
        }} 
      />
      <Drawer.Screen 
        name="Games" 
        component={Games} 
        options={{
          drawerIcon: ({color}) => <Icon name="games" size={24} color={color} />,
        }} 
      />
      <Drawer.Screen 
        name="Login" 
        component={Login} 
        options={{
          drawerIcon: ({color}) => <Icon name="login" size={24} color={color} />,
        }} 
      />
    </Drawer.Navigator>
  );
};

export default Main;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 35,
    paddingHorizontal: 15,
    backgroundColor: '#04031D', // Background color for drawer header
    marginBottom: 20, // Add margin between header and drawer items
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25, // Make it circular
    marginRight: 10,
  },
  userName: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  userPhone: {
    color: 'gray',
    fontSize: 14,
  },
  headerIcon: {
    marginRight: 10, // Adjust for spacing
  },
  footer: {
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#37424F',
    backgroundColor: '#031427',
  },
  loginButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerIcon: {
    marginRight: 10,
  },
  loginText: {
    color: 'white',
    fontSize: 18,
  },
});
