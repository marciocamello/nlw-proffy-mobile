import React from 'react';
import { View, Image } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import styles from './styles';

import backIcon from '../../assets/images/icons/back.png';
import logoImage from '../../assets/images/logo.png';

function PageHeader() {

  function handleGoBak() {

  }

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <BorderlessButton onPress={handleGoBak}>
          <Image source={backIcon} resizeMode="contain"/>
        </BorderlessButton>
      </View>
    </View>
  );
}

export default PageHeader;