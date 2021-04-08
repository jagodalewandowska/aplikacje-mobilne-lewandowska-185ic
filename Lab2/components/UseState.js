import * as React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import styles from './styles';

export default function UseState({navigation}) {

  const example = `
    import React, { useState } from 'react';

    function Example() {
      const [count, setCount] = useState(0);

      return (
        <div>
          <p>Kliknięto {count} razy</p>
          <button onClick={() => 
                  setCount(count + 1)}>
            Kliknij mnie
          </button>
        </div>
      );
    }
  `
  
  return (
    <View style={styles.state.container}> 
      <View style={styles.state.ctr}>
        <View style={styles.state.btn}>
          <View style={styles.state.nav}>
            <TouchableOpacity style={styles.state.button} onPress={() => navigation.push('Strona Główna')}>
                <Text style={styles.state.text}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.state.button} onPress={() => navigation.push('Spread Operator')}>
                <Text style={styles.state.text}>Spread Operator</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.state.button} onPress={() => navigation.push('Rest Parameters')}>
                <Text style={styles.state.text}>Rest Parameters</Text>
            </TouchableOpacity>  
            <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'}} style={styles.state.img} />      
          </View>
        </View>
        <View style={styles.state.about}>
          <Text style={styles.state.txt}>Hook jest specjalną funkcją, która pozwala wykorzystanie stanu i innych funkcjonalności Reacta bez użycia klas. Umożliwia to "zahaczenie" w wewnętrzne mechanizmy Reacta. UseState pozwala korzystać ze stanu w komponencie funkcyjnym. </Text>          
          <Text style={styles.state.code}>{example}</Text>            
        </View>
      </View>
    </View>
  );
}