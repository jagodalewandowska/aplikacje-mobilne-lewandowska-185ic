import React, { Component, Suspense }from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const Loading = React.lazy(() => import('./Loading'));

export default function(props) {
  const navigation = useNavigation();
  return <Lazy {...props} navigation = {navigation} />;
}

export class Lazy extends Component {
  render () {
    const { navigation } = this.props;
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
            <Text style={styles.sort.text}>Step Progress</Text>
        </TouchableOpacity>
      </View>   
      <Text style={styles.sort.txt}>Lazy loading - inaczej on-demand loading służy do ładowania ciężkich zasobów tylko w momencie, kiedy są potrzebne. Najczęściej używane jest podczas ładowania obrazów.</Text> 
      <View style={styles.sort.loaded}>
          <Suspense fallback={<Text>Trwa ładowanie...</Text>}>
            <Loading length='150000'/>
          </Suspense>
      </View>     
    </View>
    )
  };
}