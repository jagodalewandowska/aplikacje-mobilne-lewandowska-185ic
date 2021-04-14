import React, { Component } from 'react';
import { TouchableOpacity, View, Text, ActivityIndicator } from 'react-native';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import styles from './styles';

export default function Second ({navigation}) {  
  return (
    <View style={styles.sort.container}>      
      {/* Nawigacja */}
      <View style={styles.sort.nav}>
        <TouchableOpacity style={styles.sort.home} onPress={() => navigation.push('Strona Główna')}>
            <Text style={styles.sort.text}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sort.button} onPress={() => navigation.push('Sort')}>
            <Text style={styles.sort.text}>Sort</Text>
        </TouchableOpacity>      
        <TouchableOpacity style={styles.sort.button} onPress={() => navigation.push('First')}>
            <Text style={styles.sort.text}>1st Step</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sort.button} onPress={() => navigation.push('Second')}>
            <Text style={styles.sort.text}>2nd Step</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sort.button} onPress={() => navigation.push('Third')}>
            <Text style={styles.sort.text}>3rd Step</Text>
        </TouchableOpacity>
      </View>   
      <View style={{flex: 1}}>
        <ProgressSteps>      
          <ProgressStep 
            label="Pierwszy krok" 
            previousBtnDisabled="true"
            marginBottom = 'true'>
            <View style={styles.sort.ctr}>
              <Text>Drugi krok! </Text>
            </View>
            <View>
              <ActivityIndicator 
                color = '#006164'
                size = 'large'
                />
            </View>          
          </ProgressStep>

          <ProgressStep 
            label="Pierwszy krok" 
            previousBtnDisabled="true"
            marginBottom = 'true'>
            <View style={styles.sort.ctr}>
              <Text>Drugi krok! </Text>
            </View>
            <View>
              <ActivityIndicator 
                color = '#006164'
                size = 'large'
                />
            </View>          
          </ProgressStep>

          <ProgressStep 
            label="Pierwszy krok" 
            previousBtnDisabled="true"
            marginBottom = 'true'>
            <View style={styles.sort.ctr}>
              <Text>Drugi krok! </Text>
            </View>
            <View>
              <ActivityIndicator 
                color = '#006164'
                size = 'large'
                />
            </View>          
          </ProgressStep>
        </ProgressSteps>
      </View>    
    </View>      
  );
}