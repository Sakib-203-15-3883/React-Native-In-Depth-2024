
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Main from '../src/Main/Main';
import Components from '../src/LearnComponents/Components';
import FlatList from '../src/FlatList/FlatList';
import VectorIcons from '../src/VectorIcons/VectorIcons';
import LearnTheme from '../src/LearnTheme/LearnTheme';
import AnimatedTabBar from '../src/AnimatedTapBar/AnimatedTabBar';
import AnimatedCard from '../src/Animation/AnimatedCard';
import Bottom from '../src/BottomSheet/BottomSheet';
import HorizontalButtonList from '../src/Animation/HorizontalButtonList';
import AnimatedCardsScrolling from '../src/Animation/AnimatedCardsScrolling';
import page1 from '../src/Animation/ShareElementTransion/page1';
import page2 from '../src/Animation/ShareElementTransion/page2';
import Screen1 from '../src/Animation/SharedElementTransitionCards/Screen1';
import Screen2 from '../src/Animation/SharedElementTransitionCards/Screen2';

import MainScreenForFirebaseAuth from "../src/LearnFirebaseAuthentication/Index";
import Screen1ForFirebaseSignUp from '../src/LearnFirebaseAuthentication/Screen1';
import Screen2ForFirebaseLogin from '../src/LearnFirebaseAuthentication/Screen2';



import VerifyCodeScreen from "../src/LearnFirebaseAuthentication/VerifyCodeScreen"
import AuthenticatedScreen from "../src/LearnFirebaseAuthentication/AuthenticatedScreen"

import FetchData from '../src/Firebase/RealTimeDataBase/FetchData';

import ComplexNavigationStructureOne from "../src/LearnNavigationStructure/ComplexNavigationStructureOne/Main"

import CBG from '../src/InterView/CBG';
import SearchScreen1 from '../src/SearchScreens/SearchScreen1';
import Horror from '../src/PracticeStackScreen/StackScreen1';
import CustomHeader from '../src/components/CustomHeader';
import CloneScreen from '../src/Tabs/CloneAirtelTabsFeature/CloneScreen';
import Onboarding1 from '../src/onboarding/Onboarding1/Onboarding1';
import Basic from '../src/Reanimated3/Basic';

import StyleSheet from '../src/Reanimated3/StyleSheet_Vs_useAnimatedStyle/StyleSheet';
import UseAnimatedStyle from '../src/Reanimated3/StyleSheet_Vs_useAnimatedStyle/UseAnimatedStyle';
import CompareScreen from '../src/Reanimated3/StyleSheet_Vs_useAnimatedStyle/CompareScreen';
import FadeAnimation from '../src/Reanimated3/FadeAnimation/FadeAnimation';
const Stack = createNativeStackNavigator();

const NativeStack = () => {

  return (

    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Main} />
      <Stack.Screen name="FadeAnimation" component={FadeAnimation} />


      <Stack.Screen name="Components" component={Components} />
      <Stack.Screen name="VectorIcons" component={VectorIcons} />
      <Stack.Screen name="LearnTheme" component={ LearnTheme} />
      <Stack.Screen name="AnimatedTabBar" component={AnimatedTabBar} />
      <Stack.Screen name="FlatList" component={FlatList} />
      <Stack.Screen name="AnimatedCard" component={AnimatedCard} />
      <Stack.Screen name="BottomSheet" component={Bottom} />
      <Stack.Screen name="HorizontalButtonList" component={HorizontalButtonList} />
      <Stack.Screen name="AnimatedCardsScrolling" component={AnimatedCardsScrolling} />
      <Stack.Screen name="page1" component={page1} />
      <Stack.Screen name="page2" component={page2} />
      <Stack.Screen name="Screen1" component={Screen1} />
      <Stack.Screen name="Screen2" component={Screen2} />
      <Stack.Screen name="MainScreenForFirebaseAuth" component={MainScreenForFirebaseAuth} />
      <Stack.Screen name="Screen1ForFirebaseSignUp" component={Screen1ForFirebaseSignUp} />
      <Stack.Screen name="Screen2ForFirebaseLogin" component={Screen2ForFirebaseLogin} />


      <Stack.Screen name="VerifyCodeScreen" component={VerifyCodeScreen} />
      <Stack.Screen name="AuthenticatedScreen" component={AuthenticatedScreen} />

      <Stack.Screen name="FetchData" component={FetchData} />

      <Stack.Screen name="ComplexNavigationStructureOne" component={ComplexNavigationStructureOne} />
      <Stack.Screen name="CBG" component={CBG} />
      <Stack.Screen name="Offers" component={CloneScreen}  />
      <Stack.Screen name="SearchScreen1" component={SearchScreen1} />
      <Stack.Screen name="Horror" component={Horror}
      
      options={({ navigation }) => ({
        headerShown: true,
        header: () => (
          <CustomHeader 
            title="Horror" 
            onBackPress={() => navigation.goBack()} // Pass back action
          />
        ),
      })}  />

<Stack.Screen name="Onboarding1" component={Onboarding1} />
<Stack.Screen name="Basic" component={Basic} />
<Stack.Screen name="CompareScreen" component={ CompareScreen} />
<Stack.Screen name="StyleSheet" component={StyleSheet} />
<Stack.Screen name="UseAnimatedStyle" component={UseAnimatedStyle} />




    </Stack.Navigator>
  );
};

export default NativeStack;


