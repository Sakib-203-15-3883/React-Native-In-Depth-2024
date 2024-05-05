import { StyleSheet, Text, View , ScrollView } from 'react-native'
import React,{useContext} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemeContext } from '../../Context/ThemeContext';
const Components = () => {

  const { colorScheme} = useContext(ThemeContext);
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={[styles.container,{backgroundColor:colorScheme.background}]}>
      <Text style={[styles.title,{color:colorScheme.text}]}>Understanding the concepts of components in React Native</Text>
      <Text style={[styles.paragraph,{color:colorScheme.text}]}>
        React Native uses React as a UI library, and we know that a React application is a tree of components where the
        root component brings everything together.
      </Text>
      <Text style={[styles.subtitle,{color:colorScheme.text}]}>i. React components :</Text>
      <Text style={[styles.paragraph,{color:colorScheme.text}]}>
        It's a reusable piece of code that represents a small part of the user interface. It's a JavaScript function
        that returns JSX, which is used to describe how the UI should look like.
      </Text>
      <Text style={[styles.subtitle,{color:colorScheme.text}]}>ii. React Native Components :</Text>
      <Text style={[styles.paragraph,{color:colorScheme.text}]}>
        React Native components are essential building blocks used to create user interfaces for mobile applications.
        There are 3 types of React Native components.
      </Text>
      <Text style={[styles.subsubtitle,{color:colorScheme.text}]}>i. Core Components :</Text>
      <Text style={[styles.paragraph,{color:colorScheme.text}]}>
        It's a pre-built UI component provided by React Native. It's platform-independent, which means it works for
        Android and iOS. It's highly customizable using props. There are a few core components: View, Text, Image,
        ScrollView, TextInput, etc.
      </Text>
      <Text style={[styles.subsubtitle,{color:colorScheme.text}]}>ii. Native Components :</Text>
      <Text style={[styles.paragraph,{color:colorScheme.text}]}>
        UI elements that are specific to the platform. Written in the respective platform's native language (Objective-C/Swift
        for iOS, Java/Kotlin for Android). We can create custom native components and expose them to React Native using
        a process called bridging.
      </Text>
      <Text style={[styles.subsubtitle,{color:colorScheme.text}]}>iii. Community components :</Text>
      <Text style={[styles.paragraph,{color:colorScheme.text}]}>
        Community components in React Native refer to third-party libraries or packages created and maintained by the
        developer community. UI Components (react-native-elements, react-native-paper), Navigation
        (react-navigation), State Management (Redux, MobX), Networking and APIs (axios, react-native-fetch-blob),
        Animations (react-native-reanimated, lottie-react-native), Maps and Location Services (react-native-maps,
        react-native-geolocation-service), Push Notifications (react-native-push-notification)
      </Text>
      <Text style={[styles.notes,{color:colorScheme.text}]}>
        Any component that renders other components is a parent component. Rendered components known as child components.
        Most of React Native’s Core Components can be customized with props.
      </Text>
    </ScrollView>
    </SafeAreaView>
  )
}

export default Components

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    // color:"black"
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    // color:"black"
  },
  subsubtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 15,
    // color:"black"
  },
  paragraph: {
    fontSize: 16,
    marginTop: 5,
    marginBottom: 10,
    // color:"black"
  },
  notes: {
    fontSize: 14,
    fontStyle: 'italic',
    marginTop: 20,
    // color:"black"
  },
});