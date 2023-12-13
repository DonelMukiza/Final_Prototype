import React from 'react';
import { View } from 'react-native';
import StarRating from './StarRating'; 

const YourScreen = () => {
  const handleRating = (newRating) => {
    
    console.log('New rating:', newRating);
  };

  return (
    <View>
      <StarRating defaultRating={3} maxRating={5} onRate={handleRating} />
    </View>
  );
};

export default YourScreen;
