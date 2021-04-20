import React, { Component }  from 'react';
import { TouchableOpacity, View, Text, TextInput, Modal, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

export default function(props) {
  const navigation = useNavigation();
  return <TextIn {...props} navigation = {navigation} />;
}

export class TextIn extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      multiline: "TextInput is a foundational component for inputting text into the app via a keyboard. Props provide configurability for several features, such as auto-correction, auto-capitalization, placeholder text, and different keyboard types, such as a numeric keypad.",
      editable: false
    }
    this.handleEditable = this.handleEditable.bind(this)
  }

  // Przykład 1
  handleName = (text) => {
    this.setState({ name: text })
  }    
  handleEmail = (text) => {
    this.setState({ email: text })
  }
  handleAlert(name, email){
    alert("Witaj " + name + ", Twój adres email to" + email + ".");
  }

  // Przykład 2
  handleMultiline = (text) => {
    this.setState({ multiline: text })
  }
  calcInput(text){
    alert('Ilość znaków: ' + text.length + ".")
  }

  // Przykład 3
  handleEditable() {
    this.setState({
      editable: !this.state.editable,
    })
  }

  render(){
    const { navigation } = this.props;    
    return (
      <View style={styles.con.container}> 
        {/* Nawigacja */}
        <View style={styles.con.nav}>        
          <TouchableOpacity style={styles.con.button} onPress={() => navigation.push('Select')}>
              <Text style={styles.con.text}>Select</Text>
          </TouchableOpacity>      
          <TouchableOpacity style={styles.con.button} onPress={() => navigation.push('Switch')}>
              <Text style={styles.con.text}>Switch</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.con.home} onPress={() => navigation.push('Strona Główna')}>
              <Text style={styles.con.text}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.con.button} onPress={() => navigation.push('DatePicker')}>
              <Text style={styles.con.text}>DatePicker</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.con.button} onPress={() => navigation.push('ToastAndroid')}>
              <Text style={styles.con.text}>Toast</Text>
          </TouchableOpacity>
        </View>   
        <View style={styles.body.container}>
          <ScrollView>
            <View style={styles.body.ex}>
              <Text style={styles.body.txt}>1. Przekazywanie parametrów do komunikatu.</Text>
                <View style={styles.body.byside}>
                  <TextInput style = {styles.body.input}
                    placeholder = "Imię"
                    onChangeText = {this.handleName}
                  />
                  <TextInput style = {styles.body.input}
                    placeholder = "Adres email"
                    onChangeText = {this.handleEmail}
                    keyboardType = "email-address"
                  />
                </View> 
                <TouchableOpacity style={styles.body.btn} onPress = { () => {this.handleAlert(this.state.name, this.state.email)}}>
                  <Text style={styles.home.text}>Wyślij</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.body.ex}>
              <Text style={styles.body.txt}>2. TextInput z wieloma liniami, wpisanym wcześniej tekstem i maksymalną ilością znaków.</Text>
              <View style={styles.body.byside}>
                <TextInput style = {styles.body.input2}                
                  multiline = {true}
                  numberOfLines={3}
                  value= {this.state.multiline}
                  onChangeText = {this.handleMultiline}
                  maxLength = {this.maxLength}
                />
              </View> 
              <TouchableOpacity style={styles.body.btn} onPress = { () => {this.calcInput(this.state.multiline)}}>
                <Text style={styles.home.text}>Zlicz znaki</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.body.ex}>
              <Text style={styles.body.txt}>3. Blokada edycji TextInput (oraz odblokowanie) po wciśnięciu przycisku</Text>
              <View style={styles.body.byside}>
                <TextInput style = {styles.body.input2}                
                  placeholder = "Wpisz coś"
                  editable = {this.state.editable}
                />
              </View> 
              <TouchableOpacity style={styles.body.btn} onPress = {this.handleEditable}>
                <Text style={styles.home.text}>Edytuj</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>    
      </View>      
    );
  } 
}