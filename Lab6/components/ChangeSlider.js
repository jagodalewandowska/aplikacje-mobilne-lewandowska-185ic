import React, { useState, useEffect, Component }  from 'react';
import { TouchableOpacity, View, Text, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Slider from '@react-native-community/slider';
import styles from './styles';

export default function(props) {
  const navigation = useNavigation();
  return <ChangeSlider {...props} navigation = {navigation} />;
}

export class ChangeSlider extends Component {  
  state = {
    first: 1,
    second: 0.8
  }

  resize = (value) => {
    this.setState({first: value});
  }

  resizeRequire = (value) => {
    this.setState({second: value});
  }

  render(){
    const { navigation } = this.props;   
    return (
      <View style={styles.con.container}> 
        {/* Nawigacja */}
        <View style={styles.con.nav}>   
          <TouchableOpacity style={styles.con.home} onPress={() => navigation.push('Strona Główna')}>
              <Text style={styles.con.text}>Home</Text>
          </TouchableOpacity>         
          <TouchableOpacity style={styles.con.button} onPress={() => navigation.push('ImageRequire')}>
              <Text style={styles.con.text}>Image</Text>
          </TouchableOpacity>        
          <TouchableOpacity style={styles.con.button} onPress={() => navigation.push('LazyImage')}>
              <Text style={styles.con.text}>Lazy</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.con.button} onPress={() => navigation.push('ConnectionTest')}>
              <Text style={styles.con.text}>Test</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.con.button} onPress={() => navigation.push('AsyncStore')}>
              <Text style={styles.con.text}>Async</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.con.button} onPress={() => navigation.push('SyncData')}>
              <Text style={styles.con.text}>SyncData</Text>
          </TouchableOpacity>
        </View>   
        <View style={styles.body.container}>
          <ScrollView>
            <View style={{marginTop: '5%'}}>
              <Text style={styles.first.mid}> Użycie<Text style={styles.first.txt}> Slidera </Text>do zmiany rozmiaru obrazka <Text style={styles.first.txt}>uri.</Text> </Text>
            </View>
            <View style={{marginRight: '4%'}}>
            <Image source={{ uri: 'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'}} style={[styles.first.img2, { transform: [{ scale: this.state.first }] }]} />
              <Slider
                style={{width: '100%', height: 50}}                
                thumbTintColor='#006164'
                minimumTrackTintColor="#006164"
                maximumTrackTintColor='gray'
                value={1}
                minimumValue={0.2}
                maximumValue={1}
                onValueChange={this.resize}
              />
            </View>
            <View style={{marginTop: '2%', marginBottom: '2%'}}>
                <Text style={styles.first.mid}> Wykorzystanie Slidera przy użyciu <Text style={styles.first.txt}>require():</Text></Text>
            </View>
            <View style={{marginRight: '4%'}}>
              <Image source={require('./img/example2.png')} style={[styles.first.img2, { transform: [{ scale: this.state.second }] }]}/>
                 <Slider
                  style={{width: '100%', height: 50}}                
                  thumbTintColor='#006164'
                  minimumTrackTintColor="#006164"
                  maximumTrackTintColor='gray'
                  value={0.8}
                  minimumValue={0.01}
                  maximumValue={1}
                  onValueChange={this.resizeRequire}
                />
            </View>
            </ScrollView>
          </View> 
      </View>   
    );
  }
}