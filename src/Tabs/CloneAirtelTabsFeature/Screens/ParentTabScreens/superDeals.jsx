import React, { useRef, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Days7 from '../ChildTabScreens/SuperDeals/7days';
import Days30 from '../ChildTabScreens/SuperDeals/30Days';
import All from '../ChildTabScreens/SuperDeals/all';
import Price from '../ChildTabScreens/SuperDeals/price';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialTopTabNavigator();

const getIconName = (routeName) => {
  switch (routeName) {
    case 'Price':
      return 'currency-usd';
    case 'All':
      return 'playlist-check';
    case 'Days30':
      return 'calendar-month';
    case 'Days7':
      return 'calendar-week';
    case 'Days3':
      return 'calendar';
    case 'Days':
      return 'calendar-today';
    default:
      return 'folder';
  }
};

const CustomTabBar = ({ state, descriptors, navigation }) => {
  const scrollViewRef = useRef(null);

  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        x: state.index * 100,
        animated: true,
      });
    }
  }, [state.index]);

  return (
    <View style={{ marginTop: '1%', marginBottom: '5%' }}>
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
          const iconName = getIconName(route.name);

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
                  <Icon name={iconName} size={16} color={textColor} />
                  <Text style={{ color: textColor, fontWeight: 'bold', fontSize: 12, marginLeft: 4 }}>
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

const SuperDeals = () => {
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
          swipeEnabled: true,
        }}
      >
        <Tab.Screen name="Price" component={Price} />
        <Tab.Screen name="All" component={All} />
        <Tab.Screen name="Days30" component={Days30} />
        <Tab.Screen name="Days7" component={Days7} />
        <Tab.Screen name="Days3" component={Days30} />
        <Tab.Screen name="Days" component={Days7} />
      </Tab.Navigator>
    </View>
  );
};

export default SuperDeals;

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
