import React from 'react';
import { View, Image, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import styles from './styles';

import backIcon from '../../assets/images/icons/back.png';
import logoImage from '../../assets/images/logo.png';
import { useNavigation } from '@react-navigation/native';

interface TeacherItemProps{
  title: string;
}

const TeacherItem = () => {
  const { navigate } = useNavigation();

  function handleGoBak() {
    navigate('Landing ');
  }

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{uri: 'https://github.com/marciocamello.png'}}
        />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>Marcio Camello</Text>
          <Text style={styles.subject}>Química</Text>
        </View>

        <Text style={styles.bio}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non orci finibus ligula feugiat aliquet. Nullam sed tempor sapien, cursus tristique elit. In fringilla purus nunc, quis vehicula metus consequat id. Suspendisse semper elit ligula, ut laoreet lacus dignissim vel. Etiam auctor pulvinar diam, vel lacinia dui mattis vitae. Ut ante magna, eleifend posuere diam at, vestibulum efficitur leo. Aliquam gravida, neque eget viverra aliquet, turpis tortor varius quam, vitae rhoncus erat sapien non ligula. Nulla a leo finibus, fermentum erat ut, pretium orci. In erat turpis, placerat eu diam quis, volutpat consequat enim. Praesent egestas sodales mi.
        </Text>
      </View>
    </View>
  );
}

export default TeacherItem;