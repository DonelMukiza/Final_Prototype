// RestaurantLocationScreen.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const RestaurantLocationScreen = ({ route }) => {
  const { restaurant } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{restaurant.name}</Text>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: restaurant.latitude,
          longitude: restaurant.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{
            latitude: restaurant.latitude,
            longitude: restaurant.longitude,
          }}
          title={restaurant.name}
          description={restaurant.address}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default RestaurantLocationScreen;
