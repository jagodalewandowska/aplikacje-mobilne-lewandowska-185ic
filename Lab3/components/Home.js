import * as React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import styles from './styles';

export default function Home({navigation}) {
  return (
    <View style={styles.home.nav}>
    <Image source={{ uri: 'https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'}} style={styles.home.img} />
        <View style={styles.home.panels}>
          <TouchableOpacity style={styles.home.button} onPress={() => navigation.push('Sort')}>
           <Text style={styles.home.text}>Sortowanie oraz filtrowanie</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.home.button} onPress={() => navigation.push('Lazy')}>
            <Text style={styles.home.text}>Lazy Loading</Text>
          </TouchableOpacity>      
          <TouchableOpacity style={styles.home.button} onPress={() => navigation.push('First')}>
            <Text style={styles.home.text}>Step Progress</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }