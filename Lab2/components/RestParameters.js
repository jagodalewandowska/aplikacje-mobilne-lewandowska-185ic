import * as React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import styles from './styles';

export default function RestParameters({navigation}) {
  const example = `
    function sum(...theArgs) {
      return theArgs.reduce((previous, current) => {
        return previous + current;
      });
    }

    console.log(sum(2, 4, 6));
    // wyjście: 12

    console.log(sum(2, 4, 6, 8));
    // wyjście: 20
  `

  const mistake = `
    function f(arg1, ...rest, arg2) { // arg2 występuje po "...rest"
      // błąd
    }
  `
  return (
    <View style={styles.rest.container}>
      <View style={styles.rest.text}>
        <Text style={styles.rest.txt}> Rest parameters pozwalają na reprezentowanie nieskończonej liczby argumentów jako tablicy.</Text>    
      </View>
      <View style={styles.rest.example}>
        <Text style={styles.rest.txt}> Przykład: </Text>
        <Text style={styles.rest.code}>{example}</Text>
        <Text style={styles.rest.txt}> "Zbierają" one wszystkie pozostałe argumenty, dlatego w zapisie muszą znajdować się na końcu. Taki zapis skutkować będzie błędem: </Text>   
        <Text style={styles.rest.code}>{mistake}</Text>
      </View>
      <View style={styles.rest.nav}>
        <TouchableOpacity style={styles.rest.home} onPress={() => navigation.push('Strona Główna')}>
            <Text style={styles.rest.text}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.rest.button} onPress={() => navigation.push('Spread Operator')}>
            <Text style={styles.rest.text}>Spread Operator</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.rest.button} onPress={() => navigation.push('UseState')}>
            <Text style={styles.rest.text}>UseState</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}