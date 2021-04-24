import React, { usesecond, useEffect, Component }  from 'react';
import { TouchableOpacity, View, Text, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

export default function(props) {
  const navigation = useNavigation();
  return <Second {...props} navigation = {navigation} />;
}

export class Second extends Component {  
  state = {
    bands: [
      {'id': 1, 'band': 'Queen'},
      {'id': 2, 'band': 'The Beatles'},
      {'id': 3, 'band': 'The Killers'},
      {'id': 4, 'band': 'The Lumineers'},
      {'id': 5, 'band': 'Bee Gees'},
      {'id': 6, 'band': 'U2'},
      {'id': 7, 'band': 'Alvvays'},
      {'id': 8, 'band': 'Dire Straits'},
      {'id': 9, 'band': 'Two Door Cinema Club'},
      {'id': 11, 'band': 'Big Thief'},
      {'id': 12, 'band': 'The Kooks'},
      {'id': 13, 'band': 'Culture Club'},
      {'id': 14, 'band': 'The Cranberries'},
      {'id': 15, 'band': 'The Cure'},
      {'id': 16, 'band': 'The Smiths'},
      {'id': 17, 'band': 'Belle & Sebastian'},
      {'id': 18, 'band': 'Lighthouse Family'}
    ]
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
          <TouchableOpacity style={styles.con.button} onPress={() => navigation.push('Touchable')}>
              <Text style={styles.con.text}>Touchable</Text>
          </TouchableOpacity>        
          <TouchableOpacity style={styles.con.button} onPress={() => navigation.push('Swipeable')}>
              <Text style={styles.con.text}>Swipeable</Text>
          </TouchableOpacity>
        </View>              
        <View style={styles.con.nav}>
          <ScrollView horizontal={true}>
            <Image source={{ uri: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vdW50YWlufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}} style={styles.second.img2}/>
            <Image source={{ uri: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'}} style={styles.second.img2}/>
            <Image source={{ uri: 'https://images.unsplash.com/photo-1547093349-65cdba98369a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'}} style={styles.second.img2}/>
            <Image source={{ uri: 'https://images.unsplash.com/photo-1458668383970-8ddd3927deed?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1347&q=80'}} style={styles.second.img2}/>
            <Image source={{ uri: 'https://images.unsplash.com/photo-1439694458393-78ecf14da7f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80'}} style={styles.second.img2}/>
            <Image source={{ uri: 'https://images.unsplash.com/photo-1575908524891-b0bdd2b99f90?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fG1vdW50YWlufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}} style={styles.second.img2}/>
            <Image source={{ uri: 'https://images.unsplash.com/photo-1472791108553-c9405341e398?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fG1vdW50YWlufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}} style={styles.second.img2}/>
          </ScrollView>
        </View>   
        <View style={styles.second.ctr}>
          <View style={styles.second.btn}>
            <View style={styles.second.nav}>
            <Text style={styles.second.txt}> Flexbox works the same way in React Native as it does in CSS on the web, with a few exceptions. The defaults are different, with flexDirection defaulting to column instead of row, alignContent defaulting to flex-start instead of stretch, flexShrink defaulting to 0 instead of 1, the flex parameter only supporting a single number. </Text>
            <Image source={{ uri: 'https://images.unsplash.com/photo-1549880181-56a44cf4a9a5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'}} style={styles.second.img} />
            <Text style={styles.second.txt2}> flex will define how your items are going to “fill” over the available space along your main axis.</Text>
            </View>
          </View>
          <View style={styles.second.about}>
            <ScrollView persistentScrollbar={true}>
              { 
                this.state.bands.map((item, index) => (
                  <View key = {item.id} style={styles.second.item}>
                      <Text style={styles.home.text}>{item.band}</Text>
                  </View>
                ))
              }
            </ScrollView>
          </View>
        </View>   
      </View>      
    );
  }
}