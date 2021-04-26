import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home';
import ImageRequire from './components/ImageRequire';
import ChangeSlider from './components/ChangeSlider';
import LazyImage from './components/LazyImage';
import ConnectionTest from './components/ConnectionTest';
import AsyncStore from './components/AsyncStore';
import SyncData from './components/SyncData';

const Stack = createStackNavigator();

export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{
          title: 'Menu',
          headerStyle: {
            backgroundColor: '#41A7A7',
          },
          headerTintColor: '#1F1F1F',
          headerTitleStyle: {
            fontSize: 25,
            textAlign: 'center',
            color: 'white',
          }
        }} 
          name="Strona Główna" 
          component={Home} />        
        <Stack.Screen options={{
          title: 'Image and Require',
          headerStyle: {
            backgroundColor: '#69BABA',
          },
          headerTintColor: '#1F1F1F',
          headerTitleStyle: {
            fontSize: 20,
            color: 'white',
          }
        }} 
          name='ImageRequire' 
          component={ImageRequire} />
        <Stack.Screen options={{
          title: 'Change Slider',
          headerStyle: {
            backgroundColor: '#69BABA',
          },
          headerTintColor: '#1F1F1F',
          headerTitleStyle: {
            fontSize: 20,
            color: 'white',
          }
        }}  
          name='ChangeSlider' 
          component={ChangeSlider} />
        <Stack.Screen  options={{
          title: 'LazyImage',
          headerStyle: {
            backgroundColor: '#69BABA',
          },
          headerTintColor: '#1F1F1F',
          headerTitleStyle: {
            fontSize: 20,
            color: 'white',
          }
        }} 
          name='LazyImage' 
          component={LazyImage} />
        <Stack.Screen  options={{
          title: 'ConnectionTest',
          headerStyle: {
            backgroundColor: '#69BABA',
          },
          headerTintColor: '#1F1F1F',
          headerTitleStyle: {
            fontSize: 20,
            color: 'white',
          }
        }} 
          name='ConnectionTest' 
          component={ConnectionTest} />
        <Stack.Screen  options={{
          title: 'AsyncStore',
          headerStyle: {
            backgroundColor: '#69BABA',
          },
          headerTintColor: '#1F1F1F',
          headerTitleStyle: {
            fontSize: 20,
            color: 'white',
          }
        }} 
          name='AsyncStore' 
          component={AsyncStore} />
        <Stack.Screen  options={{
          title: 'SyncData',
          headerStyle: {
            backgroundColor: '#69BABA',
          },
          headerTintColor: '#1F1F1F',
          headerTitleStyle: {
            fontSize: 20,
            color: 'white',
          }
        }} 
          name='SyncData' 
          component={SyncData} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}