import React from 'react';
import { View, Image, Text } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';

import styles from './styles';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';

import { useNavigation } from '@react-navigation/native';

interface TeacherItemProps{
  title: string;
}

const TeacherItem = () => {
  const { navigate } = useNavigation();

  function handleGoBak() {
    navigate('Landing ');
  }

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{uri: 'https://github.com/marciocamello.png'}}
        />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>Marcio Camello</Text>
          <Text style={styles.subject}>Química</Text>
        </View>
      </View>

      <Text style={styles.bio}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non orci finibus ligula feugiat aliquet. 
        {'\n'} {'\n'}
        Nullam sed tempor sapien, cursus tristique elit. In fringilla purus nunc, quis vehicula metus consequat id. 
      </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preçõ/hora {'   '}
          <Text style={styles.pricevalue}>R$ 20,00</Text>
        </Text>
      </View>

      <View style={styles.buttonsContaier}>
        <RectButton style={styles.favoriteButton}>

        </RectButton>
      </View>
    </View>
  );
}

export default TeacherItem;