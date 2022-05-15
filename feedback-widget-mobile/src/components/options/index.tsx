import React from 'react';
import { Text, View } from 'react-native';

import { Copyright } from '../copyright';
import { Option } from '../option';

import { feedbackTypes } from '../../utils/feedbackTypes';

import { styles } from './styles';

export function Options() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Deixe seu feedback</Text>

      <View style={styles.options}>
        {Object.entries(feedbackTypes).map(([key, value]) => (
          <Option key={key} image={value.image} title={value.title} />
        ))}
      </View>

      <Copyright />
    </View>
  );
}
