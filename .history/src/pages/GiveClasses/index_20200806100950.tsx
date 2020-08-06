import React from 'react';
import { View, ImageBackground, Text } from 'react-native';

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
        <Text style={styles.title}>Quer ser um Proffy?</Text>
        <Text style={styles.description}>
          Para começar, voce precisa se cadastrar como professor na nossa plataforma web.
        </Text>
      </ImageBackground>
    </View>
  );
}

export default GiveClasses;