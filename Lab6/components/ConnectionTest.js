import React, { useState, useEffect, Component }  from 'react';
import { TouchableOpacity, View, Text, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import NetInfo from "@react-native-community/netinfo";
import { MaterialIcons, Entypo } from '@expo/vector-icons'; 
import styles from './styles';

export default function(props) {
  const navigation = useNavigation();
  return <ConnectionTest {...props} navigation = {navigation} />;
}

export class ConnectionTest extends Component {  
  state = {}
  componentDidMount() {
      this.fetchState();
  }
  fetchState = async () => {
      const state = await NetInfo.fetch();
      var tempState = JSON.stringify(state)
      this.setState(JSON.parse(tempState))
  };
  render(){
    const { navigation } = this.props;   
    var details = this.state.details 
      ? JSON.parse(JSON.stringify(this.state.details,null)) : ''
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
          <TouchableOpacity style={styles.con.button} onPress={() => navigation.push('AsyncStore')}>
              <Text style={styles.con.text}>Async</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.con.button} onPress={() => navigation.push('SyncData')}>
              <Text style={styles.con.text}>SyncData</Text>
          </TouchableOpacity>
        </View>   
        <View style={styles.body.container}>
         <View style={{marginTop: '15%', alignItems: 'center'}}>
              <Text style={styles.first.txt}> Stan połączenia </Text>
                {this.state.isConnected 
                ? <MaterialIcons name="check" size={18} color="green" /> 
                : <Entypo name="cross" size={18} color="red"/>}
            </View>
          <ScrollView>         
            <View style={styles.first.ctr}>
              <View style={styles.first.about}>              
                <Text style={styles.first.txt2}> Adres IP - <Text style={styles.first.txt}>{details.ipAddress}</Text></Text>            
                <Text style={styles.first.txt2}> Typ połączenia - <Text style={styles.first.txt}>{this.state.type}</Text></Text>
                <Text style={styles.first.txt2}> Siła sygnału - <Text style={styles.first.txt}>{details.strength}%</Text></Text>            
                <Text style={styles.first.txt2}> SSID - <Text style={styles.first.txt}>{details.ssid ? details.ssid : 'Brak informacji'}</Text></Text>
                <Text style={styles.first.txt2}> Typ połączenia - <Text style={styles.first.txt}>{this.state.type}</Text></Text>
                <Text style={styles.first.txt2}> Częstotliwość - <Text style={styles.first.txt}>{this.state.isConnected ? details.frequency : 'Brak'}</Text></Text>            
                <Text style={styles.first.txt2}> Dostępność Wifi - <Text style={styles.first.txt}>{this.state.isWifiEnabled ? 'Tak' : 'Nie'}</Text></Text>
                <Text style={styles.first.txt2}> Kosztowność - <Text style={styles.first.txt}>{details.isConnectionExpensive ? 'Tak' : 'Nie'}</Text></Text>  
              </View>
              <View style={styles.first.about}>
                <Image source={{ uri: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=562&q=80'}} style={{height: 360}} />       
              </View>
            </View>            
          </ScrollView>
        </View>   
      </View>   
    );
  }
}