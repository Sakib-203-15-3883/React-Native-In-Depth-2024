import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React, { useState } from 'react';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Basic = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [showList, setShowList] = useState(false);
  const width = useSharedValue(140);

  const handlePress = () => {
    width.value = withSpring(isExpanded ? width.value + 10 : width.value - 10);
    setIsExpanded(!isExpanded);
    setShowList(!showList); 
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: width.value,
    };
  });

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>Button animation</Text>
      <TouchableOpacity onPress={handlePress}>

        <Animated.View style={[styles.animatedView, animatedStyle]}>
          <Text style={styles.animatedText}>
            {showList ? 'Hide List' : 'Show List'}
          </Text>
        </Animated.View>
      </TouchableOpacity>
      {showList && (
        <View style={styles.listContainer}>
          <Text style={styles.listItem}>Item 1</Text>
          <Text style={styles.listItem}>Item 2</Text>
          <Text style={styles.listItem}>Item 3</Text>
          <Text style={styles.listItem}>Item 4</Text>
          <Text style={styles.listItem}>Item 5</Text>
        </View>
      )}
    </ScrollView>
  );
};

export default Basic;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 25,
    marginHorizontal: '15%',
    color: 'white',
  },
  animatedView: {
    height: 50,
    backgroundColor: 'red',
    marginHorizontal: '25%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  animatedText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  listContainer: {
    marginTop: 20,
    marginHorizontal: '10%',
  },
  listItem: {
    fontSize: 18,
    color: 'white',
    marginVertical: 5,
  },
});
