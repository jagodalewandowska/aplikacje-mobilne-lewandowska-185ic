import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  constructor(){
    super();
    this.state={
      input: "",
      result: ""
    };    
    this.operations=['DEL','C','+','-','*','/','!'];
  }
  
  // Sprawdzenie, czy ostatni symbol wpisany przez użytkownika nie jest równy operatorowi
  // Zamiana wyniku na Syntax Error
  syntaxCheck(){
    const calc = this.state.input
    if (calc.slice(-1) == '+' || calc.slice(-1) == '-' || calc.slice(-1) == '*' || calc.slice(-1) == '/' || calc.slice(-1) == '.') {
      return this.setState ({
        input: '',
        result: 'Syntax ERROR'        
      })
    }
    return true
  }

  // Obliczanie z zapisu za pomocą funkcji eval, która pobiera zawartość input
  calculateResult(){
  const calc = this.state.input
  this.setState({
      result: eval(calc)
    })
  }

  // Funkcja wywołana przy wciśnięciu '='
  calculate(calc){
    if(calc == '='){      
      // Sprawdzenie, czy zapis jest poprawny 
      // oraz wywołanie obliczenia wyniku końcowego
      return this.syntaxCheck() && this.calculateResult()
    }
    this.setState({
      input: this.state.input + calc,
    })    
  }

  operationBtns(action) {    
    // Wymazywanie obliczeń i wyników
    if (action == 'C') {
      return this.setState ({
        input: '',
        result: ''
      })
    } 
    // Usuwanie ostatniego znaku w działaniu
    if (action == 'DEL') {
      // Tworzenie tablicy zamieniające działanie na poszczególne znaki 
      // rozdzielając je i dodając do niej
      let calc = this.state.input.split('')
      // Usunięcie ostatniego symbolu
      calc.pop()
      // Łączenie symboli
      this.setState({
        input: calc.join(''),
        result: ''
      })
    }     
    // Jeśli zostanie użyty jeden z operatorów następuje 
    // dodanie go do pola z obliczeniami
    if (action == '+' || action == '-' || action == '*' || action == '/') {      
      this.setState({
        input: this.state.input + action
      })    
    }

    // obliczanie silni
    if (action == '!') {
      let value = 1;
      for (let i = 2; i <= this.state.input; i++)
        value = value * i;
        return this.setState ({
          input: '',
          result: value
        }) 
    } 
  }  

  render() {
    // Utworzenie tablic dla rzędów i liczb
    let rows = [];
    let nums = [[7,8,9],[4,5,6],[1,2,3],[0,'.','=']];
    // Utworzenie 4 kolumn
    for(let i=0; i<4; i++){
      let row = [];
      // Utworzenie 3 wierszy
      for(let j=0; j<3; j++){
        row.push(
          // dodawanie na koniec wartości do tablicy utworzonej wcześniej dla 3 pozycji
          <TouchableOpacity onPress={() => this.calculate(nums[i][j])} style={styles.btns}>
            <Text style={styles.btntext}>
              {nums[i][j]}
            </Text>
          </TouchableOpacity>);
      }
      // Dodawanie wierszy i elementów do tablicy rows
      rows.push(
        <View style={styles.row}>
          {row}
        </View>);
    }
    // utworzenie tablicy dla operacji na liczbach
    let calcOps = [];
    for(let i=0; i<7; i++){
      calcOps.push(
        // Dodawanie do tablicy wszystkich z zdeklarowanych operacji (DEL, C, +, -, ...)
        <TouchableOpacity onPress={() => this.operationBtns(this.operations[i])} style={styles.btns}>
            <Text style={[styles.btntext, styles.oper]}>
              {this.operations[i]}
            </Text>
        </TouchableOpacity>)
    } 
    // wyświetlanie poszczególnych rzędów w kalkulatorze
    return (
      <View style={styles.container}>
        <View style={styles.solution}>
          <Text style={styles.input}>{this.state.input}</Text>
        </View>
        <View style={styles.calculation}>
          <Text style={styles.result}>{this.state.result}</Text>
        </View>
        <View style={styles.buttons}>
          <View style={styles.numbers}>
            {rows}
          </View>
          <View style={styles.operations}>
            {calcOps}
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    row: {
      flexDirection: 'row',
      flex: 1,
      justifyContent: 'space-around',
      alignItems: 'center'
    },
    // położenie przycisków
    buttons: {
      flex: 4,
      flexDirection: 'row'
    },
    numbers: {
      flex: 4,
      backgroundColor: '#D2D4D6'
    },
    operations: {
      flex: 1,
      justifyContent: 'space-around',
      alignItems: 'stretch',
      backgroundColor: '#41A7A7'
    },
    // wielkość klawiszy
    btntext: {
      fontSize: 30,     
    },
    // kolor znaków dzialania
    oper: {
      color: 'white',
    },
    // wyrównywanie i dodawanie ramek
    btns: {
      flex: 1,
      alignItems: 'center',
      alignSelf: 'stretch',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: '#232122'      
    },
    // wynik
    result: {
      fontSize: 40,
      color: 'white'       
    },
    // działanie
    input: {
      fontSize: 30,
      color: 'white'
    },
    // pole z wynikiem
    solution: {
      flex: 1,
      backgroundColor: '#1F1F1F',
      justifyContent: 'center',
      alignItems: 'flex-end'     
    },
    // pole z obliczeniami
    calculation: {
      flex: 1,
      backgroundColor: '#006164',
      justifyContent: 'center',
      alignItems: 'flex-end' 
    }
});