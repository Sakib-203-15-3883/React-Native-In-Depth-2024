import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Internet = () => {
  return (
    <View style={styles.container}>
      <Text>internet</Text>
    </View>
  )
}

export default Internet

const styles = StyleSheet.create({
  container:{
    flex:1,
   backgroundColor:"green"
  }
});