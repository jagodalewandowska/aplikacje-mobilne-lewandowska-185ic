# Laboratorium 5 - Obsługa gestów użytkownika

![](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab5/screenshots/1.png)

## Wykonanie zadania wraz ze zrzutami ekranu

Wykorzystuję nawigację do przechodzenia do ekranów z głównego ekranu Menu oraz tworzę przyciski by można było również pomiędzy nimi. Sama aplikacja posiada cztery ekrany zgodnie z założeniami laboratorium.

![](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab5/screenshots/2.png)

## First.js  -  czyli pierwsze wykorzystanie ScrollView 

Pierwszy ScrollView jest to prosty scroll, który występuje na całości aplikacji - z wyjątkiem nawigacji która jest zawsze na górze aplikacji. Aby ScrollBar był zawsze widoczny wykorzystuję następujący parametr:

```javascript
<ScrollView 
	persistentScrollbar={true}>    # Widoczność Scrollbar
	...
</ScrollView>
```

Następnie sama aplikacja za pomocą flex oraz szerokości danych elementów dzieli się na pewnego typu siatkę, gdzie wykorzystuję również <Image .../>. Formatowanie tekstu, zmiana marginesów, padding - wszystko zawarte jest w **styles.js**:

![image-20210425150921359](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab5/screenshots/3.png)

Sam kod do wyświetlania całej sekcji <ScrollView>:

![image-20210425151029124](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab5/screenshots/4.png)

Wygląd i działanie ekranu:

![image-20210425151029124](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab5/screenshots/scrollview1.gif)

## Second.js - drugie wykorzystanie ScrollView

W górnej części znajduje się poziomy ScrollView, który został utworzony dzięki parametrowi, który został umieszony pomiędzy View, który w stylach wykorzystuje *flexDirection: row*, dzięki czemu wszystkie zdjęcia umieszczone są obok siebie. Styl dla obrazów nadaje im kształt kwadratu.

```javascript
<ScrollView horizontal={true}>
    <Image source={{ uri: '...'}} style={styles.second.img2}/>
        ...
</ScrollView>
```

Następnie pod nim znajduje się podzielony ekran 40% do 60%, w którym element po prawej stronie to również ScrollView pionowy.

![image-20210425153432894](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab5/screenshots/5.png)

W nim znajdują się zmapowane zespoły zdeklarowane wcześniej:

![image-20210425153507106](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab5/screenshots/6.png)

Wygląd i działanie ekranu:

![image-20210425151029124](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab5/screenshots/scrollview2.gif)

## Touchable.js - TouchableOpacity oraz TouchableHighlight

Wszystkie przyciski do nawigacji w aplikacji wykorzystują TouchableOpacity. TouchableHighlight zostało wykorzystane do zliczania ile razy został wciśnięty , a także do wyświetlania komunikatu przy jego kliknięciu. Na zrzutach ekranu jest to stan pierwotny, następnie po wciśnięciu 3 razy, a na ostatnim wciśnięcie drugiego przycisku Alert. 

![image-20210425154155892](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab5/screenshots/7.png)

Pierwszy TouchableHighlight przyjmuje parametry dla *underlayColor*, *style* oraz *onPress*. 

![image-20210425154441334](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab5/screenshots/8.png)

Wywoływana zostaje funkcja onPressTH, która zmienia state countrTH na o 1 większy.

```javascript
onPressTH = () => {
    this.setState({
        countTH: this.state.countTH + 1
    });
};
```

Następnie wykorzystuję **import { WebView } from 'react-native-webview';** dzięki którego importowi możliwe będzie wyszukiwanie danej frazy w Google. Operowanie na stanach show, search. Utworzony zostaje modal, który jest widoczny tylko po wciśnięciu **TouchableOpacity**. Deklarowany zostaje przycisk powrotu do ekranu aplikacji. w **<WebView>** ustawiany zostaje source na link do wyszukiwania google, gdzie na koniec dopisywane jest słowo wprowadzone w TextInput. 

![image-20210425155048001](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab5/screenshots/9.png)

Sam TextInput wykorzystuje funkcję strzałkową handleName, dzięki któremu przekazywany jest tekst do wyszukiwania.

```javascript
  handleName = (text) => {
    this.setState({ search: text })
  }
```

Pod nagłówkiem znajduje się miejsce w którym pojawi się modal po wciśnięciu przycisku.

![image-20210425155314487](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab5/screenshots/10.png)

Po wciśnięciu TouchableOpacity stan show zmienia się na true, a modal się pojawia.

![image-20210425155622639](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab5/screenshots/11.png)

Wygląd i działanie ekranu:

![image-20210425151029124](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab5/screenshots/touchable.gif)

























