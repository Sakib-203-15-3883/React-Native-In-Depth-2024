import React, { useRef, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Bundles from './Screens/ParentTabScreens/bundles';
import CashbackDeals from './Screens/ParentTabScreens/cashbackDeals';
import Internet from './Screens/ParentTabScreens/internet';
import Minutes from './Screens/ParentTabScreens/Minutes';
import RateCutters from './Screens/ParentTabScreens/rateCutters';
import SuperDeals from './Screens/ParentTabScreens/superDeals';

const Tab = createMaterialTopTabNavigator();

const CustomTabBar = ({ state, descriptors, navigation }) => {
  const scrollViewRef = useRef(null);

  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        x: state.index * 100, // Adjust this value for smooth scrolling to the focused tab
        animated: true,
      });
    }
  }, [state.index]);

  // Function to get the appropriate icon based on the route name
  const getTabIcon = (routeName, color) => {
    switch (routeName) {
      case 'SuperDeals':
        return <Icon name="tag" size={16} color={color} />;
      case 'Internet':
        return <Icon name="wifi" size={16} color={color} />;
      case 'Bundles':
        return <Icon name="plus-square-o" size={16} color={color} />;
      case 'Minutes':
        return <Icon name="phone" size={16} color={color} />;
      case 'CashbackDeals':
        return <Icon name="check-square" size={16} color={color} />;
      case 'RateCutters':
        return <Icon name="percent" size={14} color={color} />;
      default:
        return null;
    }
  };

  return (
    <View style={{ marginTop: '18%', marginBottom: '5%' }}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.tabBarContainer}
      >
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;
          const backgroundColor = isFocused ? 'transparent' : '#FCFAEE';
          const textColor = isFocused ? 'red' : '#555';

          return (
            <View
              key={route.key}
              style={[
                styles.tabItem,
                {
                  backgroundColor,
                  borderColor: isFocused ? 'red' : '#ddd',
                },
              ]}
            >
              <TouchableOpacity
                onPress={() => {
                  const event = navigation.emit({
                    type: 'tabPress',
                    target: route.key,
                    canPreventDefault: true,
                  });

                  if (!isFocused && !event.defaultPrevented) {
                    navigation.navigate(route.name);
                  }
                }}
                style={styles.tabTouchable} // Style for touchable
              >
                {/* Align icon and text horizontally */}
                <View style={styles.tabContent}>
                  {getTabIcon(route.name, textColor)}
                  <Text style={{ color: textColor, fontWeight: 'bold', fontSize: 12, textAlign: 'center', marginLeft: 4 }}>
                    {label}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const CloneScreen = () => {
  return (
    <View style={styles.container}>
      <Tab.Navigator
        tabBar={(props) => <CustomTabBar {...props} />}
        screenOptions={{
          tabBarItemStyle: {
            borderRadius: 8,
            margin: 4,
          },
          tabBarIndicatorStyle: {
            height: 0,
          },
        }}
      >
        <Tab.Screen name="SuperDeals" component={SuperDeals} />
        <Tab.Screen name="Internet" component={Internet} />
        <Tab.Screen name="Bundles" component={Bundles} />
        <Tab.Screen name="Minutes" component={Minutes} />
        <Tab.Screen name="CashbackDeals" component={CashbackDeals} />
        <Tab.Screen name="RateCutters" component={RateCutters} />
      </Tab.Navigator>
    </View>
  );
};

export default CloneScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 4,
    backgroundColor: 'transparent',
  },
  tabItem: {
    minWidth: 70,
    margin: 4,
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabTouchable: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabContent: {
    flexDirection: 'row', // Align icon and text horizontally
    alignItems: 'center',  // Center vertically
  },
});
