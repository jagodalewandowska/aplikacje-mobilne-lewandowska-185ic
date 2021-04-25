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

Wygląd i działanie okna:

![image-20210425151029124](https://raw.githubusercontent.com/jagodalewandowska/aplikacje-mobilne-lewandowska-185ic/master/Lab5/screenshots/scrollview1.gif)





























