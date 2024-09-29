import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Animated } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const FirstYear = () => {
  const scrolly = useRef(new Animated.Value(0)).current;
  const ITEM_SIZE = 80 + 20 * 3;

  const handleBack = () => {
    navigation.pop(1);
  };
  const navigation = useNavigation();
  const [selectedPdfUrl, setSelectedPdfUrl] = useState(null); // State variable to hold selected PDF URL

  const courses = [
    {
      id: '1',
      code: 'DUMMY101',
      title: 'Dummy Course 1',
      department: 'Dummy Dept',
      url: '#',
      fileName: 'DummyFile1.pdf',
    },
    {
      id: '2',
      code: 'DUMMY102',
      title: 'Dummy Course 2',
      department: 'Dummy Dept',
      url: '#',
      fileName: 'DummyFile2.pdf',
    },
    // Other courses...
    {
      id: '1',
      code: 'DUMMY101',
      title: 'Dummy Course 1',
      department: 'Dummy Dept',
      url: '#',
      fileName: 'DummyFile1.pdf',
    },
    {
      id: '2',
      code: 'DUMMY102',
      title: 'Dummy Course 2',
      department: 'Dummy Dept',
      url: '#',
      fileName: 'DummyFile2.pdf',
    },
    {
      id: '1',
      code: 'DUMMY101',
      title: 'Dummy Course 1',
      department: 'Dummy Dept',
      url: '#',
      fileName: 'DummyFile1.pdf',
    },
    {
      id: '2',
      code: 'DUMMY102',
      title: 'Dummy Course 2',
      department: 'Dummy Dept',
      url: '#',
      fileName: 'DummyFile2.pdf',
    },
    {
      id: '1',
      code: 'DUMMY101',
      title: 'Dummy Course 1',
      department: 'Dummy Dept',
      url: '#',
      fileName: 'DummyFile1.pdf',
    },
    {
      id: '2',
      code: 'DUMMY102',
      title: 'Dummy Course 2',
      department: 'Dummy Dept',
      url: '#',
      fileName: 'DummyFile2.pdf',
    },
    {
      id: '1',
      code: 'DUMMY101',
      title: 'Dummy Course 1',
      department: 'Dummy Dept',
      url: '#',
      fileName: 'DummyFile1.pdf',
    },
    {
      id: '2',
      code: 'DUMMY102',
      title: 'Dummy Course 2',
      department: 'Dummy Dept',
      url: '#',
      fileName: 'DummyFile2.pdf',
    },
    {
      id: '1',
      code: 'DUMMY101',
      title: 'Dummy Course 1',
      department: 'Dummy Dept',
      url: '#',
      fileName: 'DummyFile1.pdf',
    },
    {
      id: '2',
      code: 'DUMMY102',
      title: 'Dummy Course 2',
      department: 'Dummy Dept',
      url: '#',
      fileName: 'DummyFile2.pdf',
    },
    {
      id: '1',
      code: 'DUMMY101',
      title: 'Dummy Course 1',
      department: 'Dummy Dept',
      url: '#',
      fileName: 'DummyFile1.pdf',
    },
    {
      id: '2',
      code: 'DUMMY102',
      title: 'Dummy Course 2',
      department: 'Dummy Dept',
      url: '#',
      fileName: 'DummyFile2.pdf',
    },
    {
      id: '1',
      code: 'DUMMY101',
      title: 'Dummy Course 1',
      department: 'Dummy Dept',
      url: '#',
      fileName: 'DummyFile1.pdf',
    },
    {
      id: '2',
      code: 'DUMMY102',
      title: 'Dummy Course 2',
      department: 'Dummy Dept',
      url: '#',
      fileName: 'DummyFile2.pdf',
    },
  ];

  const renderItem = ({ item, index }) => {
    const inputRange = [-1, 0, ITEM_SIZE * index, ITEM_SIZE * (index + 1)];

    const scale = scrolly.interpolate({
      inputRange,
      outputRange: [1, 1, 1, 0.8],
    });

    const opacity = scrolly.interpolate({
      inputRange,
      outputRange: [1, 1, 1, 0],
    });

    const translateY = scrolly.interpolate({
      inputRange,
      outputRange: [40, 40, 20, 0],
    });

    const rotate = scrolly.interpolate({
      inputRange,
      outputRange: ['0deg', '0deg', '0deg', '2deg'],
    });

    return (
      <Animated.View
        style={[
          styles.card,
          {
            backgroundColor: 'black', // Static black background
            borderColor: 'white', // Static white border
            transform: [{ scale }, { translateY }, { rotate }],
            opacity,
          },
        ]}
      >
        <Text style={[styles.cardText, { color: 'white' }]}>
          Course Code: {item.code}
        </Text>
        <Text style={[styles.cardText, { color: 'white' }]}>
          Course Title: {item.title}
        </Text>
        <Text style={[styles.cardText, { color: 'white' }]}>
          Department: {item.department}
        </Text>

        <TouchableOpacity
          style={[styles.downloadButton, { borderColor: 'white' }]}
          activeOpacity={0.5}
          onPress={() => {
            setSelectedPdfUrl(item.url);
            navigation.navigate('PdfYears', { pdfUrl: item.url }); // Pass the URL as a parameter
          }}
        >
          <Text style={[styles.buttonText, { color: 'white' }]}>
            View Questions pdf
          </Text>
        </TouchableOpacity>
      </Animated.View>
    );
  };

  return (
    <View style={[styles.container, { backgroundColor: 'black' }]}>
      <TouchableOpacity style={{alignItems:"center",justifyContent:"center"}} >
       <Text style={{fontSize:20,fontWeight:"bold",fontStyle:"italic", marginTop:10}}>Animated cards  scrolling  </Text>
      </TouchableOpacity>
      <Animated.FlatList
        data={courses}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.scrollViewContent}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrolly } } }],
          { useNativeDriver: true }
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  scrollViewContent: {
    paddingVertical: 5,
    marginTop:10
  },
  card: {
    borderRadius: 15,
    padding: 7,
    marginBottom: 15,
  },
  cardText: {
    fontSize: 11,
    marginBottom: 10,
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontFamily: 'Roboto-Regular',
  },
  downloadButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 12,
    alignSelf: 'flex-end',
    borderWidth: 2,
    marginTop: 2,
    alignSelf: 'flex-end',
  },
  buttonText: {
    fontSize: 12,
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontFamily: 'Roboto-Regular',
  },
});

export default FirstYear;
