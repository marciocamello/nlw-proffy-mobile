import { StatusBar } from 'expo-status-bar';
import React from 'react';

// page components
import Landing from './src/pages/Landing';

import { AppLoading } from 'expo';

import {
  useFonts,
  Archivo_400Regular, 
  Archivo_700Bold
} from '@expo-google-fonts/archivo';

import {
  Poppins_400Regular,
  Poppins_600SemiBold
} from '@expo-google-fonts/poppins';

export default function App() {

  let [fontsLoaded] = useFonts({
    Archivo_400Regular, 
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold
  });

  if(!fontsLoaded){
    return <AppLoading></AppLoading>
  }else{
    
  }

  return (
    <React.Fragment>
      <Landing />
      <StatusBar style="auto" />
    </React.Fragment>
  );
}