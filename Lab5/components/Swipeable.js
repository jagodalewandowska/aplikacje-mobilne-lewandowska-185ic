import React, { useState, useEffect, Component }  from 'react';
import {TouchableOpacity, View, Text, ScrollView } from 'react-native';
import Swipeable from 'react-native-swipeable';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

export default function(props) {
  const navigation = useNavigation();
  return <Swipe {...props} navigation = {navigation} />;
}
// Przykład 2 - przyciski

const leftButtons = [
  <TouchableOpacity style={{backgroundColor: '#D9BBBB'}}
    onPress={() => alert('Wciśnięto przycisk!')}>
    <Text>1</Text>
  </TouchableOpacity>,
  <TouchableOpacity style={{backgroundColor: '#BEAFB6'}}>
    <Text>2</Text>
  </TouchableOpacity>
];

// Przykład 2 - funkcja SwipeEx

function SwipeEx({onOpen, onClose}) {
  return (
    <Swipeable
      leftButtonWidth={55}
      leftButtons={leftButtons}
      rightContent={(
        <View>
          <Text>Nic tu nie ma!</Text>
        </View>
      )}
      onLeftButtonsOpenRelease={onOpen}
      onLeftButtonsCloseRelease={onClose}
    >
      <View>
        <Text style={styles.home.text}>Przesuń w prawo!</Text>
      </View>
    </Swipeable>
  );
}

export class Swipe extends Component {  
  state = {
    swiped: false,
    toggle: false,
    currentlyOpenSwipeable: null,
    ex1: 'Przesuń w lewo!',
    ex2: 'Przesuń w prawo!'
  }; 

  render(){
    const { navigation } = this.props;
    {/* Przykład 1 */}
    const { swiped, toggle} = this.state;    
    const rightContent=[
      <View style={styles.swipe.right}>
        { swiped ?
          <Text style={{color: 'white'}}>Upuść!</Text> 
          : <Text style={{color: 'red'}}>Dalej...</Text>}
      </View>
    ]

    {/* Przykład 2 */}
    const {currentlyOpenSwipeable} = this.state;
    const itemProps = {
      onOpen: (event, gestureState, swipeable) => {
        if (currentlyOpenSwipeable && currentlyOpenSwipeable !== swipeable) {
          currentlyOpenSwipeable.recenter();
        }
        this.setState({currentlyOpenSwipeable: swipeable});
      },
      onClose: () => this.setState({
        currentlyOpenSwipeable: null
        })
    };
        
    return (
      <View style={styles.con.container}>
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
          <TouchableOpacity style={styles.con.button} onPress={() => navigation.push('Touchable')}>
              <Text style={styles.con.text}>Touchable</Text>
          </TouchableOpacity> 
        </View>    
        {/* Przyciski Swipeable */}
        <View style={styles.body.container}>
          <View style={styles.body.ex}>      
            <View style={styles.first.mid}>    
              <Text style={styles.body.txt}>Użycie Swipeable</Text>
              {/* Przykład 1 */}
              <ScrollView style={styles.home.button}>
                <Swipeable
                  rightContent={rightContent} 
                  rightActionActivationDistance={200}  
                  onRightActionActivate={() => this.setState({swiped: true})} 
                  onRightActionDeactivate={() => this.setState({swiped: false})} 
                  onRightActionComplete={() => this.setState({ex1: 'Przycisk został przesunięty!'})}
                >
                  <Text style={styles.home.text}>{this.state.ex1}</Text>
                </Swipeable>
              </ScrollView> 
              {/* Przykład 2 */}
              <ScrollView style={styles.home.button}>
                 <SwipeEx {...itemProps}/>
              </ScrollView>
            </View>            
          </View>          
        </View>   
      </View>      
    );
  }
}