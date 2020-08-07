import React from 'react';
import { View, Text } from 'react-native';
import { RectButton, ScrollView, TextInput } from 'react-native-gesture-handler';

import PageHeader from '../../components/PageHeader';

import styles from './styles';

import { useNavigation } from '@react-navigation/native';
import TeacherItem from '../../components/TeacherItem';

function TeacherList() {
  
  const { goBack } = useNavigation();

  return (
    <View style={styles.container}>
      <PageHeader title="Proffys disponíveis">
        <View style={styles.searchForm}>
          <Text style={styles.label}>
            Matéria
          </Text>
          <TextInput style={styles.input}>
            
          </TextInput>
        </View>
      </PageHeader>

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

export default TeacherList;