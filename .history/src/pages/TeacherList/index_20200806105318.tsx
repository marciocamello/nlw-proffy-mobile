import React from 'react';
import { View, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';

import { useNavigation } from '@react-navigation/native';
import PageHeader from '../../components/PageHeader';

function TeacherList() {
  
  const { goBack } = useNavigation();

  return (
    <View style={styles.container}>
      <PageHeader />
    </View>
  );
};

export default TeacherList;