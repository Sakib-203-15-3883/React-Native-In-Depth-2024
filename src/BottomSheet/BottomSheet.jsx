import React, { useCallback, useRef, useMemo, useContext, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import { ThemeContext } from '../../Context/ThemeContext';


const ThemeBottomSheet = () => {

  const { colorScheme, toggleTheme } = useContext(ThemeContext);

  const sheetRef = useRef(null);
  const snapPoints = useMemo(() => ['55%', '60%', '80%'], []);
  const [isSheetVisible, setIsSheetVisible] = useState(false);

  const handleSheetChange = useCallback((index) => {
    console.log('handleSheetChange', index);
  }, []);

  const handleThemeChange = (theme) => {
    console.log('Selected theme:', theme);
    toggleTheme(theme);
  };

  const handleClose = () => {
    setIsSheetVisible(false);
  };

  const toggleBottomSheet = () => {
    if (!isSheetVisible) {
      sheetRef.current?.snapToIndex(0); // Open the bottom sheet
      setIsSheetVisible(true);
    } else {
      handleClose(); // Close the bottom sheet
    }
  };

  const handleClosePress = useCallback(() => {
    handleClose();
    sheetRef.current?.close();
  }, []);
  

  return (
    <View style={[styles.container, { backgroundColor: colorScheme.background }]}>

      <TouchableOpacity style={styles.openButton} onPress={toggleBottomSheet}>
        <Text style={[styles.openButtonText, { color: colorScheme.buttonText }]}>Open Theme Selector</Text>
      </TouchableOpacity>

      {isSheetVisible && (
        <View style={styles.bottomSheetContainer}>
          <TouchableOpacity style={styles.closeButton} onPress={handleClosePress}>
            <AntDesign name="close" size={37} color={colorScheme.text} />
          </TouchableOpacity>
          <BottomSheet
            ref={sheetRef}
            index={0}
            snapPoints={snapPoints}
            onChange={handleSheetChange}
            onClose={handleClose}
          >
            <BottomSheetScrollView style={styles.scrollView}>
              <View style={styles.contentContainer}>
                <View style={{ alignItems: 'center', marginTop: 20 }}>
                  <Entypo name="light-up" size={80} color="red" />
                  <Text style={styles.headerText}>Choose a Theme</Text>
                  <Text style={styles.subHeaderText}>Customize your interface</Text>
                </View>
                <View style={styles.themeOptions}>
                  <TouchableOpacity
                    style={styles.themeButton}
                    onPress={() => handleThemeChange('dark')}
                  >
                    <Text style={{ color: 'white' }}>Dark</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.themeButton}
                    onPress={() => handleThemeChange('light')}
                  >
                    <Text style={{ color: 'white' }}>Light</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </BottomSheetScrollView>
          </BottomSheet>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  openButton: {
    margin: 20,
    marginTop: "10%",
    padding: 15,
    backgroundColor: '#007bff',
    borderRadius: 10,
    alignItems: 'center',
  },
  openButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomSheetContainer: {
    flex: 1,
    marginBottom: '5%',
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
    paddingBottom: 40,
  },
  closeButton: {
    position: 'absolute',
    top: "10%",
    right: "6%",
    zIndex: 1,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'white',
  },
  subHeaderText: {
    fontSize: 14,
    marginTop: 5,
    color: 'white',
  },
  themeOptions: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  themeButton: {
    borderRadius: 35,
    borderWidth: 1,
    borderColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
});

export default ThemeBottomSheet;
