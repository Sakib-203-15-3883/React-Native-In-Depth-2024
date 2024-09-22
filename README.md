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



3. Understanding how to implement Theme for the whole app  with  AsyncStorage and context api.
   
   i. First, we install react-native-async-storage/async-storage to store the user preference. It stores small data 
      as a key-value pair and it's global to the app. we use it to store the selected theme preferences.

   ii. The theme implementation involves: Using AsyncStorage to store and retrieve the selected theme. Creating a 
       ThemeContext to provide the theme state and toggle function to the components. Dynamically applying the 
       selected theme's color scheme to the UI components.

   iii. Context API: The Context API is a feature in React that allows you to pass data through the component tree 
        without having to pass props down manually at every level. It provides a way to share values like themes or 
        user preferences across components.

   iv. AsyncStorage: AsyncStorage is a simple, unencrypted, asynchronous, persistent, key-value storage system that 
       is global to the app. It is commonly used in React Native apps for storing small amounts of data locally.\
   
4. Horizontal buttons with attractive ui    
5. Animated vertical scrolling with flatlist and animated api
6. Animated button
7. Bottom sheet with gorhom/bottom-sheet
8. shared element transition between screens without using any external package
9. Firebase push notification  for all mode with FCM token
10. Firebase authentication with mobile number with safetynet 
   

   



          




    
 
