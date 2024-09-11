import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'


const InterView = () => {
  return (
    <ScrollView style={styles.container} >
      <Text style={[styles.text,styles.box]} >React Native Interview</Text>
    </ScrollView>
  )
}

export default InterView;

const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:"black",
    padding:"10%"
    
  },

  text:{
    fontSize:16,
    fontWeight:"bold",
    textAlign:"center"
  },

  box:{

    borderWidth:2,
    borderRadius:15,
    borderColor:"red",
    padding:10

  }



})