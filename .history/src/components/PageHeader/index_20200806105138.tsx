import React from 'react';
import { View } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import styles from './styles';

function PageHeader() {

  function handleGoBak() {

  }

  return (
    <View style={styles.container}>
      <View sttyle={styles.topBar}>
        <BorderlessButton onPress={handleGoBak}>

        </BorderlessButton>
      </View>
    </View>
  );
}

export default PageHeader;