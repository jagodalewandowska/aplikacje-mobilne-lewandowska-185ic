import * as React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import styles from './styles';

export default function Home({navigation}) {
  return (
    <View style={styles.home.nav}>
    <Image source={{ uri: 'https://images.unsplash.com/photo-1541345023926-55d6e0853f4b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8YW5kcm9pZHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}} style={styles.home.img} />
        <View style={styles.home.panels}>
          <TouchableOpacity style={styles.home.button} onPress={() => navigation.push('Sort')}>
           <Text style={styles.home.text}>Sortowanie oraz filtrowanie</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.home.button} onPress={() => navigation.push('Lazy')}>
            <Text style={styles.home.text}>Lazy Loading</Text>
          </TouchableOpacity>      
          <TouchableOpacity style={styles.home.button} onPress={() => navigation.push('First')}>
            <Text style={styles.home.text}>First Step</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.home.button} onPress={() => navigation.push('First')}>
            <Text style={styles.home.text}>Second Step</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.home.button} onPress={() => navigation.push('First')}>
            <Text style={styles.home.text}>Third Step</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }