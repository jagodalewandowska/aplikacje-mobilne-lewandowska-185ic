import * as React from 'react';
import { TouchableOpacity, View, Text, Image, ScrollView } from 'react-native';
import styles from './styles';

export default function Home({navigation}) {
  return (
    <View style={styles.home.nav}>
    <Image source={{ uri: 'https://images.unsplash.com/photo-1569235186275-626cb53b83ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1352&q=80'}} style={styles.home.img} />
      <ScrollView>
        <View style={styles.home.panels}>
          <TouchableOpacity style={styles.home.button} onPress={() => navigation.push('DBFirst')}>
           <Text style={styles.home.text}>Otwórz lokalną bazę danych</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}