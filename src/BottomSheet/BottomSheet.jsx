import React, { useCallback, useRef, useMemo, useContext, useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Animated, BackHandler } from 'react-native';
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ThemeContext } from '../../Context/ThemeContext';

import Icon from './Icon';

const ThemeBottomSheet = () => {
  const { theme, toggleTheme, colorScheme } = useContext(ThemeContext);
  const [selectedTheme, setSelectedTheme] = useState(theme);
  const sheetRef = useRef(null);
  const snapPoints = useMemo(() => ['65%', '75%', '80%'], []);
  const [isSheetVisible, setIsSheetVisible] = useState(false);

  // Animation Values
  const sheetTranslateY = useRef(new Animated.Value(300)).current;
  const imageOpacity = useRef(new Animated.Value(0)).current;
  const textOpacity = useRef(new Animated.Value(0)).current;
  const buttonOpacity = useRef(new Animated.Value(0)).current;

  const handleSheetChange = useCallback(index => {
    console.log('handleSheetChange', index);
  }, []);

  const handleThemeChange = newTheme => {
    toggleTheme(newTheme);
    setSelectedTheme(newTheme);
  };

  const handleClose = () => {
    Animated.timing(sheetTranslateY, {
      toValue: 300,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setIsSheetVisible(false);
    });
  };

  const toggleBottomSheet = () => {
    if (!isSheetVisible) {
      // Reset animation values before starting
    imageOpacity.setValue(0);
    textOpacity.setValue(0);
    buttonOpacity.setValue(0);
      Animated.parallel([
        Animated.timing(sheetTranslateY, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.sequence([
          Animated.timing(imageOpacity, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
          }),
          Animated.timing(textOpacity, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
          }),
          Animated.timing(buttonOpacity, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
          }),
        ]),
      ]).start();
      setIsSheetVisible(true);
    } else {
      handleClose();
    }
  };

  // Handle hardware back button
  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      if (isSheetVisible) {
        handleClose();
        return true; // Prevent default behavior (going back to the previous screen)
      }
      return false; // Allow default back behavior if the sheet is not open
    });

    return () => backHandler.remove();
  }, [isSheetVisible]);

  return (
    <View style={[styles.container, { backgroundColor: colorScheme.background }]}>
      <TouchableOpacity style={styles.openButton} onPress={toggleBottomSheet}>
        <Text style={[styles.openButtonText, { color: colorScheme.buttonText }]}>
          Open Theme Selector
        </Text>
      </TouchableOpacity>

      {isSheetVisible && (
        <Animated.View
          style={[
            styles.bottomSheetContainer,
            { transform: [{ translateY: sheetTranslateY }], backgroundColor: colorScheme.background },
          ]}
        >
          <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
            <AntDesign name="close" size={37} color={colorScheme.text} />
          </TouchableOpacity>

          <BottomSheet
            ref={sheetRef}
            index={0}
            snapPoints={snapPoints}
            onChange={handleSheetChange}
          >
            <BottomSheetScrollView
              style={[styles.scrollView, { backgroundColor: colorScheme.BottomBackground }]}
            >
              <View style={styles.contentContainer}>
                <Animated.View style={[styles.imageContainer, { opacity: imageOpacity }]}>
                  <Icon />
                </Animated.View>

                <Animated.View style={[styles.description, { opacity: textOpacity }]}>
                  <Text style={[styles.headerText, { color: colorScheme.text }]}>
                    Choose a Theme
                  </Text>
                  <Text style={[styles.subHeaderText, { color: colorScheme.text }]}>
                    Customize your interface
                  </Text>
                </Animated.View>

                <Animated.View style={[styles.themeOptions, styles.switchBackground, { opacity: buttonOpacity }]}>
                  <TouchableOpacity
                    style={[
                      styles.button,
                      selectedTheme === 'dark' && styles.activeButtonDark,
                      selectedTheme !== 'dark' && styles.inactiveButton,
                    ]}
                    onPress={() => handleThemeChange('dark')}
                  >
                    <Text style={[styles.buttonText, { color: selectedTheme === 'dark' ? 'black' : colorScheme.text }]}>
                      Dark
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={[
                      styles.button,
                      selectedTheme === 'light' && styles.activeButtonLight,
                      selectedTheme !== 'light' && styles.inactiveButton,
                    ]}
                    onPress={() => handleThemeChange('light')}
                  >
                    <Text style={[styles.buttonText, { color: selectedTheme === 'light' ? 'black' : colorScheme.text }]}>
                      Light
                    </Text>
                  </TouchableOpacity>
                </Animated.View>
              </View>
            </BottomSheetScrollView>
          </BottomSheet>
        </Animated.View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  openButton: {
    margin: 20,
    padding: 15,
    backgroundColor: '#007bff',
    borderRadius: 10,
    alignItems: 'center',
  },
  openButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomSheetContainer: {
    flex: 1,
    marginBottom: "5%",
    borderBottomEndRadius: 20,
    borderBottomLeftRadius: 20,
    overflow: 'hidden',
  },
  scrollView: {
    backgroundColor: '#292842',
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
  closeButton: {
    position: 'absolute',
    top: '10%',
    right: '6%',
    zIndex: 1,
  },
  imageContainer: {
    marginBottom: '10%',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 7,
  },
  subHeaderText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  themeOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  button: {
    flex: 1,
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  activeButtonDark: {
    backgroundColor: 'whitesmoke',
  },
  activeButtonLight: {
    backgroundColor: '#dddddd', // or any other light color you prefer
  },
  switchBackground: {
    backgroundColor: 'gray',
    padding: "5%",
    borderRadius: 32,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    alignItems: 'center',
    marginBottom: 20,
  },
});

export default ThemeBottomSheet;
