import React, { useState } from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import PageHeader from '../../components/PageHeader';
import AsyncStorage from '@react-native-community/async-storage';

import styles from './styles';

import TeacherItem from '../../components/TeacherItem';

function Favorites() {
  
  const [favorites, setFavorites] = useState([]);
  
  function loadFavorites() {
    AsyncStorage.getItem('favorites')
    .then(response => {
      if (response) {

        const favoritedTheachers = JSON.parse(response)
        setFavorites(favoritedTheachers);
      }
    });
  }

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
        
      </ScrollView>
    </View>
  );
};

export default Favorites;