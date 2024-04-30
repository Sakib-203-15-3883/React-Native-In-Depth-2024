import { StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { lightColors } from '../../Utility/Colors';
import Button from '../../Utility/Button';
import { useNavigation } from '@react-navigation/native';

const Main = () => {
  const navigation = useNavigation();

  const data = [
    {
      id: '1',
      title: 'Learn Components in React Native',
      content:
        'Here we would try to learn all the concepts related to components like react components, core components, native components, community components.',
        screen: 'Components',
    },

    {
      id: '2',
      title: 'Learn react-native-vector-icons',
      content:
        'Here we would try to learn  the concepts related to VectorIcons and use different types of icons in react native project  ',
        screen: 'VectorIcons',
    },

    {
      id: '3',
      title: 'Learn Components in React Native',
      content:
        'Here i would try to learn all the concepts related to components like react components, core components, native components, community components.',
        screen: 'FlatList',
    },

    {
      id: '4',
      title: 'Learn Components in React Native',
      content:
        'Here i would try to learn all the concepts related to components like react components, core components, native components, community components.',
        screen: 'FlatList',
    },
    
    
  ];

  const handleOnPress = (screen)=>{
    navigation.navigate(screen);

  }


  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.content}>{item.content}</Text>
      <View style={styles.buttonPosition}>
        <Button title="Go" onPress={() => handleOnPress(item.screen)} />
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>

<FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  )
}

export default Main

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginHorizontal:"1%",
    marginVertical:"1%"
  },
  text:{
    color:lightColors.text
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 20,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop:"5%",
   
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color:lightColors.text
  },
  content: {
    fontSize: 16,
    color:lightColors.text
  },

  buttonPosition:{
    marginTop:"5%",
    alignItems:"center",
    justifyContent:"center"
  }
})