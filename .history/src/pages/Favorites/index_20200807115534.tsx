import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import PageHeader from '../../components/PageHeader';

import styles from './styles';

import { useNavigation } from '@react-navigation/native';
import TeacherItem from '../../components/TeacherItem';

function Favorites() {
  
  const [favorites, setFavorites] = useState<Number[]>([]);

  return (
    <View style={styles.container}>
      <PageHeader title="Meus proffys favoritos"/>

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16
        }}
      >
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </ScrollView>
    </View>
  );
};

export default Favorites;