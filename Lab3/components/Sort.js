import React, {Component} from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

// utworzenie nawigacji
export default function(props) {
  const navigation = useNavigation();
  return <Sort {...props} navigation = {navigation} />;
}

// stała Nums - zwracająca pseudolosowe liczby
const Nums = ({ numbers }) => {
var key = 0;
  return (
    <ScrollView>
      {numbers.map(number => 
        <Text key={key++} style={styles.sort.nums}> 
          {number} 
        </Text>
      )}
    </ScrollView>
  );
};

// klasa Sort
export class Sort extends Component {
  constructor(){
    super();
    const numbers = [];
    // Losowanie podstawowej tablicy liczb po otworzeniu okna
    for (let i = 0; i < 100; i++) {
      numbers.push(Math.floor(Math.random() * 999)+2);        
    }
    this.state = { 
      numbers
    };
  }
  
  // Sortowanie rosnąco
  sortInc = () => {
    this.state.numbers.sort((a,b) => a > b ? 1:-1);
    this.forceUpdate();
  }

  // Sortowanie malejąco
  sortDec = () => {
    this.state.numbers.sort((a,b) => a > b ? -1:1);
    this.forceUpdate();
  }
  
  // Losowanie nowych liczb
  randomize = () => {
    const randomized = []
    for (let i = 0; i < this.state.numbers.length; i++) {
      randomized.push(Math.floor(Math.random() * 999)+2);
    }
    this.state.numbers = randomized;
    this.forceUpdate();
  }

  render () {
    const { navigation } = this.props;
    return (
    <View style={styles.state.container}> 
      <View style={styles.state.ctr}>
        <View style={styles.state.btn}>        
          <View style={styles.state.nav}>
          {/* ------------------------------ NAWIGACJA ------------------------------ */}
            <Text style={styles.sort.txt}>Nawigacja:</Text> 
            <TouchableOpacity style={styles.sort.home} onPress={() => navigation.push('Strona Główna')}>
              <Text style={styles.sort.text}>Home</Text>
            </TouchableOpacity> 
            <TouchableOpacity style={styles.sort.button} onPress={() => navigation.push('Lazy')}>
              <Text style={styles.sort.text}>Lazy Loading</Text>
            </TouchableOpacity>      
            <TouchableOpacity style={styles.sort.button} onPress={() => navigation.push('First')}>
                <Text style={styles.sort.text}>Progress Steps</Text>
            </TouchableOpacity>
            {/* ------------------------------- OPCJE ------------------------------- */}
            <Text style={styles.sort.txt}>Wybierz opcję:</Text> 
            <TouchableOpacity style={styles.sort.btn} onPress={this.randomize}>
              <Text style={styles.sort.text}>Nowe liczby</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sort.btn} onPress={this.sortInc}>
              <Text style={styles.sort.text}>Sortuj rosnąco ⬆ </Text>
            </TouchableOpacity> 
            <TouchableOpacity style={styles.sort.btn} onPress={this.sortDec}>
              <Text style={styles.sort.text}>Sortuj malejąco ⬇</Text>
            </TouchableOpacity>                   
          </View>
        </View>       
        <View style={styles.sort.ctr}>
            <Nums numbers={this.state.numbers} />
        </View> 
      </View>        
    </View>
    )
  };
}