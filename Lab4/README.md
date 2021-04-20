# Laboratorium 4 - Obsługa danych wprowadzanych przez użytkownika + modale

![image-20210420112245608](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab4/screenshots/1.png)

## Wykonanie zadania wraz ze zrzutami ekranu

![image-20210420114953246](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab4/screenshots/9.png)

Do wykonania nawigacji ponownie użyłam react-navigation oraz stack-navigation. W **App.js** znajdują się zdeklarowane ekrany tak jak na poprzednich zajęciach.  Import wszystkich komponentów z folderu /components.

```
import Home from './components/Home';
import Switcher from './components/Switch';
import Selecter from './components/Select';
import DatePick from './components/DatePicker';
import ToastAndroid from './components/ToastAndroid';
import TextIn from './components/TextIn';
```

## TextInput - komponent TextIn.js

W celu utworzenia przycisków do nawigacji tworzona została funkcja:

```
export default function(props) {
  const navigation = useNavigation();
  return <TextIn {...props} navigation = {navigation} />;
}
```

W utworzonej klasie TextIn znajduje się konstruktor, w którym deklaruję różne stany.

![image-20210420112707372](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab4/screenshots/2.png)

- **Przykład 1** - Przekazywanie parametrów do komunikatu. 

![image-20210420113101833](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab4/screenshots/3.png)

W tym przykładzie wykorzystałam *placeholder*, *keyboardType* oraz *onChangeText*. W przypadku wpisania tekstu do danego input używana jest funkcja setState dla odpowiedniego stanu, funkcja handleAlert wywołuje powiadomienie z tymi danymi i tekstem.

![image-20210420113251987](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab4/screenshots/4.png)  



---

- **Przykład 2** - TextInput z wieloma liniami 

![image-20210420113852058](C:\Users\Jagoda\AppData\Roaming\Typora\typora-user-images\image-20210420113852058.png)

Wykorzystanie *multiline*, *numberOfLines*, ustawionym tekstem domyślnym *value* wykorzystującym tekst z konstruktora, onChangeText który wywołuje funkcję *handleMultiline* oraz ustawienie maksymalnego długości tekstu *maxLength*. 

![image-20210420113642094](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab4/screenshots/5.png)

Przy wciśnięciu przycisku zlicz znaki, liczba znaków w danym momencie jest zliczana. 

![image-20210420114022755](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab4/screenshots/6.png)

Po dodaniu tekstu:

![image-20210420113956472](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab4/screenshots/29.png)  



---

- **Przykład 3** - Blokada input po wciśnięciu przycisku.

![image-20210420114126182](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab4/screenshots/30.png)

![image-20210420114416938](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab4/screenshots/8.png)

Domyślnie ustawiona wartość *editable* to false, po wciśnięciu przycisku Edytuj wywoływana jest funkcja handleEditable, gdzie zmieniany jest stan na przeciwny.

![image-20210420114222934](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab4/screenshots/7.png)

## Select/Picker - komponent Select.js

- **Przykład 1** - Wykorzystanie Select z zdefiniowanymi wcześniej danymi w konstruktorze.

Utworzyłam klasę Select, którą wykorzystuję do tworzenia Picker'a w pierwszym i drugim przykładzie. 

![image-20210420115146707](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab4/screenshots/31.png)

W konstruktorze w klasie Selecter tworzę stałą selections z przykładowymi danymi:

![image-20210420115226468](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab4/screenshots/32.png)

Następnie wyświetlane są one za pomocą zdefiniowanej klasy Select:

```
<Select style={styles.body.txt} items={this.state.selections}/>
```

![image-20210420115050784](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab4/screenshots/10.png) 



---

- **Przykład 2** - Pobieranie asynchroniczne danych do Select.

Utworzyłam przykładowy plik **db.json**, który umieściłam we własnym repozytorium.

![image-20210420115554294](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab4/screenshots/11.png)

Utworzyłam funkcję która za pomocą fetch pobiera te elementy ustawiając state name na dany zespół:

![image-20210420115529735](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab4/screenshots/12.png)

Ładowanie danych:

![image-20210420115716548](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab4/screenshots/13.png)

Opcje wyświetlają się po chwili:

![image-20210420115733662](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab4/screenshots/14.png)  



---

- **Przykład 3** - Zablokowane opcje w Select.

![image-20210420115932583](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab4/screenshots/16.png)

Trzecim przykładem jest Select z zablokowanymi opcjami, dane wprowadzam inaczej, tradycyjną metodą:

![image-20210420115900659](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab4/screenshots/18.png)

## Switch - komponent Switch.js

Utworzyłam mySwitch, który zwraca modal z losową liczbą. Ustawienie koloru dla false oraz true, stylu w styles.js, przezroczystości dla modalu, zmiana switch przy zamknięciu go. 

Switch: 

![image-20210420120405504](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab4/screenshots/17.png)

Modal:

![image-20210420120430966](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab4/screenshots/19.png)

W Switcher wywoływany jest on pod nawigacją:

```
<View style={styles.modal.switch}>
    <Text style={styles.body.txt}>Kliknij w element, aby otworzyć modal: </Text>
    <MySwitch/><Text/>
</View>
```

Działanie:

![image-20210420120700048](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab4/screenshots/20.png)

## DatePicker - komponent DatePicker.js

![image-20210420120810234](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab4/screenshots/21.png)

Import:

```
import DatePicker from 'react-native-datepicker';
```

W konstruktorze tworzę stan date: new Date(). Dla elementu DatePicker wybieram styl, onDateChange - zmiana stanu oraz wyświetlenie alertu, domyślny stan (data dzisiejsza), mode, format, placeholder.

![image-20210420121223768](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab4/screenshots/23.png)

Wybranie daty:

![image-20210420121003277](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab4/screenshots/22.png)

## ToastAndroid - komponent ToastAndroid.js

Ostatnim komponentem jest ToastAndroid. Pod nawigacją umieszczona jest krótka informacja o tym API, po wciśnięciu OPEN następuje wywołanie ToastButton. Następuje utworzenie myPromise oraz losowego czasu trwania modala. Wykorzystanie go podczas używania funkcji setTimeout. Podczas spełnienia obietnicy element modal jest zamykany.

![image-20210420122225409](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab4/screenshots/24.png)

Następnie zwracany jest przycisk "OPEN", który po wciśnięciu wywołuje trzy funkcje, w tym tworzenie nowej obietnicy.

![image-20210420122717478](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab4/screenshots/26.png)

Następnie utworzony jest modal z ustawioną przezroczystością. Wyświetlana jest wartość z informacją, za ile sekund zostanie on zamknięty.

![image-20210420122648962](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab4/screenshots/25.png)

W samej klasie Toaster umieszony jest on pod nawigacją:

![image-20210420122811980](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab4/screenshots/27.png)

Działanie:

![image-20210420122922308](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab4/screenshots/28.png)

## Animacje

#### 1. TextInput

![](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab4/screenshots/text.gif)

#### 2. Select

![](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab4/screenshots/select.gif)

#### 3. Switch

![](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab4/screenshots/switch.gif)

#### 4. DatePicker

![](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab4/screenshots/date.gif)

#### 5. ToastAndroid

![](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab4/screenshots/toast.gif)