import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';
const CompareScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate("StyleSheet")}}>
        <Text style={styles.text}>see same example with StyleSheet </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate("UseAnimatedStyle")}}>
        <Text style={styles.text}>see same example with UseAnimatedStyle </Text>
      </TouchableOpacity>
    </View>
  )
}

export default CompareScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"black",
    alignItems:"center",
    justifyContent:"center",

  },
  button:{
    borderWidth:1,
    borderColor:"white",
    padding:20,
    borderRadius:15,
    marginVertical:10
  },
  text:{
    fontSize:12,
    fontWeight:"bold"
  }
})