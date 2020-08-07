import React from 'react';
import { View, Image, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import styles from './styles';

import backIcon from '../../assets/images/icons/back.png';
import logoImage from '../../assets/images/logo.png';
import { useNavigation } from '@react-navigation/native';

interface TeacherItemProps{
  title: string;
}

const TeacherItem: React.FC<TeacherItemProps> = () => {
  const { navigate } = useNavigation();

  function handleGoBak() {
    navigate('Landing ');
  }

  return (
    <View style={styles.container}>
      
    </View>
  );
}

export default TeacherItem;