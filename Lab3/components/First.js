import React, { useState, useEffect }  from 'react';
import { TouchableOpacity, View, Text, ActivityIndicator } from 'react-native';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import styles from './styles';

export default function First ({navigation}) {  
  return (
    <View style={styles.sort.container}> 
      {/* Nawigacja */}
      <View style={styles.sort.nav}>
        <TouchableOpacity style={styles.sort.home} onPress={() => navigation.push('Strona Główna')}>
            <Text style={styles.sort.text}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sort.button} onPress={() => navigation.push('Sort')}>
            <Text style={styles.sort.text}>Sortowanie i filtrowanie</Text>
        </TouchableOpacity>      
        <TouchableOpacity style={styles.sort.button} onPress={() => navigation.push('First')}>
            <Text style={styles.sort.text}>Lazy Loading</Text>
        </TouchableOpacity>
      </View>   
      <View style={{flex: 1}}>
        <ProgressSteps
          activeStepIconBorderColor='#006164'
          labelColor='#17868F'
          activeLabelColor="#006164"
          completedProgressBarColor='#41A7A7'
          completedStepIconColor='#41A7A7'>      
          <ProgressStep             
            label="Pierwszy krok"
            nextBtnTextStyle={styles.state.steps} 
            previousBtnTextStyle={styles.state.steps}
            nextBtnText={'Dalej'}
            previousBtnText={'Cofnij'}>
            <View style={styles.sort.ctr}>
              <Text style={styles.sort.txt}>To jest pierwszy ekran! ProgressSteps przyjmują inne parametry dla paska progresu, również zostały zastosowane zmiany do przycisków na dole ekranu.</Text>
            </View>
            <View>
              <ActivityIndicator 
                color = '#006164'
                size = 'large'
                />
            </View>          
          </ProgressStep>
          <ProgressStep             
            label="Drugi krok"
            nextBtnTextStyle={styles.state.steps} 
            previousBtnTextStyle={styles.state.steps}
            nextBtnText={'Dalej'}
            previousBtnText={'Cofnij'}>
            <View style={styles.sort.ctr}>
              <Text style={styles.sort.txt}>To jest drugi ekran. Został zmieniony rozmiar i kolor ActivityIndicator.</Text>
            </View>
            <View>
              <ActivityIndicator 
                color = '#006164'
                size = 'small'
                />              
            </View>          
          </ProgressStep>
          <ProgressStep           
            label="Trzeci krok"
            nextBtnTextStyle={styles.state.steps} 
            previousBtnTextStyle={styles.state.steps}            
            previousBtnText={'Cofnij'}
            finishBtnText={'Strona Główna'}
            onSubmit={() => {navigation.navigate('Strona Główna')}}>
            <View style={styles.sort.ctr}>
              <Text style={styles.sort.txt}>Trzeci ekran - ActivityIndicator znów został zmieniony. Wciśnij przycisk na dole by powrócić do Menu.</Text>
            </View>
            <View>
              <ActivityIndicator 
                color = '#41A7A7'
                size = 'large'
                />
            </View>          
          </ProgressStep>
        </ProgressSteps>
      </View>    
    </View>      
  );
}