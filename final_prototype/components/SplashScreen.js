import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const splashTimeout = setTimeout(() => {
      navigation.replace('Home'); // Replace SplashScreen with MainScreen after the delay
    }, 2000); // Change the delay time as needed

    return () => clearTimeout(splashTimeout);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/Loggo.png')}
        style={styles.logo}
        resizeMode="contain" 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  logo: {
    width: 400, 
    height: 400, 
  },
});

export default SplashScreen;