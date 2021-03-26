# Laboratorium 1 - Aplikacja startowa - Kalkulator

Zadaniem tego laboratorium było utworzenie kalkulatora. W tym celu tworzyłam go za pomocą **Expo**. Treść zadań i zagadnień do realizacji:

![Treść zadań](https://i.imgur.com/1bufSBx.png)

### Spis treści:

1. [Wykonanie](https://github.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/tree/master/Lab1#wykonanie-zadania-wraz-ze-zrzutami-ekranu)
2. [Wygląd oraz działanie](https://github.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/tree/master/Lab1#wygl%C4%85d-kalkulatora-oraz-dzia%C5%82anie)
    - [Animacje](https://github.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/tree/master/Lab1#animacja-dla-podstawowych-dzia%C5%82a%C5%84-kalkulatora)

## Wykonanie zadania wraz ze zrzutami ekranu

Dla kalkulatora najpierw utworzyłam konstruktor. Deklaruję również stany:

- **input** - dla wpisywanych równań
- **result** - dla wyniku

Poza tym deklarowane są wszystkie działania *operations*, które będą używane później w funkcji operationBtn, aby określić ich poszczególne działanie.

![Constructor](https://i.imgur.com/7EgRU8p.png)

Utworzyłam funkcję **syntaxCheck()**, który sprawdza, czy zapis na wejściu jest prawidłowy. W przypadku, kiedy ostatnim symbolem będzie jeden z wymienionych znaków, wynik zostaje zamieniony na tekst "*Synax Error*". Działa to na zasadzie prostego if-a, który w przypadku wystąpienia zmienia dany stan "czyszcząc" jednocześnie pole z równaniem. 

![SyntaxCheck](https://i.imgur.com/1JfS6cF.png)

Do samych obliczeń wykorzystana jest funkcja ***eval()***, która w przypadku, kiedy argument jest typu string, ta funkcja zajmuje się obliczaniem takiego równania.  Argumentem dla tej funkcji może być zarówno równanie, jak i po prostu działanie na liczbach. Sama funkcja ***calculate()*** tak jak poprzednia, zmienia stan wyniku.

![Getting the result](https://i.imgur.com/WSerKsb.png)

W przypadku, kiedy zostanie wciśnięty przycisk "**=**",  następuje wywołanie dwóch wcześniej zdeklarowanych, opisanych wyżej funkcji. Wywoływane są one w celu sprawdzenia wyniku oraz wykonania działania za pomocą funkcji *eval()*. Na wyjściu zostaje również dopisana wartość, aby móc kontynuować działanie lub usuwać poprzednie liczby, które zostały wpisane, również po obliczeniu działania.

![Equals](https://i.imgur.com/YHnbnnk.png)

Funkcja, którą nazwałam ***operationBtns()***, odpowiada za wykonywanie odpowiednich operacji w przypadku wciśnięcia w inne znaki działań. Jeśli jest to przycisk **C**, wymazywane są wartości z obydwu pól, zarówno input, jak i result. 

![](https://i.imgur.com/cslE9OD.png)

Kolejnym if-em w tej funkcji jest działanie **DEL**, które usuwa ostatni symbol zapisany w równaniu w danej chwili. Polega to na rozdzieleniu całego równania na poszczególne znaki, a następnie usunięcie tego ostatniego i połączenie je w całość, jeden łańcuch, dla *input*.

![](https://i.imgur.com/OqfeOr3.png)

Kolejnym podpunktem są zwykłe działania, czyli m.in **dodawanie czy mnożenie**. W przypadku kiedy te przyciski zostaną wciśnięte dane działanie dodawane jest to równania.

![](https://i.imgur.com/fv242si.png)

Ostatnim w tej funkcji if-em jest ten dla **silni**, który jest jedynym wyjątkiem, przy którym nie trzeba klikać znaku równości aby otrzymać wynik za pomocą prostej funkcji iteracyjnej.

![](https://i.imgur.com/n1R3khl.png)

Podczas renderowania tworzone są nowe tablice dla rzędów, liczb (gdzie deklarowane są poszczególne liczby, znak równości i kropka, które będą dodawane w poszczególnych rzędach). Tworzone są 4 kolumny oraz 3 wiersze, gdzie do wiersza przypisywane są liczby zadeklarowane wcześniej. Wykorzystanie styli.

![](https://i.imgur.com/kyMnTfX.png)

Tak samo dla działań na liczbach tworzona jest tablica, gdzie gdzie używając pętli for dodawane jest dla 6 wierszy poszczególne operatory. 

![](https://i.imgur.com/dAwSCF9.png)

Następnie za pomocą `<View>` oraz `<Text>` dodawane są rows oraz calcOps.

## Wygląd kalkulatora oraz działanie

![Wygląd](https://i.imgur.com/p5ABMGf.png)

### Animacja dla podstawowych działań kalkulatora:

![](https://i.imgur.com/5Y7WS48.gif)

### Animacja dla silni:

![](https://i.imgur.com/JUCchjH.gif)