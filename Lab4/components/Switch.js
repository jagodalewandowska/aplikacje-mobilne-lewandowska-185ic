import React, { useState, useEffect }  from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import styles from './styles';

export default function Switch({navigation}) {  
  return (
    <View style={styles.con.container}> 
      {/* Nawigacja */}
      <View style={styles.con.nav}>       
        <TouchableOpacity style={styles.con.button} onPress={() => navigation.push('TextIn')}>
            <Text style={styles.con.text}>TextInput</Text>
        </TouchableOpacity> 
        <TouchableOpacity style={styles.con.button} onPress={() => navigation.push('Select')}>
            <Text style={styles.con.text}>Select</Text>
        </TouchableOpacity>      
        <TouchableOpacity style={styles.con.home} onPress={() => navigation.push('Strona Główna')}>
            <Text style={styles.con.text}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.con.button} onPress={() => navigation.push('DatePicker')}>
            <Text style={styles.con.text}>DatePicker</Text>
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