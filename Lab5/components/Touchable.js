import React, { useState, useEffect, Component }  from 'react';
import { TouchableOpacity, TouchableHighlight, View, Text, Modal, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { WebView } from 'react-native-webview';
import styles from './styles';

export default function(props) {
  const navigation = useNavigation();
  return <Touchable {...props} navigation = {navigation} />;
}

export class Touchable extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      countTH: 0,
      search: '',
      show: false
    }
  }

  onPressTH = () => {
    this.setState({
       countTH: this.state.countTH + 1
    });
  };

  handleName = (text) => {
    this.setState({ search: text })
  }

  renderBrowser(){
    return (
      <Modal        
        transparent={false}
        animationType='fade'
        visible={this.state.show}
        onRequestClose={() => {
            this.setState({show: !show});
        }}>    
        <Button
          title='Powrót'          
          onPress={() => this.setState({show: false})}></Button>
        <WebView
          source={{
              uri: 'https://www.google.com/search?q=' + this.state.search,
          }}
          startInLoadingState
          scalesPageToFit
          javaScriptEnabled       
        />
      </Modal>
    );
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
          <TouchableOpacity style={styles.con.button} onPress={() => navigation.push('First')}>
              <Text style={styles.con.text}>ScrollView #1</Text>              
          </TouchableOpacity>  
          <TouchableOpacity style={styles.con.button} onPress={() => navigation.push('Second')}>
              <Text style={styles.con.text}>ScrollView #2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.con.button} onPress={() => navigation.push('Swipeable')}>
              <Text style={styles.con.text}>Swipeable</Text>
          </TouchableOpacity> 
        </View>
        { this.state.show && this.renderBrowser() }   
        <View style={{marginTop: '5%'}}>
          <Text style={styles.first.mid}> Wpisz frazę, którą chcesz wyszukać w Google. Przycisk Szukaj wykorzystuje <Text style={styles.first.txt}> TouchableOpacity. </Text></Text>
        </View>
        <TextInput 
          onChangeText={this.handleName}
          style={styles.body.input2}/>     
        <TouchableOpacity
            style={styles.con.button}
            onPress={() => this.setState({show: true})}>
            <Text style={styles.con.text}>Szukaj</Text>
        </TouchableOpacity> 
        <View style={{marginTop: '5%'}}>
          <Text style={styles.first.mid}> Poniżej znajdują się przykłady wykorzystania <Text style={styles.first.txt}>TouchableHighlight</Text>. Jest to licznik kliknięć oraz wyświetlanie alertu. </Text>
        </View>
        <View style={styles.second.ctr}>
          <View style={{width:'48%', margin: '1%'}}>
            <TouchableHighlight
              underlayColor="#B5DFDF"
              style={styles.touch.button}
              onPress={this.onPressTH}>
              <Text style={styles.home.text}>Wciśnięto {this.state.countTH} razy.</Text>
            </TouchableHighlight>   
          </View>
          <View style={{width:'48%', margin: '1%'}}>
            <TouchableHighlight
              style={styles.touch.button}
              onPress={() => alert('Wciśnięto przycisk!')}>
              <Text style={styles.home.text}> Alert </Text>
            </TouchableHighlight>     
          </View>
        </View>                
      </View>      
    );
  }
}