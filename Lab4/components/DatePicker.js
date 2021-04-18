import React, { useState, useEffect }  from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import styles from './styles';

export default function DatePicker({navigation}) {  
  return (
    <View style={styles.con.container}> 
      {/* Nawigacja */}
      <View style={styles.con.nav}>       
        <TouchableOpacity style={styles.con.button} onPress={() => navigation.push('TextInput')}>
            <Text style={styles.con.text}>Toast</Text>
        </TouchableOpacity> 
        <TouchableOpacity style={styles.con.button} onPress={() => navigation.push('Select')}>
            <Text style={styles.con.text}>Select</Text>
        </TouchableOpacity>      
        <TouchableOpacity style={styles.con.home} onPress={() => navigation.push('Strona Główna')}>
            <Text style={styles.con.text}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.con.button} onPress={() => navigation.push('Switch')}>
            <Text style={styles.con.text}>Switch</Text>
        </TouchableOpacity>        
        <TouchableOpacity style={styles.con.button} onPress={() => navigation.push('ToastAndroid')}>
            <Text style={styles.con.text}>Toast</Text>
        </TouchableOpacity>
      </View>   
      <View style={{flex: 1}}>
        
      </View>    
    </View>      
  );
}