import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Screen2 = () => {
  return (
    <View style={styles.container}>
      <Text>Screen2</Text>
    </View>
  )
}

export default Screen2

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"black"
  }
})