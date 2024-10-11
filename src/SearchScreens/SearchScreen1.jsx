import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  Keyboard,
  Dimensions,
  ImageBackground,
  Animated,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons'; 
import IconForSearch from 'react-native-vector-icons/MaterialCommunityIcons'
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const DATA = [
  {id: '1', title: 'Song One', artist: 'Artist A'},
  {id: '2', title: 'Song Two', artist: 'Artist B'},
  {id: '3', title: 'Song Three', artist: 'Artist C'},
  {id: '4', title: 'Song Four', artist: 'Artist D'},
  {id: '5', title: 'Song Five', artist: 'Artist E'},
  {id: '6', title: 'Song Six', artist: 'Artist F'},
  {id: '7', title: 'Song Seven', artist: 'Artist G'},
];

const DATA2 = [
  {id: '1', title: 'Horror', screen: 'Horror'},
  {id: '2', title: 'Podcast', screen: 'Podcast'},
  {id: '3', title: 'Science', screen: 'Science'},
  {id: '4', title: 'History', screen: 'History'},
  {id: '5', title: 'Geography', screen: 'Geography'},
  {id: '6', title: 'Fiction', screen: 'Fiction'},
];




const imageSources = [
  require('../../images/horror.jpg'),
  require('../../images/podcast.jpg'),
  require('../../images/science.jpg'),
  require('../../images/history.jpg'),
  require('../../images/geography.jpg'),
  require('../../images/fiction.jpg'),
];

const EmptySearchState = () => (
  <View style={styles.emptyStateContainer}>
    <Text style={styles.emptyStateText}>No results found</Text>
    <Text style={styles.emptyStateSubText}>Try a different search term!</Text>
  </View>
);

const SearchScreen = () => {
  const navigation = useNavigation();
  const [searchTerm, setSearchTerm] = useState('');
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [fadeAnim] = useState(new Animated.Value(1)); // Initial value set to 1 for categories visibility
  const [animationComplete, setAnimationComplete] = useState(false); // Track animation completion
  const [previousSearches, setPreviousSearches] = useState([]);



  useEffect(() => {

    const loadPreviousSearches = async () => {
      try {
        const searches = await AsyncStorage.getItem('previousSearches');
        if (searches) {
          setPreviousSearches(JSON.parse(searches).slice(0, 10));
        }
      } catch (error) {
        console.error('Failed to load previous searches:', error);
      }
    };
    loadPreviousSearches();
  }, []);





  useEffect(() => {

    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true);
        Animated.timing(fadeAnim, {
          toValue: 0, // Fade out the categories
          duration: 200,
          useNativeDriver: true,
        }).start(() => setAnimationComplete(true)); // Only set to true after fade-out is done
      },
    );


    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false);
        setAnimationComplete(false); // Reset when the keyboard hides
        Animated.timing(fadeAnim, {
          toValue: 1, // Fade back in the categories
          duration: 200,
          useNativeDriver: true,
        }).start();
      },
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);


  const handleSearch = async text => {
    setSearchTerm(text);
    if (text.length === 0) return;

    // Add the new search to the top and remove duplicates
    let newSearches = [text, ...previousSearches.filter(item => item !== text)];

    // Only keep the last 6 searches
    if (newSearches.length > 10) {
      newSearches = newSearches.slice(0, 10);
    }

    setPreviousSearches(newSearches);

    try {
      await AsyncStorage.setItem(
        'previousSearches',
        JSON.stringify(newSearches),
      );
    } catch (error) {
      console.error('Failed to save previous searches:', error);
    }
  };

  const handleClearSearch = () => {
    setSearchTerm('');
    Keyboard.dismiss();
  };
  const handleClearSearchText = () => {
    setSearchTerm('');
    
  };

  const handlePreviousSearch = search => {
    setSearchTerm(search);
    Keyboard.dismiss();
  };

  const renderPreviousSearchItem = ({item}) => (
    <TouchableOpacity
      style={styles.previousSearchItem}
      onPress={() => handlePreviousSearch(item)}>
      <Text style={styles.previousSearchText}>{item}</Text>
    </TouchableOpacity>
  );

  const handleBackPress = () => {
    setSearchTerm('');
    Keyboard.dismiss();
  };

  const filteredData = DATA.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item}>

      <View style={{flexDirection:"row", justifyContent:"space-between"}}>
      <View style={styles.titleContainer}>
        <Icon
          name="search"
          size={20}
          color="#B3B3B3"
          style={styles.suggestionIcon}
        />
        <Text style={styles.title}>{item.title}</Text>

       

      </View>
      <View>
      <IconForSearch
          name="arrow-top-left"
          size={20}
          color="#B3B3B3"
          style={styles.navigationArrow}
        />
      </View>
      </View>






      <View style={styles.shadowLine} />
    </TouchableOpacity>
  );
  
  

  const renderData2Item = ({item, index}) => (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() => {
        navigation.navigate(item.screen);
      }}>
      <ImageBackground
        source={imageSources[index % imageSources.length]}
        style={styles.backgroundImage}
        imageStyle={{borderRadius: 15}}>
        <Text style={styles.cardText}>{item.title}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );





  return (
    


    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>


        {isKeyboardVisible ? (
          <TouchableOpacity onPress={handleClearSearch}>
            <Icon
              name="arrow-back"
              size={24}
              color="#B3B3B3"
              style={styles.icon}
            />
          </TouchableOpacity>
        ) : (
          <Icon name="search" size={24} color="#B3B3B3" style={styles.icon} />
        )}


        <TextInput
          style={styles.searchInput}
          placeholder="What do you want to listen to?"
          placeholderTextColor="#B3B3B3"
          value={searchTerm}
          onChangeText={setSearchTerm} // Update search term as user types
          onSubmitEditing={() => handleSearch(searchTerm)} // Trigger search only on "Enter"
          returnKeyType="search" // Customize the "Enter" key to show "Search"
        />

{searchTerm.length > 0 && (
          <TouchableOpacity onPress={handleClearSearchText}>
            <Icon name="close" size={24} color="#B3B3B3" style={styles.icon} />
          </TouchableOpacity>
        )}
      </View>

      {searchTerm.length > 0 ? (
        filteredData.length > 0 ? (
          <FlatList
            data={filteredData}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.list}
            keyboardShouldPersistTaps="always"
          />
        ) : (
          <View style={styles.emptyStateContainer}>
            <Text style={styles.emptyStateText}>No results found</Text>
            <Text style={styles.emptyStateSubText}>
              Try a different search term!
            </Text>
          </View>
        )
      ) : isKeyboardVisible && animationComplete ? (
        <>
          <Text style={styles.guidelineText}>
            Search to listen to audio episodes
          </Text>
          <Text style={styles.previousSearchHeading}>Previous Searches</Text>
          <FlatList
            data={previousSearches}
            renderItem={renderPreviousSearchItem}
            keyExtractor={(item, index) => `${item}-${index}`}
            contentContainerStyle={styles.previousSearchList}
          />
        </>
      ) : (
        <Animated.View style={{opacity: fadeAnim, marginVertical: '20%'}}>
          <FlatList
            data={DATA2}
            renderItem={renderData2Item}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.list}
            numColumns={2}
          />
        </Animated.View>
      )}
    </SafeAreaView>





  );
};



export default SearchScreen;

const {width} = Dimensions.get('window');
const CARD_WIDTH = (width - 48) / 2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#121212',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2B2B2B',
    borderRadius: 30,
    paddingHorizontal: 15,
    marginBottom:20
    
  },
  icon: {
    marginRight: 10,
  },
  searchInput: {
    height: 50,
    flex: 1,
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'SpotifySans-Bold',
  },
  guidelineContainer: {
    position: 'absolute', // Absolute positioning to control its placement
    // top: '50%',            // Position it in the middle vertically
    left: 0,
    right: 0,
    // transform: [{ translateY: -50 }], // Move it up by half its height for perfect centering
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '70%',
  },

  guidelineText: {
    color: '#B3B3B3',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: '10%',
  },
  previousSearchHeading: {
    color: '#B3B3B3',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: '15%',
    marginBottom: '5%',
    paddingLeft: 10,
  },
  emptyStateContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyStateText: {
    color: '#B3B3B3',
    fontSize: 26,
    fontWeight: 'bold',
  },
  emptyStateSubText: {
    color: '#B3B3B3',
    fontSize: 18,
    textAlign: 'center',
  },
  list: {
    paddingBottom: 70,
  },
  item: {
    padding: 5,
    borderRadius: 16,
    marginTop: 10,
    marginBottom: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  suggestionIcon: {
    marginRight: 10,
  },
  title: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
    fontFamily: 'SpotifySans-Bold',
  },
  shadowLine: {
    borderBottomWidth: 0.4,
    borderBottomColor: '#B3B3B3',
    marginTop: 5,
  },
  cardContainer: {
    flex: 1,
    marginVertical: 16,
    marginTop: 30,
  },
  backgroundImage: {
    width: CARD_WIDTH,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardText: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    textShadowColor: '#000',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 5,
  },
  previousSearchItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#444444',
  },
  previousSearchList: {
    paddingHorizontal: 10,
  },
  navigationArrow:{
     marginLeft:"3%"
  }
});
