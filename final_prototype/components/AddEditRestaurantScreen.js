import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const AddEditRestaurantScreen = () => {
  
  const [restaurantName, setRestaurantName] = useState('');
  const [restaurantAddress, setRestaurantAddress] = useState('');
  const [restaurantPhone, setRestaurantPhone] = useState('');
  const [restaurantDescription, setRestaurantDescription] = useState('');
  const [restaurantTags, setRestaurantTags] = useState('');

  
  const handleSaveRestaurant = () => {
    
    if (!restaurantName || !restaurantAddress || !restaurantPhone) {
      Alert.alert('Error', 'Please fill in all required fields');
      return;
    }

    
    console.log('Restaurant details saved:', {
      name: restaurantName,
      address: restaurantAddress,
      phone: restaurantPhone,
      description: restaurantDescription,
      tags: restaurantTags,
    });

    setRestaurantName('');
    setRestaurantAddress('');
    setRestaurantPhone('');
    setRestaurantDescription('');
    setRestaurantTags('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add/Edit Restaurant</Text>
      <TextInput
        style={styles.input}
        placeholder="Restaurant Name *"
        value={restaurantName}
        onChangeText={text => setRestaurantName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Address *"
        value={restaurantAddress}
        onChangeText={text => setRestaurantAddress(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number *"
        value={restaurantPhone}
        onChangeText={text => setRestaurantPhone(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={restaurantDescription}
        onChangeText={text => setRestaurantDescription(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Tags (e.g., Italian, Vegetarian)"
        value={restaurantTags}
        onChangeText={text => setRestaurantTags(text)}
      />
      <Button
        title="Save Restaurant"
        onPress={handleSaveRestaurant}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});

export default AddEditRestaurantScreen;
