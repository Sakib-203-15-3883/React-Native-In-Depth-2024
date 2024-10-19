import React, { useRef, useCallback } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useFocusEffect } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const Tab = createMaterialTopTabNavigator();

const screens = [
  { name: 'Welcome', title: 'Welcome', description: 'Welcome to our awesome app!' },
  { name: 'Discover', title: 'Discover', description: 'Discover amazing features.' },
  { name: 'GetStarted', title: 'Get Started', description: 'Get started with using our app!' },
];

const OnboardingScreen = ({ title, description, navigation, isLastScreen, nextScreen }) => {
  const titleOpacity = useRef(new Animated.Value(0)).current;
  const descriptionOpacity = useRef(new Animated.Value(0)).current;

  useFocusEffect(
    useCallback(() => {
      // Reset opacity values for each time the screen is focused
      titleOpacity.setValue(0);
      descriptionOpacity.setValue(0);

      // Animate the title and description opacity when the screen is focused
      Animated.timing(titleOpacity, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start();

      Animated.timing(descriptionOpacity, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    }, [titleOpacity, descriptionOpacity])
  );

  return (
    <LinearGradient 
      colors={['#EE9CA7', '#FFDDE1']}
      style={styles.screen}
    >
      <Animated.View style={{ opacity: titleOpacity }}>
        <Text style={styles.title}>{title}</Text>
      </Animated.View>
      <Animated.View style={{ opacity: descriptionOpacity }}>
        <Text style={styles.description}>{description}</Text>
      </Animated.View>

      <View style={styles.buttonContainer}>
        {isLastScreen ? (
          <TouchableOpacity
            style={styles.finishButton}
            onPress={() => navigation.replace('ComplexNavigationStructureOne')}
          >
            <Text style={styles.finishButtonText}>Finish</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.nextButton}
            onPress={nextScreen}
          >
            <Text style={styles.nextButtonText}>Next</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity
          style={styles.skipButton}
          onPress={() => navigation.replace('ComplexNavigationStructureOne')}
        >
          <Text style={styles.skipButtonText}>Skip</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const CustomTabBar = ({ state }) => {
  const progress = state.index;

  return (
    <LinearGradient 
      colors={['#EE9CA7', '#EE9CA7']} 
      style={styles.tabBarContainer}
    >
      <View style={styles.progressContainer}>
        {screens.map((_, index) => (
          <View
            key={index}
            style={[styles.progressSegment, { backgroundColor: index <= progress ? '#3b82f6' : '#e0e0e0' }]}
          />
        ))}
      </View>
    </LinearGradient>
  );
};

export default function App() {
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{ swipeEnabled: false }}
    >
      {screens.map((screen, index) => (
        <Tab.Screen
          key={screen.name}
          name={screen.name}
          options={{ tabBarLabel: screen.title }}
        >
          {({ navigation }) => (
            <OnboardingScreen
              title={screen.title}
              description={screen.description}
              navigation={navigation}
              isLastScreen={index === screens.length - 1}
              nextScreen={() => {
                const nextIndex = index + 1;
                if (nextIndex < screens.length) {
                  navigation.navigate(screens[nextIndex].name);
                }
              }}
            />
          )}
        </Tab.Screen>
      ))}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBarContainer: {
    paddingVertical: 10,
    borderBottomColor: '#ddd',
  },
  progressContainer: {
    flexDirection: 'row',
    height: 4,
    backgroundColor: 'transparent',
    marginHorizontal: 16,
    borderRadius: 2,
    overflow: 'hidden',
    marginTop: 30,
    marginBottom: 20,
  },
  progressSegment: {
    flex: 1,
    backgroundColor: '#e0e0e0',
    marginHorizontal: 8, 
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#3b82f6',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
  },
  nextButton: {
    backgroundColor: '#3b82f6',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 24,
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  finishButton: {
    backgroundColor: '#FF6347',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 24,
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  finishButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  skipButton: {
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  skipButtonText: {
    color: '#3b82f6',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
