import React, { useState } from 'react';
import { View, Text, Platform } from 'react-native';
import { BorderlessButton, RectButton, ScrollView } from 'react-native-gesture-handler';
import {Picker} from '@react-native-community/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Feather } from '@expo/vector-icons';

import PageHeader from '../../components/PageHeader';

import styles from './styles';

import TeacherItem from '../../components/TeacherItem';

function TeacherList() {

  const [isFiltersVisible, setIsFiltersVisible] = useState(false);

  function handleToogleFiltersVisible() {
    setIsFiltersVisible(!isFiltersVisible);
  }

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

  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  function addZero(i: any) {
    return i < 10 ? "0" + i : i;
  }

  const timeText = `${addZero(date.getHours())}:${addZero(date.getMinutes())}`;

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  function showTimePicker() {
    setShow(true);
  };

  return (
    <View style={styles.container}>
      <PageHeader 
        title="Proffys disponíveis"
        headerRight={(
          <BorderlessButton
            onPress={handleToogleFiltersVisible}
          >
            <Feather name="filter" size={20} color="#FFF"/>
          </BorderlessButton>
        )}
      >
        {isFiltersVisible && (
          <View style={styles.searchForm}>
            <Text style={styles.label}>Matéria</Text>
            <View style={styles.input}>
              <Picker
                selectedValue={subject}
                onValueChange={(itemValue, itemIndex) => setSubject(itemValue as string)}
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
            </View>

            <View style={styles.inputGroup}>
              <View style={{
                width: '65%'
              }}>
                <Text style={styles.label}>Dia da semana</Text>
                <View style={styles.input}>
                  <Picker
                    selectedValue={day}
                    onValueChange={(itemValue, itemIndex) => setDay(itemValue as string)}
                  >
                    {days.map((day, index) => {
                      return (
                        <Picker.Item 
                          key={index} 
                          label={day.label} 
                          value={day.value} 
                        />
                      )
                    })}
                  </Picker>
                </View>
              </View>

              <View style={{
                width: '32%'
              }}>
                <Text style={styles.label}>Horário</Text>
                <RectButton 
                  style={styles.input}
                  onPress={showTimePicker} 
                >
                  <Text style={styles.inputText}>{timeText}</Text>
                </RectButton>
                {show && (
                  <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode="time"
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                  />
                )}
              </View>
            </View>
          </View>
        )}
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