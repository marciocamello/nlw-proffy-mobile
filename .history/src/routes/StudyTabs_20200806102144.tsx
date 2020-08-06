import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Favorites from '../pages/Favorites';
import TeacherList from '../pages/TeacherList';

const { Navigator, Screen } = createBottomTabNavigator();

function StudyTabs() {
  <Navigator>
    <Screen name="TeacherList" component={TeacherList}/>
    <Screen name="Favorites" component={Favorites}/>
  </Navigator>
}

export default StudyTabs;