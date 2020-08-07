import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import {Picker} from '@react-native-community/picker';

import PageHeader from '../../components/PageHeader';

import styles from './styles';

import { useNavigation } from '@react-navigation/native';
import TeacherItem from '../../components/TeacherItem';

function TeacherList() {

  const [subject, setSubject] = useState("Artes");

  const subjects = [
    { value: 'Artes', label: 'Artes'},
    { value: 'Biologia', label: 'Biologia'},
    { value: 'Ciências', label: 'Ciências'},
    { value: 'Educação física', label: 'Educação física'},
    { value: 'Física', label: 'Física'},
    { value: 'Geografia', label: 'Geografia'},
    { value: 'História', label: 'História'},
    { value: 'Matemática', label: 'Matemática'},
    { value: 'Português', label: 'Português'},
    { value: 'Química', label: 'Química'},
  ];

  const [day, setDay] = useState("Domingo");

  const days = [
    { value: '0', label: 'Domingo'},
    { value: '1', label: 'Segunda-feira'},
    { value: '2', label: 'Terça-feira'},
    { value: '3', label: 'Quarta-feira'},
    { value: '4', label: 'Quinta-feira'},
    { value: '5', label: 'Sexta-feira'},
    { value: '6', label: 'Sábado'},
  ];
  
  const { goBack } = useNavigation();

  return (
    <View style={styles.container}>
      <PageHeader title="Proffys disponíveis">
        <View style={styles.searchForm}>

          <Text style={styles.label}>Matéria</Text>
          <Picker
            selectedValue={subject}
            style={styles.input}
            onValueChange={(itemValue, itemIndex) => setSubject(itemValue)}
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

          <View style={styles.inputGroup}>
            <View style={styles.inputBlock}>
              <Text style={styles.label}>Dia da semana</Text>
              <Picker
                selectedValue={day}
                style={styles.input}
                onValueChange={(itemValue, itemIndex) => setDay(itemValue)}
              >
                {days.map((subject, index) => {
                  return (
                    <Picker.Item 
                      key={index} 
                      label={subject.label} 
                      value={subject.value} 
                    />
                  )
                })}
              </Picker>
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