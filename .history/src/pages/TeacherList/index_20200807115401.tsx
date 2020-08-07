import React, { FormEvent, useEffect, useState } from 'react';
import { View, Text, Platform } from 'react-native';
import { BorderlessButton, RectButton, ScrollView } from 'react-native-gesture-handler';
import {Picker} from '@react-native-community/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Feather } from '@expo/vector-icons';

import PageHeader from '../../components/PageHeader';

import styles from './styles';

import TeacherItem, {Teacher} from '../../components/TeacherItem';
import { searchClasses } from '../../services/classes';
import AsyncStorage from '@react-native-community/async-storage';

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

  const [weekDay, setWeekDay] = useState("Domingo");

  const days = [
    { value: '0', label: 'Domingo'},
    { value: '1', label: 'Segunda-feira'},
    { value: '2', label: 'Terça-feira'},
    { value: '3', label: 'Quarta-feira'},
    { value: '4', label: 'Quinta-feira'},
    { value: '5', label: 'Sexta-feira'},
    { value: '6', label: 'Sábado'},
  ];

  const [time, setTime] = useState(new Date());
  const [show, setShow] = useState(false);

  function addZero(i: any) {
    return i < 10 ? "0" + i : i;
  }

  const timeText = `${addZero(time.getHours())}:${addZero(time.getMinutes())}`;

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || time;
    setShow(Platform.OS === 'ios');
    setTime(currentDate);
  };

  function showTimePicker() {
    setShow(true);
  };

  const [teachers, setTeachers] = useState([]);
  const [favorites, setFavorites] = useState<Number[]>([]);
  const [loading, setLoading] = useState(false);

  function loadFavorites() {
    AsyncStorage.getItem('favorites')
    .then(response => {
      if (response) {

        const favoritedTheachers = JSON.parse(response)
        const favoritedTheachersIds = favoritedTheachers.map((teacher: Teacher) => {
          return teacher.id;
        });
        setFavorites(favoritedTheachersIds);
      }
    });
  }

  useEffect(() => {
    
  }, []);

  // search teachers 
  function searchTeachers(){

    setLoading(true);

    searchClasses({
      subject,
      week_day: weekDay,
      time
    }).then(response => {

      setLoading(false);
      setTeachers(response.data.data);
      setIsFiltersVisible(false);

    }).catch(error => {

      setLoading(false);
      alert('Algum erro ocorreu');
    })
  }

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
                    selectedValue={weekDay}
                    onValueChange={(itemValue, itemIndex) => setWeekDay(itemValue as string)}
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
                    value={time}
                    mode="time"
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                  />
                )}
              </View>
            </View>

            <RectButton
              style={styles.submitButton}
              onPress={searchTeachers}
            >
              <Text style={styles.submitButtonText}>Filtrar</Text>
            </RectButton>
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
      {teachers.map((teacher: Teacher) => (
        <TeacherItem 
          key={teacher.id} 
          teacher={teacher}
          favorited={favorites.includes(teacher.id)}
        /> 
      ))} 
      </ScrollView>
    </View>
  );
};

export default TeacherList;