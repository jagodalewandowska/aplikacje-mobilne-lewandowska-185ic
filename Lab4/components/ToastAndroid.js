import React, { useState, useEffect, Component }  from 'react';
import { TouchableOpacity, View, Text, ToastAndroid, ScrollView, Button, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

export default function(props) {
  const navigation = useNavigation();
  return <Toaster {...props} navigation = {navigation} />;
}

const Toast = ({ visible }) => {
    if (visible) {
        ToastAndroid.showWithGravityAndOffset(
            "Toast",
            ToastAndroid.LONG,
            ToastAndroid.CENTER,
            25,
            50
        );
    }
    return null;
};

const ToastButton = () => {
  const [visible, setvisible] = React.useState(false);
  const [switchOn, setswitchOn] = React.useState(false);
  const [time, setTime] = useState(0);
  useEffect(() => setvisible(false), [visible]);

  const handleButtonPress = () => {
    setvisible(true);
  };

  const onToggleSwitch = () => {
    setswitchOn(!switchOn);
  };

  var myPromise;
  const createPromise = () => {
    let time = Math.floor(Math.random() * 10000);
    setTime(time)
    myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('hide');
        }, time);
    });
  }

  return (
    <View>
      <Toast visible={visible} />
      <Button 
        title = "Open"
        color = "#41A7A7" 
        onPress={() => {          
          onToggleSwitch()
          handleButtonPress()
          createPromise()
          myPromise.then((value) => {
              if(value == 'hide'){
                  setswitchOn(false)
              }
          });          
      }}/>
      <Modal
          animationType="fade"
          visible={switchOn}
          transparent={true}
          onRequestClose={() => {
              setModalVisible(!switchOn);
          }}
      >
        <View style={styles.modal.center}>
            <View style={styles.modal.centered}>
                <Text onPress={onToggleSwitch}> Wyłączenie modala za: </Text>
                <Text style={styles.modal.text}>{time/1000}s</Text>
            </View>
        </View>
      </Modal> 
    </View>
  );
};

export class Toaster extends Component {    
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.con.container}> 
        {/* Nawigacja */}
        <View style={styles.con.nav}>       
          <TouchableOpacity style={styles.con.button} onPress={() => navigation.push('TextInput')}>
              <Text style={styles.con.text}>TextInput</Text>
          </TouchableOpacity> 
          <TouchableOpacity style={styles.con.button} onPress={() => navigation.push('Select')}>
              <Text style={styles.con.text}>Select</Text>
          </TouchableOpacity>      
          <TouchableOpacity style={styles.con.home} onPress={() => navigation.push('Strona Główna')}>
              <Text style={styles.con.text}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.con.button} onPress={() => navigation.push('Switch')}>
              <Text style={styles.con.text}>Switch</Text>
          </TouchableOpacity>        
          <TouchableOpacity style={styles.con.button} onPress={() => navigation.push('DatePicker')}>
              <Text style={styles.con.text}>DatePicker</Text>
          </TouchableOpacity>
        </View>   
        <View style={{flex: 1, padding: 20}}>
          <View style={{marginBottom: 20}}>
            <Text style={{textAlign: 'justify'}}>ToastAndroid API dostarcza show(message, duration), która przyjmuje parametry message - wiadomość dla toast, duration - jak długo będzie trwała oraz showWithGravity(message, duration, gravity) oraz showWithGravityAndOffset(message, duration, gravity, xOffset, yOffset), które pozwalają na określenie w którym miejscu się wyświetli.</Text>
          </View>          
          <ToastButton />
        </View>
      </View>      
    );
  }  
}