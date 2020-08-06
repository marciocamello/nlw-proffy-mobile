import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from '../pages/Landing';

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{
        
      }}>
        <Screen name="landing" component={Landing} />
      </Navigator>
    </NavigationContainer>
  );
}

export default AppStack;