import React, { useState, useEffect, Component }  from 'react';
import { TouchableOpacity, View, Text, ScrollView, Image, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons, Entypo } from '@expo/vector-icons'; 
import Slider from '@react-native-community/slider';
import NetInfo from "@react-native-community/netinfo";
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';

export default function(props) {
  const navigation = useNavigation();
  return <SyncData {...props} navigation = {navigation} />;
}

export class SyncData extends Component {
  state = {
    offlineValue: '',
    onlineValue: ''
  }

  componentDidMount() {    
    setInterval(() => {
      this.fetchState();
      if(this.state.isConnected) {
      this.setState({ onlineValue: this.state.offlineValue})
      } else {
        // nie aktualizacje
      }
    }, 3000);
  }

  fetchState = async () => {
      const state = await NetInfo.fetch();
      var tempState = JSON.stringify(state)
      this.setState(JSON.parse(tempState))
  };

  checkValue = async(value) => {
    var key = "offlineValue"    
    try {
        const value = await AsyncStorage.getItem(key);
        if (value != null) {
            this.setState({offlineValue: value})
        } else {
            this.setState({offlineValue:'Brak'})
        }
    } catch (e) {
        this.setState({offlineValue: e})
    }
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
          <TouchableOpacity style={styles.con.button} onPress={() => navigation.push('ChangeSlider')}>
              <Text style={styles.con.text}>Slider</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.con.button} onPress={() => navigation.push('LazyImage')}>
              <Text style={styles.con.text}>Lazy</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.con.button} onPress={() => navigation.push('ConnectionTest')}>
              <Text style={styles.con.text}>Test</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.con.button} onPress={() => navigation.push('AsyncStore')}>
              <Text style={styles.con.text}>AsyncStore</Text>
          </TouchableOpacity>
        </View>   
        <View style={styles.body.container}>
          <View style={{marginTop: '15%', alignItems: 'center'}}>
            <Text style={styles.first.txt}> Stan połączenia </Text>
              {this.state.isConnected 
              ? <MaterialIcons name="check" size={18} color="green" /> 
              : <Entypo name="cross" size={18} color="red"/>}
          </View>
          <Slider
            style={{width: '100%', height: 50}}                
            thumbTintColor='#006164'
            minimumTrackTintColor="#006164"
            maximumTrackTintColor='gray'
            minimumValue={1}
            maximumValue={100}
            step={1}
            onValueChange={this.checkValue}
          />
          <View style={{marginTop: '5%'}}>
            <Text style={styles.first.mid}> Wartość suwaka: <Text style={styles.first.txt}> {this.state.offlineValue} </Text></Text>
            <Text style={styles.first.mid}> Wartość zapisana przy połączeniu z Internetem: <Text style={styles.first.txt}> {this.state.onlineValue} </Text></Text>
          </View>  
        </View>   
      </View>   
    );
  }
}