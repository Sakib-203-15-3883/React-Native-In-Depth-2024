import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import auth from '@react-native-firebase/auth';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const Index = () => {
  const navigation = useNavigation();

  

  return (
    <View style={styles.container} >


      <TouchableOpacity 

      style={styles.button}
      
      onPress={()=> {
        // navigation.navigate('Screen1ForFirebaseSignUp')
        navigation.navigate('Screen1ForFirebaseSignUp')
      }}>
      <Text>Click here to continue </Text>
      </TouchableOpacity>

      

    </View>
  )
}

export default Index

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"black",
    alignItems:"center",
    justifyContent:"center"

  },
  button:{

    borderWidth:1,
    borderColor:"white",
    borderRadius:10,
    padding:10

  }
})