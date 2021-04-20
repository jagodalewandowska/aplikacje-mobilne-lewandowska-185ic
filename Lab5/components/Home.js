import * as React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import styles from './styles';

export default function Home({navigation}) {
  return (
    <View style={styles.home.nav}>
    <Image source={{ uri: 'https://images.unsplash.com/photo-1553034197-73b37e54f5e9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'}} style={styles.home.img} />
        <View style={styles.home.panels}>
          <TouchableOpacity style={styles.home.button} onPress={() => navigation.push('First')}>
           <Text style={styles.home.text}>1.  Przykład użycia ScrollView oraz ScrollBar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.home.button} onPress={() => navigation.push('Second')}>
            <Text style={styles.home.text}>2.  ScrollView oraz ScrollBar CD.</Text>
          </TouchableOpacity>      
          <TouchableOpacity style={styles.home.button} onPress={() => navigation.push('Touchable')}>
            <Text style={styles.home.text}>3.  TouchableOpacity oraz Highlight</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.home.button} onPress={() => navigation.push('Swipeable')}>
            <Text style={styles.home.text}>4.  Obsługa przesunięć palcem - Swipeable</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }