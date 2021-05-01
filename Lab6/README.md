# Laboratorium 6 - Obsługa obrazów + tryb offline

![image-20210501193044146](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab6/screenshots/1.png)

## Spis treści:

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

### ConnectionTest.js - Sprawdzanie połączenia internetowego