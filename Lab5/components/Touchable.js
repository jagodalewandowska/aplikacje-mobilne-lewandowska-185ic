import React, { useState, useEffect, Component }  from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

export default function(props) {
  const navigation = useNavigation();
  return <Swipeable {...props} navigation = {navigation} />;
}

export class Swipeable extends Component {  
  constructor(props) {
    super(props);
  }
  render(){
    const { navigation } = this.props;   
    return (
      <View style={styles.con.container}> 
        {/* Nawigacja */}
        <View style={styles.con.nav}>   
          <TouchableOpacity style={styles.con.home} onPress={() => navigation.push('Strona Główna')}>
              <Text style={styles.con.text}>Home</Text>
          </TouchableOpacity>    
          <TouchableOpacity style={styles.con.button} onPress={() => navigation.push('First')}>
              <Text style={styles.con.text}>First</Text>              
          </TouchableOpacity>  
          <TouchableOpacity style={styles.con.button} onPress={() => navigation.push('Second')}>
              <Text style={styles.con.text}>Second</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.con.button} onPress={() => navigation.push('Swipeable')}>
              <Text style={styles.con.text}>Swipeable</Text>
          </TouchableOpacity> 
        </View>   
        <View style={styles.body.container}>
          <View style={styles.body.ex}>
          <Text style={styles.body.txt}>Wybierz datę, która następnie zostanie wyświetlona w powiadomieniu.</Text>
            
          </View>
        </View>    
      </View>      
    );
  }
}