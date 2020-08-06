import React from 'react';
import { View, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';

import { useNavigation } from '@react-navigation/native';

function TeacherList() {
  
  const { goBack } = useNavigation();

  return (
    <View style={styles.container}>
    </View>
  );
};

export default TeacherList;