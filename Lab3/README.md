# Laboratorium 3 - Renderowanie listy danych + Obsługa procesu

![Treść zadań](https://i.imgur.com/oCFsHdj.png)

### Spis treści:

...

## Wykonanie zadania wraz ze zrzutami ekranu

Do wykonania nawigacji ponownie użyłam react-navigation oraz stack-navigation. Po zainstalowaniu oraz zaimportowaniu wykorzystałam główne menu z poprzedniego laboratorium, dlatego stylistyka została taka sama, zmienione zostały tytuły, nazwy i komponenty. Przykład dla Step Progress  w **App.js**, ponieważ reszta deklarowana jest w taki sam sposób:

```
const Stack = createStackNavigator();

<Stack.Screen options={{
    title: 'Step progress',
    headerStyle: {
    	backgroundColor: '#AEDEE0',
    },
	headerTintColor: '#1F1F1F',
	headerTitleStyle: {
	fontSize: 20,
	color: 'white',
	}
}} 
	name = 'First' 
	component = {First} />
```

Komponent **Home** odpowiada za wyświetlanie obrazka, zdefiniowane są również przyciski odnoszące do kolejno Sortowania, Lazy Loading oraz Step Progress. Wykorzystanie **styles.js** do wszystkich przycisków, oscylowania strony.

![1](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab3/screenshots/1.png)

## Sort.js - Sortowanie danych

Ze względu na utworzenie klasy Sort jako rozszerzenia komponentu, aby wykorzystać nawigację należy najpierw ją zadeklarować tak, by móc ją używać w przechodzeniu pomiędzy ekranami.

![image-20210415100229743](C:\Users\Jagoda\aplikacje-mobilne-lewandowska-185ic\Lab3\screenshots\2.png)

Następnie w samym elemencie renderowania przekazuję utworzony wcześniej element, a także tworzę przyciski do pozostałych ekranów.

![image-20210415100343339](C:\Users\Jagoda\aplikacje-mobilne-lewandowska-185ic\Lab3\screenshots\3.png)

Tworzenie stałej Nums, która będzie zwracała pseudolosowe liczby w tablicy, wykorzystując funkcję map(). Wyświetlane będą one w ScrollView zaimportowanym z 'react-native-gesture-handler'.

![image-20210415100616666](C:\Users\Jagoda\aplikacje-mobilne-lewandowska-185ic\Lab3\screenshots\4.png)

W samej klasie Sort tworzony jest konstruktor, w której deklarowana jest tablica *numbers*. Przy otwarciu ekranu losowane są wartości przypisywane do tej tablicy.

![image-20210415101003422](C:\Users\Jagoda\aplikacje-mobilne-lewandowska-185ic\Lab3\screenshots\5.png)

Utworzone zostały trzy funkcje strzałkowe:

- **sortInc** - Odpowiadające za sortowanie wartości od najmniejszej do największej - rosnąco

  ![image-20210415101231332](C:\Users\Jagoda\aplikacje-mobilne-lewandowska-185ic\Lab3\screenshots\6.png)

- **sortDec** - Sortowanie wartości od największej do najmniejszej - malejąco

  ![image-20210415101320837](C:\Users\Jagoda\aplikacje-mobilne-lewandowska-185ic\Lab3\screenshots\7.png)

- **randomize** - Generowanie nowych liczb

  ![image-20210415101334871](C:\Users\Jagoda\aplikacje-mobilne-lewandowska-185ic\Lab3\screenshots\8.png)

Wykorzystana została funkcja **forceUpdate()**, która w przypadku, kiedy metoda render zależy od innych danych przekazuje ona do React aby komponent został na nowo zrenderowany. Wywołany render() będzie pomijał shouldComponentUpdate() -  React zaaktualizuje tylko DOM w przypadku zmian. Przyciski odpowiadające za wywoływanie odpowiednich funkcji:

![image-20210415102212761](C:\Users\Jagoda\aplikacje-mobilne-lewandowska-185ic\Lab3\screenshots\9.png)

Ekran sortowania wygląda więc następująco:

![image-20210415103630933](C:\Users\Jagoda\AppData\Roaming\Typora\typora-user-images\image-20210415103630933.png)

## Lazy.js oraz Loading.js - Lazy Loading

W tej sam sposób jak w Sortowaniu, aby korzystać z nawigacji z użyciem props eksportowana jest domyślna funkcja:

```
export default function(props) {
  const navigation = useNavigation();
  return <Lazy {...props} navigation = {navigation} />;
}
```

W celu korzystania z Lazy Loading tworzona jest nowa zmienna - Loading. Za pomocą **React.Lazy()** można tworzyć komponenty ładowane przy użyciu dynamicznego import(), jednak są one renderowane jako zwykły komponent. React.Lazy() jako argument przyjmuje funkcję która musi zwracać "Promise" poprzez wywoływanie importu do załadowania tego komponentu.

```
const Loading = React.lazy(() => import('./Loading'));
```

Utworzony został Loading.js, który odpowiada za generowanie listy danych, gdzie danymi są pseudolosowe litery.

![image-20210415104435868](C:\Users\Jagoda\aplikacje-mobilne-lewandowska-185ic\Lab3\screenshots\11.png)

Oparte jest to na przykładzie ze strony [programiz](https://www.programiz.com/javascript/examples/generate-random-strings), jednak w wyświetlane dane są za pomocą **ScrollView**.

