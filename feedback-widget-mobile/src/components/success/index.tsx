import React from 'react';
import { Image, TouchableOpacity, Text, View } from 'react-native';

import successImg from '../../assets/success.png';
import { Copyright } from '../copyright';

import { styles } from './styles';

export function Success() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={successImg} />

      <Text style={styles.title}>Agradecemos o feedback</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonTitle}>Quero enviar outro</Text>
      </TouchableOpacity>

      <Copyright />
    </View>
  );
}
