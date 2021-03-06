import * as React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import styles from './styles';

export default function Home({navigation}) {
  return (
    <View style={styles.home.nav}>
    <Image source={{ uri: 'https://images.unsplash.com/photo-1541345023926-55d6e0853f4b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8YW5kcm9pZHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}} style={styles.home.img} />
        <View style={styles.home.panels}>
          <TouchableOpacity style={styles.home.button} onPress={() => navigation.push('Spread Operator')}>
           <Text style={styles.home.text}>Spread Operator</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.home.button} onPress={() => navigation.push('Rest Parameters')}>
            <Text style={styles.home.text}>Rest Parameters</Text>
          </TouchableOpacity>      
          <TouchableOpacity style={styles.home.button} onPress={() => navigation.push('UseState')}>
            <Text style={styles.home.text}>UseState</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }