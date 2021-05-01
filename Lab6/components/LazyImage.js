import React, { useState, useEffect, Component }  from 'react';
import { TouchableOpacity, View, Text, ScrollView, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Entypo, Zocial, SimpleLineIcons } from '@expo/vector-icons';
import { Image } from 'react-native-elements';
import styles from './styles';

export default function(props) {
  const navigation = useNavigation();
  return <LazyImage {...props} navigation = {navigation} />;
}

export class LazyImage extends Component {  
  render(){
    const { navigation } = this.props;      
    return (
      <View style={styles.con.container}> 
        {/* Nawigacja */}
        <View style={styles.con.nav}>   
          <TouchableOpacity style={styles.con.home} onPress={() => navigation.push('Strona Główna')}>
              <Text style={styles.con.text}>Home</Text>
          </TouchableOpacity>         
          <TouchableOpacity style={styles.con.button} onPress={() => navigation.push('ImageRequire')}>
              <Text style={styles.con.text}>Image</Text>
          </TouchableOpacity>        
          <TouchableOpacity style={styles.con.button} onPress={() => navigation.push('ChangeSlider')}>
              <Text style={styles.con.text}>Slider</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.con.button} onPress={() => navigation.push('ConnectionTest')}>
              <Text style={styles.con.text}>Test</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.con.button} onPress={() => navigation.push('AsyncStore')}>
              <Text style={styles.con.text}>Async</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.con.button} onPress={() => navigation.push('SyncData')}>
              <Text style={styles.con.text}>SyncData</Text>
          </TouchableOpacity>
        </View>   
        <View style={styles.body.container}>        
          <ScrollView>         
            <View style={{marginTop: '5%'}}>
              <Text style={styles.first.mid}> Ładowanie dużego zdjęcia za pomocą uri, użycie <Text style={styles.first.txt}>react-native-elements & ActivityIndicator:</Text></Text>
              <Image
              source={{ uri: 'https://external-preview.redd.it/z-4C8Oa2Q7swTQ2usKsrloZnP0LT03DjIoAHpqdpy7M.jpg?width=960&crop=smart&auto=webp&s=e1edd872d3f6dfd928afdd3298ad475a5e47ef2c' }}
              style={{ width: '100%', height: 200 }}
              PlaceholderContent={<ActivityIndicator color = '#006164' size = 'large'/>}/>             
            </View>                       
            <View style={{marginTop: '5%', marginBottom: '2%'}}>
              <Text style={styles.first.mid}> Wykorzystanie ikon <Text style={styles.first.txt}>@expo/vector-icons</Text></Text>
            </View>
            <ScrollView>
              <View style={styles.first.icons}>
                <Zocial name='appstore' size={20} color='#006164' />
                <Zocial name='bitcoin' size={20} color='#006164' />
                <Zocial name='android' size={20} color='#006164' />
                <Zocial name='acrobat' size={20} color='#006164' />
                <Zocial name='creativecommons' size={20} color='#006164' />
                <Zocial name='dropbox' size={20} color='#006164' />
                <Zocial name='drupal' size={20} color='#006164' />
                <Zocial name='chrome' size={20} color='#006164' />
                <Zocial name='evernote' size={20} color='#006164' />
                <Zocial name='facebook' size={20} color='#006164' />
                <Zocial name='email' size={20} color='#006164' />
                <Zocial name='github' size={20} color='#006164' />
                <Zocial name='google' size={20} color='#006164' />
                <Zocial name='gmail' size={20} color='#006164' />
                <Zocial name='forrst' size={20} color='#006164' />
                <Zocial name='flickr' size={20} color='#006164' />
                <Zocial name='ie' size={20} color='#006164' />
                <Zocial name='itunes' size={20} color='#006164' />
                <Zocial name='instagram' size={20} color='#006164' />
                <Zocial name='klout' size={20} color='#006164' />
                <Zocial name='logmein' size={20} color='#006164' />
                <Zocial name='myspace' size={20} color='#006164' />
                <Zocial name='paypal' size={20} color='#006164' />
                <Zocial name='pinterest' size={20} color='#006164' />
                <Zocial name='reddit' size={20} color='#006164' />
                <Zocial name='stackoverflow' size={20} color='#006164' />
                <Zocial name='skype' size={20} color='#006164' />
                <Zocial name='rss' size={20} color='#006164' />
                <Zocial name='spotify' size={20} color='#006164' />
                <Zocial name='steam' size={20} color='#006164' />
                <Zocial name='twitter' size={20} color='#006164' />
                <Zocial name='vk' size={20} color='#006164' />
                <Zocial name='windows' size={20} color='#006164' />
                <Zocial name='wordpress' size={20} color='#006164' />
                <Zocial name='xing' size={20} color='#006164' />
                <Zocial name='yahoo' size={20} color='#006164' />
              </View>
              <View style={styles.first.icons}>
                <SimpleLineIcons name='bubbles' size={20} color='#006164' />
                <SimpleLineIcons name='briefcase' size={20} color='#006164' />
                <SimpleLineIcons name='book-open' size={20} color='#006164' />
                <SimpleLineIcons name='basket-loaded' size={20} color='#006164' />
                <SimpleLineIcons name='basket' size={20} color='#006164' />
                <SimpleLineIcons name='bag' size={20} color='#006164' />
                <SimpleLineIcons name='action-undo' size={20} color='#006164' />
                <SimpleLineIcons name='action-redo' size={20} color='#006164' />
                <SimpleLineIcons name='wrench' size={20} color='#006164' />
                <SimpleLineIcons name='umbrella' size={20} color='#006164' />
                <SimpleLineIcons name='trash' size={20} color='#006164' />
                <SimpleLineIcons name='tag' size={20} color='#006164' />
                <SimpleLineIcons name='support' size={20} color='#006164' />
                <SimpleLineIcons name='frame' size={20} color='#006164' />
                <SimpleLineIcons name='size-fullscreen' size={20} color='#006164' />
                <SimpleLineIcons name='share-alt' size={20} color='#006164' />
                <SimpleLineIcons name='share' size={20} color='#006164' />
                <SimpleLineIcons name='rocket' size={20} color='#006164' />
                <SimpleLineIcons name='question' size={20} color='#006164' />
                <SimpleLineIcons name='pie-chart' size={20} color='#006164' />
                <SimpleLineIcons name='pencil' size={20} color='#006164' />
                <SimpleLineIcons name='note' size={20} color='#006164' />
                <SimpleLineIcons name='loop' size={20} color='#006164' />
                <SimpleLineIcons name='home' size={20} color='#006164' />
                <SimpleLineIcons name='grid' size={20} color='#006164' />
                <SimpleLineIcons name='graph' size={20} color='#006164' />
                <SimpleLineIcons name='microphone' size={20} color='#006164' />
                <SimpleLineIcons name='music-tone-alt' size={20} color='#006164' />
                <SimpleLineIcons name='music-tone' size={20} color='#006164' />
                <SimpleLineIcons name='earphones-alt' size={20} color='#006164' />
                <SimpleLineIcons name='earphones' size={20} color='#006164' />
                <SimpleLineIcons name='equalizer' size={20} color='#006164' />
                <SimpleLineIcons name='like' size={20} color='#006164' />
                <SimpleLineIcons name='dislike' size={20} color='#006164' />
                <SimpleLineIcons name='control-play' size={20} color='#006164' />
                <SimpleLineIcons name='control-pause' size={20} color='#006164' />
              </View>
              <View style={styles.first.icons}>
                <Entypo name='cycle' size={20} color='#006164' />
                <Entypo name='database' size={20} color='#006164' />
                <Entypo name='dial-pad' size={20} color='#006164' />
                <Entypo name='direction' size={20} color='#006164' />
                <Entypo name='document' size={20} color='#006164' />
                <Entypo name='documents' size={20} color='#006164' />
                <Entypo name='dot-single' size={20} color='#006164' />
                <Entypo name='download' size={20} color='#006164' />
                <Entypo name='dribbble' size={20} color='#006164' />
                <Entypo name='drink' size={20} color='#006164' />
                <Entypo name='drive' size={20} color='#006164' />
                <Entypo name='drop' size={20} color='#006164' />
                <Entypo name='dropbox' size={20} color='#006164' />
                <Entypo name='edit' size={20} color='#006164' />
                <Entypo name='email' size={20} color='#006164' />
                <Entypo name='emoji-flirt' size={20} color='#006164' />
                <Entypo name='emoji-happy' size={20} color='#006164' />
                <Entypo name='emoji-neutral' size={20} color='#006164' />
                <Entypo name='emoji-sad' size={20} color='#006164' />
                <Entypo name='erase' size={20} color='#006164' />
                <Entypo name='eraser' size={20} color='#006164' />
                <Entypo name='evernote' size={20} color='#006164' />
                <Entypo name='export' size={20} color='#006164' />
                <Entypo name='feather' size={20} color='#006164' />
                <Entypo name='facebook' size={20} color='#006164' />
                <Entypo name='fingerprint' size={20} color='#006164' />
                <Entypo name='flag' size={20} color='#006164' />
                <Entypo name='flash' size={20} color='#006164' />
                <Entypo name='flashlight' size={20} color='#006164' />
                <Entypo name='flattr' size={20} color='#006164' />
                <Entypo name='flow-line' size={20} color='#006164' />
                <Entypo name='flower' size={20} color='#006164' />
                <Entypo name='folder' size={20} color='#006164' />
                <Entypo name='github' size={20} color='#006164' />
                <Entypo name='gauge' size={20} color='#006164' />
                <Entypo name='game-controller' size={20} color='#006164' />
              </View>
            </ScrollView>
          </ScrollView>
        </View>   
      </View>   
    );
  }
}