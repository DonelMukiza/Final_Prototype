// Donel Mukiza and Karl Macayan
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './components/MainScreen';
import SplashScreen from './components/SplashScreen';
import AddEditRestaurantScreen from './components/AddEditRestaurantScreen';
import RestaurantDetailsScreen from './components/RestaurantDetailsScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen" headerMode="none">
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen
          name="Home"
          component={MainScreen}
          options={{
            title: 'Personal Restaurant Guide',
          }}
        />
        <Stack.Screen
          name="AddEditRestaurant"
          component={AddEditRestaurantScreen}
          options={{
            title: 'Add/Edit Restaurant',
          }}
        />
        <Stack.Screen
          name="RestaurantDetails"
          component={RestaurantDetailsScreen}
          options={{
            title: 'Restaurant Details',
          }}
        />

        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
