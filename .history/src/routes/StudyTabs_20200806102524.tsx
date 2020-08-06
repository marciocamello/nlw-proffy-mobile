import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Favorites from '../pages/Favorites';
import TeacherList from '../pages/TeacherList';

const { Navigator, Screen } = createBottomTabNavigator();

function StudyTabs() {
  return (
    <Navigator 
      tabBarOptions={{
        style: {
          elevation: 0
        }
      }}
    >
      <Screen name="TeacherList" component={TeacherList}/>
      <Screen name="Favorites" component={Favorites}/>
    </Navigator>
  );
}

export default StudyTabs;