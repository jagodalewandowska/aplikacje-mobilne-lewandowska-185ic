import React, { Component }  from 'react';
import { TouchableOpacity, View, Text, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from './styles';

class Select extends Component {
  state = {
    selectedValue: 'Wybierz'
  }
  setSelectedValue = (selectedValue) => {
    if (selectedValue){
      this.setState({ 
        selectedValue: selectedValue 
      })
    }
  }
  render() {
    return (
      <View>
          <Picker 
            selectedValue = {this.state.selectedValue} 
            onValueChange = {this.setSelectedValue}>
              {this.props.items ?
                this.props.items.map(item => <Picker.Item key={item.id} label={item.name} value={item.id}/>) : 
                <Picker.Item label = "None"/>}
          </Picker>
      </View>
    )
  }
}

export default class Selecter extends Component {  
  constructor(props) {
    super(props);
    const selections = [
        { id: '1', name: 'First' },
        { id: '2', name: 'Second' },
        { id: '3', name: 'Third' },
        { id: '4', name: 'Fourth' },
        { id: '5', name: 'Fifth' },
    ]
    this.state = {
      selections
    }
  }

  async componentDidMount() {
    const responseArtists = await fetch(`http://my-json-server.typicode.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/artists`); 
    const myArtists = await responseArtists.json();
    this.setState({ name: myArtists });
  }

  render(){     
    return (
      <View style={styles.con.container}> 
        <View style={styles.body.container}>
          <ScrollView>
            <View style={styles.body.ex}>
              <Text style={styles.body.txt}>1. Select ze zdefiniowanymi wartościami w konstruktorze.</Text>
              <Select style={styles.body.txt} items={this.state.selections}/><Text/>
              <Text style={styles.body.txt}>2. Select z asynchronicznie pobranymi opcjami. </Text>
              <Select style={styles.body.txt} items={this.state.name}/><Text/>
              <Text style={styles.body.txt}>3. Select z zablokowanymi opcjami.</Text>
                <Picker enabled={false} selectedValue={this.value} onValueChange={(value) => {this.setState({value: value})}}>
                  <Picker.Item label="Dexys Midnight Runners" value="1"/>
                  <Picker.Item label="George Michael" value="2"/>
                  <Picker.Item label="Elton John" value="3"/>
                </Picker>
            </View>
          </ScrollView>
        </View>    
      </View>      
    );
  } 
}