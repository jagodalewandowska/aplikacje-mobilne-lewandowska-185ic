# Laboratorium 2 - Responsywne Layouty + Nawigacja

Zadaniem tego laboratorium było utworzenie 3 ekranów za pomocą react-navigation, wykorzystując przejścia stack-navigator. Krótki opis Spread Operators, Rest Parameters oraz useState.

![Treść zadań](https://i.imgur.com/A0wAs5S.png)

### Spis treści:

1. [Konfigurowanie nawigacji](https://github.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/tree/master/Lab2#wykonanie-zadania-wraz-ze-zrzutami-ekranu)
2. [Wygląd oraz działanie](https://github.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/tree/master/Lab2#wygl%C4%85d-poszczeg%C3%B3lnych-ekran%C3%B3w)
    - [Strona główna](https://github.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/tree/master/Lab2#1-strona-g%C5%82%C3%B3wna-home)
    - [Spread Operator](https://github.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/tree/master/Lab2#2-spread-operator)
    - [Rest Parameters](https://github.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/tree/master/Lab2#3rest-parameters)
    - [Use State](https://github.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/tree/master/Lab2#4-usestate)
3. [Animacja](https://github.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/tree/master/Lab2#animacja-przechodzenia-pomi%C4%99dzy-ekranami)

## Wykonanie zadania wraz ze zrzutami ekranu

Do wykonania aplikacji użyłam react-navigation oraz stack-navigation. Po zainstalowaniu muszą one być również zaimportowane w **App.js**:

```
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
```

Tutaj zdefiniowane są wszystkie ekrany wraz z właściwościami jakie przyjmują (tytuł, tło, wielkość fonta). Wszystkie elementy po zadeklarowaniu "Stack" zawinięte są w NavigationContainer oraz Stack.Navigator.

1. **Strona główna**

![Strona główna](https://i.imgur.com/Yl0epJD.png)

2. **Spread Operator**

![Spread Operator](https://i.imgur.com/w24kFPu.png)

3. **Rest Parameters**

![Rest Parameters](https://i.imgur.com/YJNYqq7.png)

4. **UseState**

![UseState](https://i.imgur.com/D0YlOIs.png)

## Wygląd poszczególnych ekranów

![](https://i.imgur.com/mQskMXG.png)

### 1. **Strona główna "Home"**

Styl dla strony głównej, jak i dla innych komponentów jest w pliku styles.js. Występują tu trzy przyciski oraz fotografia na górze strony.

![](https://i.imgur.com/CUh0GZS.png)

Ustawione zostały parametry flex dla całości panelu "nav" oraz paneli. Ustawienie wyglądu, marginesów dla przycisków oraz wielkość obrazka. Wszystkie elementy znajdują się jeden pod drugim.

![](https://i.imgur.com/h1xSbFd.png)

Wygląd ekranu:

![](https://i.imgur.com/oAVJnLl.png)

### 2. **Spread Operator**

Na początku zadeklarowałam example, calls, arr i key zawierające przykładowe kody dla danego zagadnienia.

![](https://i.imgur.com/M4ZS2dE.png)

Zwracana zostaje nawigacja na samej górze strony używając **flexDirection** - **row**, dzięki czemu przyciski znajdują się obok siebie. Każdy View jest określony w pliku styles, a zadeklarowane wcześniej zmienne z częściami kodu zostają wyświetlane w odpowiednim miejscu. Za pomocą tych elementów utworzyłam widok dwukolumnowy, po dodany został tekst po całej szerokości.

![](https://i.imgur.com/hWNVOym.png)

Styles.js dzielący na pół stronę, zawijanie tekstów, ustawienie marginesów dla poszczególnych paragrafów i przycisków do nawigacji.

![](https://i.imgur.com/BnLnEf7.png)

Wygląd ekranu:

![](https://i.imgur.com/hvMRL6R.png)

### 3. **Rest Parameters** 

Rest Parameters posada przyciski pod tekstem, natomiast sam tekst podzielony w kolumnie. Na samym początku znów zadeklarowane są zmienne z przykładowym kodem, następnie cały wygląd strony jest "zawinięty" w widok z odpowiadającymi stylami.

![](https://i.imgur.com/IEZhEAe.png)

Fragment **styles.js**:

![](https://i.imgur.com/MpIosZ4.png)

Wygląd ekranu:

![](https://i.imgur.com/j0ISYAN.png)

### 4. **UseState**

Ostatnim ekranem jest UseState, w którym podzielona została strona w proporcji 40%-60%. Dodane jest również zdjęcie, jak i fragment kodu.

![](https://i.imgur.com/VTfz3X0.png)

Ustawianie w **styles.js**:

![](https://i.imgur.com/VqMmuaX.png)

A także ustalenie wartości dla tekstu, wygląd kodu oraz wielkość obrazka:

![](https://i.imgur.com/WOioqz4.png)

Wygląd ekranu:

![](https://i.imgur.com/U9QRMIW.png)

## Animacja przechodzenia pomiędzy ekranami

![](https://im2.ezgif.com/tmp/ezgif-2-2d7c458a73e6.gif)