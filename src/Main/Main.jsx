import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useContext} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {lightColors} from '../../Utility/Colors';
import Button from '../../Utility/Button';
import {useNavigation} from '@react-navigation/native';

import {ThemeContext} from '../../Context/ThemeContext';

const Main = () => {
  const {theme, toggleTheme, colorScheme} = useContext(ThemeContext);
  const navigation = useNavigation();

  const data = [
    {
      id: '7',
      title: 'To Change Theme press Go ',
      content:"here we change the theme for whole app and learn and implement gorhom bottom sheet  ",
      screen: 'BottomSheet',
    },

    // {
    //   id: '1',
    //   title: 'Learn Components in React Native',
    //   content:
    //     'Here we would try to learn all the concepts related to components like react components, core components, native components, community components.',
    //   screen: 'Components',
    // },

    {
      id: '14',
      title: 'Complex Navigation Structure One ',
      content:
        'Complex Navigation Structure One',
      screen: 'ComplexNavigationStructureOne',
    },

    {
      id: '16',
      title: ' Airtel Clone Screen ',
      content:
        'Clone  for airtel nested top tabs  ',
      screen: 'Offers',
    },

    {
      id: '12',
      title: 'Firebase Authentication with phone number  ',
      content:
        'Firebase Authentication with phone number',
      screen: 'MainScreenForFirebaseAuth',
    },

    {
      id: '8',
      title: 'Horizontal Button List',
      content:
        'here i try to place 2 buttons horizontally as smooth and clean and change images based on button click .  ',
      screen: 'HorizontalButtonList',
    },

   

   

    // {
    //   id: '3',
    //   title: 'Learn how to apply theme in React Native',
    //   content:
    //     'we implement theme [ light/dark ] in react native app with AsyncStorage and context api for whole app.  ',
    //   screen: 'LearnTheme',
    // },


    // {
    //   id: '4',
    //   title: 'Learn how to create animated scrollable masked TabBar',
    //   content:
    //     'Here i would try to learn how to create animated scrollable masked TabBar with react-native-tab-view and react-native-reanimated .',
    //   screen: 'AnimatedTabBar',
    // },

    // {
    //   id: '5',
    //   title: 'FlatList',
    //   content:
    //     'FlatList .',
    //   screen: 'FlatList',
    // },

    // {
    //   id: '6',
    //   title: 'Animated Card',
    //   content:
    //     'Animated Card',
    //   screen: 'AnimatedCard',
    // },
   
    {
      id: '9',
      title: 'Animated Cards Scrolling',
      content:
        'Animated Cards Scrolling .  ',
      screen: 'AnimatedCardsScrolling',
    },
    {
      id: '10',
      title: 'Shared Element Transition for cards that contain image  ',
      content:
        'Share Element Transition   ',
      screen: 'page1',
    },

    {
      id: '11',
      title: 'Shared Element Transition for cards that have no image in card ',
      content:
        'Share Element Transition  ',
      screen: 'Screen1',
    },

    {
      id: '20',
      title: 'Animation  ',
      content:
        'Animation while render card  data   ',
      screen: 'FadeAnimation',
    },
    
    // {
    //   id: '15',
    //   title: 'InterView from CBG ',
    //   content:
    //     'InterView from CBG',
    //   screen: 'CBG',
    // },
    
    {
      id: '17',
      title: 'Onboarding 1',
      content:
        'Onboarding screen',
      screen: 'Onboarding1',
    },

    {
      id: '18',
      title: 'Basic reanimated 3',
      content:
        'Basic reanimated 3',
      screen: 'Basic',
    },
    {
      id: '19',
      title: 'StyleSheet vs useAnimationStyle ',
      content:
        'StyleSheet[change style with state change ] vs useAnimationStyle from reanimated3 [ change style dynamically on UI thread ]',
      screen: 'CompareScreen',
    },
    
   
    // {
    //   id: '13',
    //   title: 'Fetch Data from firebase real time database ',
    //   content:
    //     'Fetch Data from firebase real time database',
    //   screen: 'FetchData',
    // },
    
    
    {
      id: '2',
      title: 'Learn react-native-vector-icons',
      content:
        'Here we would try to learn  the concepts related to VectorIcons and use different types of icons in react native project  ',
      screen: 'VectorIcons',
    },
    

    

   
  ];

  const handleOnPress = screen => {
    navigation.navigate(screen);
  };

  const renderItem = ({item}) => {
    
    return (
    


    <View style={[styles.card, {backgroundColor: colorScheme.background}]}>

      <Text style={[styles.title, {color: colorScheme.text}]}>
        {item.title}
      </Text>

      <Text style={[styles.content, {color: colorScheme.text}]}>
        {item.content}
      </Text>


      <View style={styles.buttonPosition}>
        <Button title="Go" onPress={() => handleOnPress(item.screen)} />
      </View>


    </View>
  );

}

  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: colorScheme.background}]}>
      {/* <View
        style={{
          marginVertical:"5%",
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: colorScheme.background,
        }}>

        <Button
          title="Toggle Theme"
          onPress={toggleTheme}
          color={colorScheme.buttonBackground}
        />
      </View> */}

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  // text: {
  //   color: lightColors.text,
  // },
  card: {
    // backgroundColor: '#ffffff',
    // backgroundColor:colorScheme.background,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: '5%',
    // borderWidth:1,
    borderColor:"green"
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
    // color: lightColors.text,
  },
  content: {
    fontSize: 12,
    // color: lightColors.text,
  },

  buttonPosition: {
    marginTop: '5%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
