import * as React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import styles from './styles';

export default function Home({navigation}) {
  return (
    <View style={styles.home.container}>
        <View style={styles.home.panels}>
          <TouchableOpacity style={styles.home.button} onPress={() => navigation.push('Spread Operator')}>
           <Text style={styles.nav.text}>Spread Operator</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.home.button} onPress={() => navigation.push('Rest Parameters')}>
            <Text style={styles.nav.text}>Rest Parameters</Text>
          </TouchableOpacity>      
          <TouchableOpacity style={styles.home.button} onPress={() => navigation.push('UseState')}>
            <Text style={styles.nav.text}>UseState</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }