import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Minutes = () => {
  return (
    <View style={styles.container}>
      <Text>Minutes</Text>
    </View>
  )
}

export default Minutes

const styles = StyleSheet.create({
  container:{
    flex:1,
   backgroundColor:"blue"
  }
});