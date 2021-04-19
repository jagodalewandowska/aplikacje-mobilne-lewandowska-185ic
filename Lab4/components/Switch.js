import React, { useState, useEffect }  from 'react';
import { TouchableOpacity, View, Text, Switch, Modal } from 'react-native';
import styles from './styles';

const MySwitch = () => {
  const [isSwitchOn, setIsSwitchOn, setModalVisible, modalVisible] = React.useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  return (
    <View>      
      <Switch 
        value={isSwitchOn} 
        onValueChange={onToggleSwitch}
        trackColor={{ false: "#41A7A7", true: "#006164" }}         
        style={styles.modal.modal}
      />
      <Modal
          animationType="slide"
          transparent={true}
          visible={isSwitchOn}
          onRequestClose={() => {
              setModalVisible(!isSwitchOn);
          }}
      >
        <View style={styles.modal.center}>
            <View style={styles.modal.centered}>
                <Text style={styles.modal.text} onPress={onToggleSwitch}>{Math.floor(Math.random() * 5000)}</Text>
            </View>
        </View>
      </Modal> 
    </View>
  );
}

export default function Switcher({navigation}) {
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
        <TouchableOpacity style={styles.con.button} onPress={() => navigation.push('DatePicker')}>
            <Text style={styles.con.text}>DatePicker</Text>
        </TouchableOpacity>      
        <TouchableOpacity style={styles.con.button} onPress={() => navigation.push('ToastAndroid')}>
            <Text style={styles.con.text}>Toast</Text>
        </TouchableOpacity>
      </View>   
      <View style={{flex: 1}}>
        <View style={styles.modal.switch}>
          <Text style={styles.body.txt}>Kliknij w element, aby otworzyć modal: </Text>
          <MySwitch/><Text/>
        </View>
      </View>    
    </View>      
  );
}