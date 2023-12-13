import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import StarRating from './StarRating';

const RestaurantDetailsScreen = ({ route, navigation }) => {
  const { name, description, address } = route.params;

  const handleRating = (rating) => {
    console.log('Rated:', rating);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Restaurant Details</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.detailsContainer}>
          <Text style={styles.name}>{name}</Text>
          <StarRating defaultRating={3} maxRating={5} onRate={handleRating} />

          <View style={styles.infoContainer}>
            <View style={styles.descriptionContainer}>
              <Text style={styles.label}>Description:</Text>
              <Text style={styles.description}>{description}</Text>
            </View>
            <View style={styles.addressContainer}>
              <Text style={styles.label}>Address:</Text>
              <Text>{address}</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    position: 'relative',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    zIndex: 1,
  },
  buttonText: {
    fontSize: 16,
    color: 'blue',
  },
  detailsContainer: {
    flex: 1,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  descriptionContainer: {
    flex: 1,
  },
  addressContainer: {
    flex: 1,
    marginLeft: 20,
  },
  label: {
    fontWeight: 'bold',
  },
  description: {
    textAlign: 'left',
  },
});

export default RestaurantDetailsScreen;
