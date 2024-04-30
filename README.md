1. Understanding the concepts of components in react native

      React Native uses react as a UI library and we know that react application is a tree of components where the root component 
      brings everything together. 

      i. React components : 

      It's a reusable piece of code that represents a small part of the user interface.  It's a JavaScript function that returns jsx 
      which is used to describe how the UI should look like.

      ii. React Native Components :

       React Native components are essential building blocks used to create user interfaces [ contents ] for mobile applications. 
       There are 3 types of react native components.

       i. Core Components :
   
             It's a pre-built UI component provided by react native . it,s platform independent,s , means it,s works for Android and 
             ios .  it,s highly customizable using props . 
              There are a few core components : 
              <View>, <Text>, <Image>, <ScrollView>, <TextInput>, etc.

      II. Native Components:
   
       UI elements that are specific to the platform. written in the respective platform's native language (Objective-C/Swift for iOS, 
       Java/Kotlin for Android).We can create custom native components and expose them to React Native using a process called bridging.

       Example of device-specific features :
       Camera Access, GPS and Location Services,Biometric Authentication, Device Sensors

      iii. Community components:

         
         Community components in React Native refer to third-party libraries or packages created and maintained by the developer 
         community.
         UI Components . [ react-native-elements, react-native-paper ]
         Navigation [ react-navigation ]
         State Management [ Redux ,  MobX ]
         Networking and APIs [ axios ,react-native-fetch-blob]
         Animations [ react-native-reanimated , lottie-react-native ]
         Maps and Location Services [ react-native-maps , react-native-geolocation-service ]
         Push Notifications  [ react-native-push-notification ]

     
#Any component that renders other components is a parent component. rendered components known as child components 
#Most of React Native’s Core Components can be customized with props



2.Understanding how to implement  React native vector icons in  react native project

  i.First we need to install and configure the React native vector icons package from docs. 
  ii.  import the  desire icon 
  iii. then  use it in app  UI . 



          




    
 
