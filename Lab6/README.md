# Laboratorium 6 - Obsługa obrazów + tryb offline

![image-20210501193044146](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab6/screenshots/1.png)

## Spis treści:

1. [Wykonanie zadania](https://github.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/tree/master/Lab6#wykonanie-zadania-wraz-ze-zrzutami-ekranu)
2. [Image uri oraz require()](https://github.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/tree/master/Lab6#imagerequirejs---%C5%82adowanie-obraz%C3%B3w)
3. [Slider z wykorzystaniem Image uri i require()](https://github.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/tree/master/Lab6#changesliderjs---zmiana-rozmiaru-obraz%C3%B3w-przy-u%C5%BCyciu-slider)
4. [Leniwe ładowanie obrazu i ikon](https://github.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/tree/master/Lab6#lazyimagejs---%C5%82adowanie-obrazka-oraz-ikon)
5. [Test połączenia - NetInfo](https://github.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/tree/master/Lab6#connectiontestjs---sprawdzanie-po%C5%82%C4%85czenia-internetowego)
6. [AsyncStorage](https://github.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/tree/master/Lab6#asyncstorejs---wykorzystanie-modu%C5%82u-asyncstorage)
    - [setItem](https://github.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/tree/master/Lab6#setitem)
    - [getItem](https://github.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/tree/master/Lab6#getitem)
    - [clear](https://github.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/tree/master/Lab6#clear)
7. [Synchronizacja danych](https://github.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/tree/master/Lab6#syncdatajs---synchronizowanie-danych-przy-po%C5%82%C4%85czeniu-z-internetem)

## Wykonanie zadania wraz ze zrzutami ekranu

Do zadania wykorzystałam nawigację z głównego menu oraz pomiędzy ekranami. 

![image-20210501195058605](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab6/screenshots/2.png)

## ImageRequire.js - Ładowanie obrazów

Do ładowania obrazów wykorzystana jest właściwość uri oraz require. Odpowiednio są one odwzorowane w aplikacji. Import Images:

```javascript
import { (...) Image } from 'react-native';
```

- **uri**

```javascript
<Image source={{ uri: ' # url'}} style={styles.first.img} />
```

- **require()**

```javascript
<Image source={require('./img/example.png')} style={styles.first.img}/>
```

![image-20210501195741404](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab6/screenshots/3.png)

## ChangeSlider.js - Zmiana rozmiaru obrazów przy użyciu Slider

Po zainstalowaniu slidera zaimportowałam go, a następnie utworzyłam stany **first** oraz **second**, które definiują w jakim miejscu znajduje się kropka na suwaku przy uruchomieniu aplikacji dla obydwu zdjęć. Następnie utworzone zostały dwie funkcje strzałkowe **resize** oraz **resizeRequire**, dzięki którym przypisywane są dane wartości suwaka do odpowiedniego stanu.

![image-20210501200152571](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab6/screenshots/4.png)

Następnie pod nawigacją dodaję Image wraz suwakiem.

![image-20210501200236439](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab6/screenshots/5.png)

Ustawiam szerokość, wysokość, kolor suwaka i kropki, szarości - kiedy suwak nie jest przesunięty do końca, wartość początkową 1, wartość maksymalną i minimalną. **OnChangeValue** wywołuje funkcję resize. Skala obrazka jest zmieniana za pomocą **transform: [{ scale: this.state.first }]**, który przypisuje aktualną wartość suwaka do tej skali.

![image-20210501200425089](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab6/screenshots/6.png)

Drugi obrazek ładowany jest za pomocą **require**, zmieniłam wartości początkowe i minimalne, wywołanie resizeRequire przy zmianie oraz zmiana skali za pomocą stanu.

![image-20210501200728975](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab6/screenshots/7.png)

Animacja:

![](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab6/screenshots/slider.gif)

## LazyImage.js - ładowanie obrazka oraz ikon

Przy ładowaniu wykorzystałam **ActivityIndicator** z odpowiednimi parametrami do ustalenia wielkości i koloru, poza tym sam obraz Image ładuję przy użyciu **react-native-elements**, który pozwala mi na umieszczenie **placeholderContent** - a w nim animacji ładowania. 

![image-20210501200934103](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab6/screenshots/8.png)

Same ikony importuję następująco:

```javascript
import { Entypo, Zocial, SimpleLineIcons } from '@expo/vector-icons';
```

A następnie dla każdej z kategorii wybieram paręnaście przykładów. 

```javascript
...
    <Zocial name='appstore' size={20} color='#006164' />
        ...
    <SimpleLineIcons name='bubbles' size={20} color='#006164' />
        ...
    <Entypo name='cycle' size={20} color='#006164' />
...
```

Na zrzucie ekranu widać ładowanie po czasie zarówno ikon jak i obrazu. 

![image-20210501201438639](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab6/screenshots/9.png)

## ConnectionTest.js - Sprawdzanie połączenia internetowego

Po zaimportowaniu zainstalowanego Netinfo:

```javascript
import NetInfo from "@react-native-community/netinfo";
```

Wykorzystywana jest funkcja fetchState, która zwraca poszczególne informacje dotyczące połączenia np. typ połączenia, częstotliwość. 

![image-20210502130050397](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab6/screenshots/13.png)

Możliwe jest sprawdzenie, czy jest połączenie z Internetem. W przypadku kiedy jest dostępne połączenie, wyświetlana jest zielona ikona wykorzystywana w poprzednim ekranie, lub czerwona przy braku połączenia.

![image-20210502130004368](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab6/screenshots/10.png)

Tworzona jest również zmienna details, dzięki której wyświetlane jest (jeśli możliwe do określenia) ssid, siła sygnału, adres IP.

![image-20210502130102906](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab6/screenshots/12.png)

Następnie wyświetlane są otrzymane szczegóły i informacje. W przypadku SSID jeśli nie zostanie ono rozpoznanie, wyświetlana jest jego nazwa, w przeciwnym przypadku wyświetlany jest brak informacji - tak samo w przypadku częstotliwości; jeśli wykryte zostanie połączenie wyświetlana jest wartość.

![image-20210502130317477](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab6/screenshots/14.png)

Wygląd aplikacji:

![image-20210502130643052](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab6/screenshots/15.png)

## AsyncStore.js - wykorzystanie modułu AsyncStorage

Wygląd aplikacji:

![image-20210502144339237](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab6/screenshots/25.png)

Po instalacji import:

```javascript
import AsyncStorage from '@react-native-async-storage/async-storage';
```

- #### **setItem**

W pierwszej części aplikacji możliwe jest zapisywanie klucza oraz wartości dla niego, możliwe jest to dzięki zdefiniowaniu dwóch stanów **storedKey** oraz **storedValue**, następnie utworzona jest funkcja **storeData**:

![image-20210502135313117](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab6/screenshots/16.png)

W głównej części utworzyłam dwa **TextInput**, które odpowiednio zmieniają stan na wprowadzoną wartość. 

![image-20210502135714092](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab6/screenshots/19.png)

Po wciśnięciu "Zapisz" wywołanie funkcji **storeData**:

![image-20210502135752425](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab6/screenshots/20.png)

![](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab6/screenshots/setitem.gif)

W przypadku pozostawienia pól pustych wyskakuje komunikat o nich, a wartości nie są zapisywane.

![image-20210502143429673](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab6/screenshots/22.png)

- #### getItem

W drugiej części można wyszukiwać dane za pomocą **getItem**. Utworzona zostaje funkcja **retrieveData**:

![image-20210502135453261](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab6/screenshots/17.png)

**TextInput** wraz z przyciskiem szukaj:

![image-20210502143305059](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab6/screenshots/21.png)

Odnalezienie poprzednio dodanej wartości poprzez klucz.

![](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab6/screenshots/getItem.gif)

W przypadku jeśli klucz nie istnieje:

![image-20210502143834646](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab6/screenshots/23.png)

- #### **clear**

Ostatnią funkcją jest funkcja "czyszcząca" wszystkie zapisane rekordy - **clearStorage**. 

![image-20210502135553746](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab6/screenshots/18.png)

Przycisk wyczyść:

![image-20210502144056483](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab6/screenshots/24.png)

Klucz **123** nie zostaje odnaleziony po wymazaniu:

![](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab6/screenshots/clear.gif)

## SyncData.js - synchronizowanie danych przy połączeniu z Internetem

Utworzyłam dwa stany **offlineValue** oraz **onlineValue**, z czego ta druga jest aktualizowana tylko w przypadku połączenia z Internetem. 

```javascript
state = {
    offlineValue: '',
    onlineValue: ''
  }
```

W przypadku załadowaniu co 3 sekundy aktualizowane jest sprawdzanie, czy występuje połączenie z siecią. Jeśli tak, aktualizowany jest stan onlineValue przypisując wartość z offlineValue - który wskazuje wartość na Sliderze. Stan połączenia wykorzystuję za pomocą NetInfo oraz fetchState z jednego z poprzednich ekranów:

![image-20210502144736949](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab6/screenshots/26.png)

Jeśli połączenie jest dostępne ikona zmienia się na zieloną, a wartość aktualizuje po danym interwale. 

![](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab6/screenshots/stan.gif)

Utworzony panel z połączeniem wraz ze Sliderem - ustawienie kolorów, wartości kroków, wartości min i max, **onValueChange** wywołuje funkcję **checkValue**:

![image-20210502145106507](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab6/screenshots/27.png)

Funkcja asynchroniczna **checkValue** przypisująca wartość z suwaka do **offlineValue**.

![image-20210502145518749](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab6/screenshots/29.png)

Wyświetlanie wartości:

![image-20210502145134804](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab6/screenshots/28.png)

Przy braku połączenia liczba się nie aktualizuje, dopiero przy wykryciu i upływanie interwału który wykryje połączenie:

![](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab6/screenshots/bezpolaczenia.gif)

