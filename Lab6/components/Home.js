import * as React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import styles from './styles';

export default function Home({navigation}) {
  return (
    <View style={styles.home.nav}>
    <Image source={{ uri: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1381&q=80'}} style={styles.home.img} />
        <View style={styles.home.panels}>
          <TouchableOpacity style={styles.home.button} onPress={() => navigation.push('ImageRequire')}>
           <Text style={styles.home.text}>1.  Image, require</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.home.button} onPress={() => navigation.push('ChangeSlider')}>
            <Text style={styles.home.text}>2.  ChangeSlider</Text>
          </TouchableOpacity>      
          <TouchableOpacity style={styles.home.button} onPress={() => navigation.push('LazyImage')}>
            <Text style={styles.home.text}>3.  Lazy Loading Image</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.home.button} onPress={() => navigation.push('ConnectionTest')}>
            <Text style={styles.home.text}>4.  Connection test</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.home.button} onPress={() => navigation.push('AsyncStore')}>
            <Text style={styles.home.text}>5.  AsyncStore</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.home.button} onPress={() => navigation.push('SyncData')}>
            <Text style={styles.home.text}>6.  SyncData</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }