import * as React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import styles from './styles';

export default function RestParameters({navigation}) {
  return (
    <View style={styles.nav.container}>
      <TouchableOpacity style={styles.nav.home} onPress={() => navigation.push('Home')}>
          <Text style={styles.nav.text}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.nav.button} onPress={() => navigation.push('Spread Operator')}>
          <Text style={styles.nav.text}>Spread Operator</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.nav.button} onPress={() => navigation.push('UseState')}>
          <Text style={styles.nav.text}>UseState</Text>
      </TouchableOpacity>
    </View>
  );
}