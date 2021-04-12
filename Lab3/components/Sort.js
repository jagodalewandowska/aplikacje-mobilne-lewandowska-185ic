import * as React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import styles from './styles';

export default function Sort({navigation}) {
  return (
    <View style={styles.sort.container}>      
      {/* Nawigacja */}
      <View style={styles.sort.nav}>
        <TouchableOpacity style={styles.sort.home} onPress={() => navigation.push('Strona Główna')}>
            <Text style={styles.sort.text}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sort.button} onPress={() => navigation.push('Lazy Loading')}>
            <Text style={styles.sort.text}>Lazy</Text>
        </TouchableOpacity>      
        <TouchableOpacity style={styles.sort.button} onPress={() => navigation.push('First')}>
            <Text style={styles.sort.text}>1st Step</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sort.button} onPress={() => navigation.push('Second')}>
            <Text style={styles.sort.text}>2nd Step</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sort.button} onPress={() => navigation.push('Third')}>
            <Text style={styles.sort.text}>3rd Step</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.sort.ctr}>
        <View style={styles.sort.about}>
          <Text style={styles.sort.txt}> Spread Operator (ang. spread syntax) pozwala na rozwinięcie iterowalnego wyrażenia (jak wyrażenie tablicowe lub ciąg znaków) - w takich miejscach, gdzie oczekiwanych jest zero lub więcej argumentów (dla wywołań funkcji) lub elementów (dla iterałów tablicowych). </Text>             
        </View>
      </View>     
    </View> 
  );
}