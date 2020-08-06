import { StatusBar } from 'expo-status-bar';
import React from 'react';

import Landing from './src/pages/Landing';

export default function App() {
  return (
    <React.Fragment>
      <Landing />
      <StatusBar style="auto" />
    </React.Fragment>
  );
}