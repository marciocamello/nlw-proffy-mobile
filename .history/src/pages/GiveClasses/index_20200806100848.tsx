import React from 'react';
import { View, ImageBackground } from 'react-native';

import styles from './styles';

import givClassesBGImage from '../../assets/images/give-classes-background.png';

function GiveClasses() {
  return (
    <View style={styles.container}>
      <ImageBackground 
        resizeMode="contain"
        source={givClassesBGImage} 
        style={styles.content}
      >
        
      </ImageBackground>
    </View>
  );
}

export default GiveClasses;