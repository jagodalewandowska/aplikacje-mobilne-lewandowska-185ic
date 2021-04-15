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

![image-20210415100229743](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab3/screenshots/2.png)

Następnie w samym elemencie renderowania przekazuję utworzony wcześniej element, a także tworzę przyciski do pozostałych ekranów.

![image-20210415100343339](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab3/screenshots/3.png)

Tworzenie stałej Nums, która będzie zwracała pseudolosowe liczby w tablicy, wykorzystując funkcję map(). Wyświetlane będą one w ScrollView zaimportowanym z 'react-native-gesture-handler'.

![image-20210415100616666](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab3/screenshots/4.png)

W samej klasie Sort tworzony jest konstruktor, w której deklarowana jest tablica *numbers*. Przy otwarciu ekranu losowane są wartości przypisywane do tej tablicy.

![image-20210415110154944](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab3/screenshots/5.png)

Utworzone zostały trzy funkcje strzałkowe:

- **sortInc** - Odpowiadające za sortowanie wartości od najmniejszej do największej - rosnąco

  ![image-20210415101231332](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab3/screenshots/6.png)

- **sortDec** - Sortowanie wartości od największej do najmniejszej - malejąco

  ![image-20210415101320837](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab3/screenshots/7.png)

- **randomize** - Generowanie nowych liczb

  ![image-20210415110224557](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab3/screenshots/8.png)

Wykorzystana została funkcja **forceUpdate()**, która w przypadku, kiedy metoda render zależy od innych danych przekazuje ona do React aby komponent został na nowo zrenderowany. Wywołany render() będzie pomijał shouldComponentUpdate() -  React zaaktualizuje tylko DOM w przypadku zmian. Przyciski odpowiadające za wywoływanie odpowiednich funkcji:

![image-20210415102212761](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab3/screenshots/9.png)

Ekran sortowania wygląda więc następująco:

![image-20210415103630933](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab3/screenshots/10.png)

## Lazy.js oraz Loading.js - Lazy Loading

W tej sam sposób jak w Sortowaniu, aby korzystać z nawigacji z użyciem props eksportowana jest domyślna funkcja w **Lazy.js**:

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

Utworzony został **Loading.js**, który odpowiada za generowanie listy danych, gdzie danymi są pseudolosowe litery.

![image-20210415104435868](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab3/screenshots/11.png)

Oparte jest to na przykładzie ze strony [programiz](https://www.programiz.com/javascript/examples/generate-random-strings), jednak w wyświetlane dane są za pomocą **ScrollView**. Samo wykorzystanie polega na wykorzystaniu Suspense. **React.Suspense()** jest ładowany tylko wtedy, kiedy musi. React.Suspense zaprojektowany jest tak, aby w czasie ładowania "lazy component" wyświetlał dany element. W moim przykładzie jest to tekst "Trwa ładowanie". Umożliwia on zawieranie wielu komponentów na różnych poziomach hierarchii w jednym Suspense. Samo Loading length przekazuje do Loading ilość symboli która będzie wygenerowana.

```
<Suspense fallback={<Text>Trwa ładowanie...</Text>}>
	<Loading length='150000'/>
</Suspense>
```

Wyświetlanie wygląda następująco:

![image-20210415115559291](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab3/screenshots/12.png)

## Step Progress

Do utworzenia progresu skokowego użyłam **react-native-progress-steps**. Dodanie go za pomocą polecenia:

```
yarn add react-native-progress-steps
```

Na samym ekranie widnieją przyciski do nawigacji do innych ekranów. Wszystkie kroki "zawinięte" są w **ProgressSteps**, który został zmodyfikowany stylistycznie:

![image-20210415120105780](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab3/screenshots/13.png)

- **Pierwszy ekran** -  krok

Następnie tworzony jest **ProgressStep** dla każdego z trzech kroków. Modyfikuję tekst oraz styl dla przycisków do przełączania, dodaję tekst wewnątrz kroku, aby różnił się na każdym ekranie. **ActivityIndicator** ma wielkość large, a także odpowiedni kolor.

![image-20210415120251718](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab3/screenshots/14.png)

- **Drugi ekran** - krok

Kolejny ekran tworzony jest na takiej samej zasadzie, tym razem dodaję również zmianę tekstu na przycisk powracający do poprzedniego ekranu. **ActivityIndicator** zmienia wielkość na small wraz z kolorem.

![image-20210415120417855](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab3/screenshots/15.png)

- **Trzeci ekran** - krok

Ostatnim ekranem jest ten z odnośnikiem do Strony głównej.  Zmiana tekstu, dodanie funkcji do **onSubmit**, gdzie jest ona strzalkowa i wykorzystuje nawigację i funkcję navigate(). **ActivityIndicator** znowu zmienia wielkość i kolor.

![image-20210415120526601](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab3/screenshots/16.png)

Wygląd ekranów i przejść:

![image-20210415121006918](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab3/screenshots/17v2.png)