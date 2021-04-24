import React, { useState, useEffect, Component }  from 'react';
import { TouchableOpacity, View, Text, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

export default function(props) {
  const navigation = useNavigation();
  return <First {...props} navigation = {navigation} />;
}

export class First extends Component {  
  
  render(){
    const { navigation } = this.props;   
    return (
      <View style={styles.con.container}> 
        {/* Nawigacja */}
        <View style={styles.con.nav}>   
          <TouchableOpacity style={styles.con.home} onPress={() => navigation.push('Strona Główna')}>
              <Text style={styles.con.text}>Home</Text>
          </TouchableOpacity>    
          <TouchableOpacity style={styles.con.button} onPress={() => navigation.push('Second')}>
              <Text style={styles.con.text}>ScrollView #2</Text>
          </TouchableOpacity>          
          <TouchableOpacity style={styles.con.button} onPress={() => navigation.push('Touchable')}>
              <Text style={styles.con.text}>TouchableOpacity</Text>
          </TouchableOpacity>        
          <TouchableOpacity style={styles.con.button} onPress={() => navigation.push('Swipeable')}>
              <Text style={styles.con.text}>Swipeable</Text>
          </TouchableOpacity>
        </View>   
        <View style={styles.body.container}>
          <View style={styles.body.ex}>
            <ScrollView persistentScrollbar={true}>
              <View style={styles.first.ctr}>
                <View style={styles.first.about}>
                  <Text style={styles.first.txt}>  ScrollView is a component that wraps platform ScrollView while providing integration with touch locking "responder" system. ScrollViews must have a bounded height in order to work, since they contain unbounded-height children into a bounded container (via a scroll interaction).</Text>             
                </View>
                <View style={styles.first.about}>
                  <Image source={{ uri: 'https://images.unsplash.com/photo-1558007888-891fdd1d5276?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80'}} style={styles.home.img} />       
                </View>    
                <View>
                  <Text style={styles.first.mid}> <Text style={styles.first.txt}> ScrollView </Text> renders all its react child components at once, but this has a performance downside. Having a very long list of items will contrubite to slow rendering and increase memory usage.</Text> 
                </View>
                <View style={styles.first.about}>
                  <Image source={{ uri: 'https://images.unsplash.com/photo-1614450770660-6ee6ef27e9e4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'}} style={styles.home.img} />  
                </View> 
                <View style={styles.first.about}>
                   <Text style={styles.first.txt}> FlatList renders items lazily, when they are about to appear - it removes items that scroll way off the screen to save memory and processing time. Useful when rendering separators between your items, multiple columns, infinite scroll loading, or any number of other features it supports out of the box.</Text> 
                </View>  
                <View>
                  <Text style={styles.first.mid}> <Text style={styles.first.txt}> IOS </Text> allows using props like alwaysBounceHorizontal/Vertical, bounces, bouncesZoom, canCancelContentTouces, content ContainerStyle, contentInset, directional Lock Enabled, indicator Style, maintainVisibleContentPosition and more.</Text> 
                </View>
              </View> 
            </ScrollView>           
          </View>    
        </View>   
      </View>   
    );
  }
}