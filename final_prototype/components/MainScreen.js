import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, TextInput, Image, TouchableOpacity, Linking, FlatList } from 'react-native';

const MainScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [error, setError] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    getCurrentLocation();
  }, []);

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setCurrentLocation({ latitude, longitude });
      },
      error => {
        setError('Error fetching location. Please make sure location services are enabled.');
        console.error(error);
      }
    );
  };

  const handleSearch = () => {
    if (!searchQuery) {
      setError('Please enter a search query');
      setFilteredRestaurants([]); 
      return;
    }

    const filtered = searchRestaurants(searchQuery);
    setFilteredRestaurants(filtered);
    setError('');
  };

  const handleTextChange = (text) => {
    setSearchQuery(text);
    setError('');  

    const suggestions = getAllRestaurants()
      .filter((restaurant) => restaurant.name.toLowerCase().includes(text.toLowerCase()))
      .map((restaurant) => restaurant.name);

    setSuggestions(suggestions);
  };

  const renderSuggestion = ({ item }) => (
    <TouchableOpacity
      style={styles.suggestionItem}
      onPress={() => {
        setSearchQuery(item);
        handleSearch();
      }}
    >
      <Text>{item}</Text>
    </TouchableOpacity>
  );

  const restaurantNames = [
    { id: 1, name: 'Subway', description: 'Subway is a fast-food chain known for its customizable sandwiches and salads.', address: '2303 Andersonville Hwy, Clinton, Tennessee, 37716, United States' },
    { id: 2, name: 'McDonalds', description: 'Popular fast-food chain that has served over 99 billion people.', address: '1 McDonalds Pl, Toronto, ON M3C 3L4' },
    { id: 3, name: 'KFC', description: 'Known for its fried chicken.', address: '1441 Gardiner Lane, Louisville, Kentucky' },
  ];

  const navigateToRestaurantDetails = (restaurant) => {
    navigation.navigate('RestaurantDetails', restaurant);
  };

  const openGmail = () => {
    Linking.openURL('mailto:?subject=Subject&body=Body');
  };

  const openTwitter = () => {
    const tweetContent = encodeURIComponent('Check out this awesome restaurant guide app!');
    Linking.openURL(`https://twitter.com/intent/tweet?text=${tweetContent}`);
  };

  const openFacebook = () => {
    const facebookContent = encodeURIComponent('Check out this awesome restaurant guide app!');
    Linking.openURL(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('Link_to_your_app_or_website_here')}&quote=${facebookContent}`);
  };

  const openMap = () => {
    if (currentLocation) {
      const { latitude, longitude } = currentLocation;
      Linking.openURL(`https://www.google.com/maps?q=${latitude},${longitude}`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Personal Restaurant Guide</Text>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search for a restaurant"
          value={searchQuery}
          onChangeText={handleTextChange}
        />
        <Button
          title="Submit"
          color="#888"
          onPress={handleSearch}
        />
      </View>

      {error && (
        <Text style={styles.errorText}>{error}</Text>
      )}

      {searchQuery && filteredRestaurants.length > 0 && (
        <FlatList
          data={filteredRestaurants}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.restaurantItem}
              onPress={() => navigateToRestaurantDetails(item)}
            >
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      )}

      {searchQuery && filteredRestaurants.length === 0 && !error && (
        <Text style={styles.errorText}>No matching restaurants found</Text>
      )}

      <Text style={styles.subtitle}>Restaurant List</Text>
      {restaurantNames.map((restaurant) => (
        <TouchableOpacity
          key={restaurant.id}
          style={styles.restaurantItem}
          onPress={() => navigateToRestaurantDetails(restaurant)}
        > 
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ fontWeight: 'bold' }}>{restaurant.name}</Text>
          </View>
        </TouchableOpacity>
      ))}
      <TouchableOpacity onPress={openMap} style={styles.mapButton}>
        <Text style={styles.mapButtonText}>Find restaurants</Text>
      </TouchableOpacity>
      <View style={styles.shareContainer}>
        <Text style={styles.shareText}>Share restaurant:</Text>
        <TouchableOpacity onPress={openGmail}>
          <Image
            source={require('../assets/Gmail_Icon.png')}
            style={styles.logo}
          />
        </TouchableOpacity>
        <View style={{ width: 10 }} />
        <TouchableOpacity onPress={openTwitter}>
          <Image
            source={require('../assets/Xloggo.png')}
            style={styles.logo}
          />
        </TouchableOpacity>
        <View style={{ width: 10 }} />
        <TouchableOpacity onPress={openFacebook}>
          <Image
            source={require('../assets/facebook.jpeg')}
            style={styles.logo}
          />
        </TouchableOpacity>
      </View>
      {/* About Section */}
      <View style={styles.aboutContainer}>
        <Text style={styles.aboutTitle}>About:</Text>
        <Text>Donel Mukiza</Text>
        <Text>Karl Macayan</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginRight: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  restaurantItem: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
  },
  suggestionItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  shareContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  shareText: {
    fontSize: 18,
    marginRight: 10,
  },
  logo: {
    width: 30,
    height: 30,
  },
  aboutContainer: {
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingTop: 10,
  },
  aboutTitle: {
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  mapButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#3498db',
    borderRadius: 5,
    alignItems: 'center',
  },
  mapButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default MainScreen;




