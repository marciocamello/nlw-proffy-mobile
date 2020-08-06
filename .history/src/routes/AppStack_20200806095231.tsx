import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import Landing from '../pages/Landing';

function AppStack() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="landing" component={Landing} />
      </Navigator>
    </NavigationContainer>
  );
}

export default AppStack;