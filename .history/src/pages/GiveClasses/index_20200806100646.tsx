import React from 'react';
import { View, ImageBackground } from 'react-native';

import styles from './styles';

import givClassesBGImage from '../../assets/images/background.png';

function GiveClasses() {
  return (
    <View style={styles.container}>
      <ImageBackground source={givClassesBGImage}>

      </ImageBackground>
    </View>
  );
}

export default GiveClasses;