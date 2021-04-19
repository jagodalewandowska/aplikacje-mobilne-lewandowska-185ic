import React, { useState, useEffect, Component }  from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import DatePicker from 'react-native-datepicker';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

export default function(props) {
  const navigation = useNavigation();
  return <DatePick {...props} navigation = {navigation} />;
}

export class DatePick extends Component {  
  constructor(props) {
    super(props)
    this.state = {
      date: new Date()
    };
  }
  render(){
    const { navigation } = this.props;   
    return (
      <View style={styles.con.container}> 
        {/* Nawigacja */}
        <View style={styles.con.nav}>       
          <TouchableOpacity style={styles.con.button} onPress={() => navigation.push('TextInput')}>
              <Text style={styles.con.text}>Text Input</Text>
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
        <View style={styles.body.container}>
          <View style={styles.body.ex}>
          <Text style={styles.body.txt}>Wybierz datę, która następnie zostanie wyświetlona w powiadomieniu.</Text>
            <DatePicker
              style={{width: '100%', borderColor: '#006164', borderWidth: 2}}
              onDateChange={(date) => {
                  this.setState({date: date});
                  alert("Wybrana data to:" + this.state.date)
              }}
              date={this.state.date}
              mode="date"
              format="DD-MM-YYYY"
              placeholder="select date"
              androidMode="spinner"
              useNativeDriver = {true}              
            /><Text/>
          </View>
        </View>    
      </View>      
    );
  }
}