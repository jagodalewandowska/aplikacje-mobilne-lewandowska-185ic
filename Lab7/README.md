# Lab 7 - Wykorzystanie bazy danych w aplikacji mobilnej

![image-20210510132634214](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab7/screenshot/image-20210510132634214.png)

## Wykonanie zadań wraz ze zrzutami ekranów

Do zadania wykorzystałam SQLite, które jest wspierane przez Expo. Zapewnia ona dostęp do bazy danych, którą można przeszukiwać za pośrednictwem interfejsu API. Instalacja za pomocą:

```
expo install expo-sqlite
```

W samym kodzie, aby móc z niej korzystać należy zaimportować ją poleceniem:

```javascript
import * as SQLite from 'expo-sqlite';
```

W zadaniu utworzyłam lokalną bazę danych, która obsługuje polecenia takie jak:

- **select** - określanie kształtu wyniku, wybieranie wartości do wyświetlenia
- **create table** - tworzenie nowej tabeli
- **insert into** - dodawanie wartości do tabeli
- **delete** - usuwanie wartości
- **update** - aktualizowanie danych (u mnie jest to zmiana z listy produktów na te w koszyku)

![image-20210510133219254](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab7/screenshot/image-20210510133119310.png)

Na samym początku w kodzie funkcję **openDatabase**, która otwiera nową bazę danych - jeśli nie istnieje, zwraca odpowiedni obiekt. Składnia: 
` SQLite.openDatabase(name, version, description, size). `

![image-20210510133319198](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab7/screenshot/image-20210510133319198.png)

Tworzę również funkcję **userForceUpdate**, która aktualizuje wartości **value**, wykorzystywana zostaje podczas aktualizacji zawartości tabeli w bazie danych. Następną funkcją jest funkcja **Products,** która odpowiada za wyświetlanie produktów na liście zakupów za pomocą **select * from**. Za jej pomocą wyświetlane zostają później poszczególe elementy, w zależności od tego jaką wartość *done* przyjmują.

![image-20210510133319133](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab7/screenshot/image-20210510133319133.png)

W przypadku, kiedy lista produktów jest pusta nie wyświetla żadnych elementów. Funkcja ta zwraca produkty za pomocą funkcji **map()** dla id, done oraz value. 

![image-20210510133744448](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab7/screenshot/image-20210510133744448.png)

Można zauważyć, że tworzone są przyciski z nazwami odpowiednich produktów na liście. Sprawdzanie jest, czy produkt znajduje się już w koszyku czy nie - zmieniany jest kolor tła na odpowiedni, a także zostaje użyty **textDecorationLine** na *line-through* który przekreśla daną wartość na liście.

![image-20210510133943128](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab7/screenshot/image-20210510133943128.png)

W konsoli wyświetlają się dodane wartości kolejno:

![image-20210510134021899](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab7/screenshot/image-20210510134021899.png)

Utworzyłam funkcję FirstDB, która tworzy nową tabelę z id, done oraz value ustawioną jako tekst.

![image-20210510134143117](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab7/screenshot/image-20210510134143117.png)

Następnie **add** odpowiada za dodawanie nowych produktów do listy. Wykorzystanie funkcji **transation, executeSql** - dla których w nawiasie przyjmowane być mogą kolejno:
- polecenie sql które zostanie wykorzystane, 
- argumenty, 
- a także funkcje: dla pomyślnej operacji i dla niepożądanej (błędu) 

Wykorzystanie także poleceń *insert into* oraz select * from items.

![image-20210510134324573](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab7/screenshot/image-20210510134324573.png)

W przypadku, kiedy nie zostanie wpisany tekst wyskakuje powiadomienie po wciśnięciu enter, ta wartość nie zostaje dodawana do bazy.

![image-20210510134235366](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab7/screenshot/image-20210510134235366.png)

Sama funkcja **FirstDB** zwraca widok listy zakupów - czyli na samym początku jest to nagłówek wraz z polem do wpisywania tekstu. Przy wysyłaniu wywoływana zostaje add(text), czyli ten znajdujący się w TextInput, a także usunięcie zawartości tego pola po dodaniu za pomocą *setText(null)*. Ustawienie placeholder, style, a także wartości.

![image-20210510134535709](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab7/screenshot/image-20210510134535709.png)

Następnie utworzyłam przycisk, który usuwa **całą** zawartość tabeli, wyświetlając później komunikat. 

![image-20210510134715683](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab7/screenshot/image-20210510134715683.png)

Animacja:

![](https://github.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/blob/master/Lab7/screenshot/deleteall.gif?raw=true)

Następnie tworzony jest **ScrollView**, który wyświetla zarówno 'listę zakupów' jak i elementy już z niego usunięte '*W koszyku'. Wykorzystuję utworzony prędzej Products, wyświetlający elementy 'done', czyli lista zakupów. **OnPressItem** wykorzystuje **update**, który zmienia wartość i dodaje element do koszyka, czyli kiedy done = 1.

![image-20210510135138176](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab7/screenshot/image-20210510135138176.png)

Natomiast w koszyku wyświetlane są elementy dla których done wynosi true. W przypadku kliknięcia na któryś z nich dany element zostaje usuwany.

![image-20210510135326377](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab7/screenshot/image-20210510135326377.png)

Animacja:

![](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab7/screenshot/deleteone.gif)

Prezentacja funkcji, podsumowanie:

![](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab7/screenshot/1and2.gif)