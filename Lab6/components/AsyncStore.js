import React, { useState, useEffect, Component }  from 'react';
import { TouchableOpacity, View, Text, ScrollView, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';

export default function(props) {
  const navigation = useNavigation();
  return <AsyncStore {...props} navigation = {navigation} />;
}

export class AsyncStore extends Component {  
  state = {
    storedKey: '',
    storedValue: '',
    getKey: ''
  }

  storeData = async () => {
    var key = this.state.storedKey
    var value = this.state.storedValue
    if (this.state.storedKey && this.state.storedValue != '') {
      try {
        await AsyncStorage.setItem(key, value);
        alert('Dodano nowy klucz -- ' + key + '\no wartości -- ' + value)
      } catch (error) {
          alert('Niepowodzenie')
      }
    } else {
      alert('Wypełnij wszystkie pola!')
    }    
  };

  retrieveData = async () => {
    var key = this.state.getKey
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
          alert('Klucz -- '+ key + '\nWartość to -- ' + value);
      } else {
          alert('Nie odnaleziono');
      }
    } catch (error) {
      alert('Niepowodzenie!')
    }
  };

  clearStorage = async () => {
    try {
      await AsyncStorage.clear()
      alert('Wyczyszczono!')
    } catch (error) {
      alert('Czyszczenie zakończone niepowodzeniem.')
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
          <TouchableOpacity style={styles.con.button} onPress={() => navigation.push('SyncData')}>
              <Text style={styles.con.text}>SyncData</Text>
          </TouchableOpacity>
        </View>   
        <View style={styles.body.container}>
          <ScrollView>
            <View style={{marginTop: '5%'}}>
              <Text style={styles.first.mid}> Zapisywanie danych <Text style={styles.first.txt}>setItem: </Text></Text>
              <View style={styles.body.ex}>
                <View style={styles.body.byside}>
                  <TextInput style = {styles.body.input}
                    placeholder = "Klucz"
                    onEndEditing={ event => {this.setState({storedKey: event.nativeEvent.text})} }
                  />
                  <TextInput style = {styles.body.input}
                    placeholder = "Wartość"
                    onEndEditing={ event => {this.setState({storedValue: event.nativeEvent.text})} }
                  />
                </View> 
                <TouchableOpacity style={styles.body.btn} onPress={this.storeData}>
                  <Text style={styles.home.text}>Zapisz</Text>
                </TouchableOpacity>
              </View>
            </View>              
            <View style={{marginTop: '5%', marginBottom: '2%'}}>
              <Text style={styles.first.mid}> Wyszukiwanie danych <Text style={styles.first.txt}>getItem:</Text></Text>
              <View style={{margin: '2%'}}>
                <TextInput style = {styles.body.input2}                
                  placeholder = "Podaj klucz"
                  onEndEditing={ event => {this.setState({getKey: event.nativeEvent.text})}}
                />
                <TouchableOpacity style={styles.body.btn} onPress={this.retrieveData}>
                  <Text style={styles.home.text}>Szukaj</Text>
                </TouchableOpacity>
              </View>
            </View>
             <View style={{marginTop: '5%', marginBottom: '2%'}}>
              <Text style={styles.first.mid}>Wyczyść zapisane wartości <Text style={styles.first.txt}>clear:</Text></Text>
              <View style={{margin: '2%'}}>
                <TouchableOpacity style={styles.body.btn} onPress={this.clearStorage}>
                  <Text style={styles.home.text}>Wyczyść</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>   
      </View>   
    );
  }
}