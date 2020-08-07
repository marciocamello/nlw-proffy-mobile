import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import {Picker} from '@react-native-community/picker';

import PageHeader from '../../components/PageHeader';

import styles from './styles';

import { useNavigation } from '@react-navigation/native';
import TeacherItem from '../../components/TeacherItem';

function TeacherList() {

  const subjects = [
    { value: "Quimica", label: "Quimica"}
  ];

  const [subject, setSubject] = useState("Quimica");
  
  const { goBack } = useNavigation();

  return (
    <View style={styles.container}>
      <PageHeader title="Proffys disponíveis">
        <View style={styles.searchForm}>

        <Text style={styles.label}>Matéria</Text>
        <Picker
          selectedValue={subject}
          style={styles.input}
        >
          {subjects.map((subject, index) => {
            return (
              <Picker.Item 
                key={index} 
                label={subject.label} 
                value={subject.value} 
              />
            )
          })}
        </Picker>

          <TextInput 
            style={styles.input}
            placeholder="Qual a matéria?"
            placeholderTextColor="c1bccc"
          />

          <View style={styles.inputGroup}>
            <View style={styles.inputBlock}>
              <Text style={styles.label}>Dia da semana</Text>
              <TextInput 
                style={styles.input}
                placeholder="Qual o dia?"
                placeholderTextColor="c1bccc"
              />
            </View>

            <View style={styles.inputBlock}>
              <Text style={styles.label}>Horário</Text>
              <TextInput 
                style={styles.input}
                placeholder="Qual o horário?"
                placeholderTextColor="c1bccc"
              />
            </View>
          </View>
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