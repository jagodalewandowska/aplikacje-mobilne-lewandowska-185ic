import * as React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import styles from './styles';

export default function SpreadOperator({navigation}) {
  const example = `
    function sum(x, y, z) {
      return x + y + z;
    }

    const num = [1, 2, 3];

    console.log(sum(...num));
    // wyjście: 6

    console.log(sum.apply(null, num));
    // wyjście: 6
  `

  const calls = `
    myFunction(...items);
  `

  const arr = `
    [...iterableObj, '4', 'five', 6];
  `

  const key = `
    let objClone = { ...obj }; // Przekazuje wszystkie pary key:value
  `
  return (
    <View style={styles.spread.container}>      
      {/* Nawigacja */}
      <View style={styles.spread.nav}>
        <TouchableOpacity style={styles.spread.home} onPress={() => navigation.push('Strona Główna')}>
            <Text style={styles.spread.text}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.spread.button} onPress={() => navigation.push('Rest Parameters')}>
            <Text style={styles.spread.text}>Rest Parameters</Text>
        </TouchableOpacity>      
        <TouchableOpacity style={styles.spread.button} onPress={() => navigation.push('UseState')}>
            <Text style={styles.spread.text}>UseState</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.spread.ctr}>
        <View style={styles.spread.about}>
          <Text style={styles.spread.txt}> Spread Operator (ang. spread syntax) pozwala na rozwinięcie iterowalnego wyrażenia (jak wyrażenie tablicowe lub ciąg znaków) - w takich miejscach, gdzie oczekiwanych jest zero lub więcej argumentów (dla wywołań funkcji) lub elementów (dla iterałów tablicowych). </Text>             
        </View>
        <View style={styles.spread.about}>
          <Text style={styles.spread.txt}> Przykład: </Text>
          <Text style={styles.rest.code}>{example}</Text>          
        </View>    
        <View style={styles.spread.about}>
          <Text style={styles.spread.txt}> Przekazywanie wszystkich elementów items jako argumenty dla funkcji myFunction: </Text>
          <Text style={styles.rest.code}>{calls}</Text>   
        </View> 
        <View style={styles.spread.about}>
          <Text style={styles.spread.txt}> Łączenie dwóch tablic poprzez wstawianie wszystkich elementów z ...items: </Text>
          <Text style={styles.rest.code}>{arr}</Text>           
        </View>    
        <View>
          <Text style={styles.spread.txt}> Spread operator pozwala również na rozwinięcie wyrażeń obiektowych w miejscach, gdzie oczekiwanych jest zero lub więcej par klucz-wartość (dla literałów obiektowych). Przekazywanie par key:value z obiektu: </Text>
          <Text style={styles.rest.code}>{key}</Text>    
        </View>
      </View>     
    </View>    
  );
}