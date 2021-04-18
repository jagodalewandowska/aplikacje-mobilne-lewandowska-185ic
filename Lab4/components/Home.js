import * as React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import styles from './styles';

export default function Home({navigation}) {
  return (
    <View style={styles.home.nav}>
    <Image source={{ uri: 'https://images.unsplash.com/photo-1504466387253-1767175ca834?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'}} style={styles.home.img} />
        <View style={styles.home.panels}>
          <TouchableOpacity style={styles.home.button} onPress={() => navigation.push('TextInput')}>
           <Text style={styles.home.text}>1.  TextInput</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.home.button} onPress={() => navigation.push('Select')}>
            <Text style={styles.home.text}>2.  Select</Text>
          </TouchableOpacity>      
          <TouchableOpacity style={styles.home.button} onPress={() => navigation.push('Switch')}>
            <Text style={styles.home.text}>3.  Switch</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.home.button} onPress={() => navigation.push('DatePicker')}>
            <Text style={styles.home.text}>4.  DatePicker</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.home.button} onPress={() => navigation.push('ToastAndroid')}>
            <Text style={styles.home.text}>5.  ToastAndroid</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }