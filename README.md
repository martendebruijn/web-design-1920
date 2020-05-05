# 🎓Web Design @cmda-minor-web 1920 👨🏻‍💻Marten de Bruijn

![Screenshot van de applicatie](#)

- [ ] README
  - [ ] Introductie
  - [ ] Concept
  - [ ] Usertests
    - [ ] test 1
    - [ ] test 2
    - [ ] test 3
  - [ ] controls omschrijven
  - [ ] wishlist
- [ ] RUBRIC
  - [x] Student kan uitleggen wat de Exclusive Design Principles zijn.
    - [x] Study Situation
    - [x] Ignore conventions
    - [x] Prioritise identity
    - [x] Add nonsens
  - [ ] Student laat zien hoe de Exclusive Design Principles zijn toegepast in het ontwerp.
  - [ ] Readme: In de beschrijving van het project staat de opdracht uitgelegd, is het probleem duidelijk beschreven en hoe het probleem is opgelost.
  - [ ] Er is een user scenario geschreven dat aansluit bij de identiteit van de test persoon
    - [ ] Er is een duidelijk en volledig user scenario geschreven dat antwoord geeft op de 4 w-vragen: Who? What? How? en Why?
  - [ ] Er zijn verschillende tests gedaan en verwerkt om het ontwerp te verbeteren.
    - [ ] Conclusies!
  - [ ] De student kan een test opzetten en toepassen in een ontwerp

## Exclusive Design Principles

Er zijn vier exclusive desing principles: study situation, ignore conventions, prioritise identity en add nonsense. Hieronder beschrijf ik kort wat deze design principles precies inhoudt.

### Study Situation

Het principle study situation gaat volledig over het onderzoeken van desbetreffende situatie. Om daadwerkelijk exclusief voor één persoon te ontwerpen, moet men een goede kennis hebben van de situatie. Hier kan men de volgende vragen bij gebruiken:

- Wie is dit persoon?
- Tegen welke problemen loopt hij aan?
- Welke lichamelijke beperking heeft hij?
- Hoe gebruikt hij computers?
- Hoe navigeert hij over het web?
- Etc.

### Ingore Conventions

De orginele conventie zegt dat men moet blijven bij de conventies die bekend zijn bij mensen. Echter werken deze conventies niet altijd even goed voor iedereen; in het bijzonder bij mensen met een lichamelijke beperking. Hierdoor moet men onderzoeken of deze conventiens nodig zijn - en bruikbaar zijn - voor degene waar je voor aan het ontwerpen bent.

### Prioritise Identity

Dit principle gaat over dat het product echt voor diegene ontworpen wordt. Het mens bestuderen en een product speciaal voor hen maken, is al een goede stap in deze richting. Maar kan nog beter door hen bij het ontwerpproces te betrekken.

### Add nonsense

Het add nonsense principle gaat over het ontwerp meer maken dan alleen functioneel. Door 'onzin' toe te voegen aan het ontwerp.

## 👾 Introductie

De module web design gaat over het ontwerpen en testen van interactie. Tijdens deze module kregen we een ontwerp opdracht specifiek voor één mens. Het ontwerp hebben we drie maal getest met dit persoon. Op basis van de uitkomsten van de testen verbeterde we het ontwerp. Deze testen moesten, vanwege de Covid-19 tijden waar wij momenteel in leven, remote gebeuren. Dit was een extra uitdaging.

Het persoon voor wie ik de ontwerp opdracht ging maken was Marijn Meijles. Marijn is een programmeur, houdt erg veel van metal muziek, heeft een vrouw en twee kinderen en woont in Eindhoven. Maar Marijn heeft ook een motorische stoornis. Dit betekent dat hij veel moeite heeft met fijne motoriek. Hij gebruikt zijn computer met alleen zijn linkerhand: met zijn duim gebruikt hij het trackpad, maar vooral gebruikt hij het toetsenbord om te navigeren. Ook heeft hij sticky keys aan staan op zijn Mac.

Voor Marijn is een drag and drop operatie lastig - alhoewel in de tests bleek dat dit hem vrij goed af ging, maar dat terzijde. De ontwerpvraag bij deze opdracht was:

> Hoe kun je een drag and drop lijst optimaliseren voor een gebruiker die afhankelijk is van zijn toetsenbord én motorisch gestoord is?

## ✏️ Ontwerpproces

### Hoe werkt een drag and drop eigenlijk?

Ikzelf had nog nooit een drag and drop gemaakt. Voordat ik begon met het maken van een ontwerp voor Marijn begon ik met het onderzoeken hoe een - normale - drag and drop werkt. Dit deed ik op basis van [de standaarde van HTML](https://html.spec.whatwg.org/#dnd). In de wiki van deze repo kan men [een samenvatting](https://github.com/martendebruijn/web-design-1920/wiki/dnd) vinden van deze standaarden.

### Hoe werkt een accessible drag and drop?

Na het maken van een normale drag and drop, ging ik onderzoeken hoe men het toegankelijk kan maken. Dit heb ik gedaan op basis van [dit artikel](https://dev.opera.com/articles/accessible-drag-and-drop/). In de wiki van deze repo kan men [een samenvatting](https://github.com/martendebruijn/web-design-1920/wiki/accesible-drag-drop) vinden van dit artikel.

### De eerste test - 08-04-2020

#### Voor de test

De eerste test was meteen op de eerste dag van de module. Dit veroorzaakte dat ik - en bijna iedereen uit het team - nog niet een prototype had om daadwerkelijk te testen. Hierom hadden we als groep afgesproken om hele basis prototypes te maken. Zodat we konden zien hoe Marijn met deze om gaat als ze niet toegankelijk zijn gemaakt. Ook hadden we als groep een aantal vragen opgesteld voor Marijn.

#### De test

Wat meteen opviel aan Marijn was dat hij veel lacht. Marijn beschreef zichzelf dan ook als opgewekt, bedreven en analytisch. Ook heeft hij er een hekel aan als mensen niet nadenken. Hij is regelmatig te vinden in de moshpit bij stoner metal concerten. **Eindhoven Rock City!**

Om te navigeren gebruikt hij alleen zijn linkerhand. Met zijn duim gebruikt hij het trackpad. De tab gebruikt hij weinig of niet. Verder gebruikt hij vooral de enter toets, shift toets en de pijltjes toetsen. Ook maakt hij gebruik van sneltoetsen door sticky keys te gebruiken. Naast de sticky keys gebruikt hij geen andere hulpmiddelen. Hij maakt gebruik van Chrome, Safari, OSX en heeft een van de nieuwere iPhones. Verder gaf hij mee dat hij gewoon kan typen en dat we gebruik moesten maken van het feit dat hij een programmeur is.

Het remote testen ging moeizaam. Doordat Marijn moeite heeft met praten was hij vrijwel niet te verstaan. Ook is het onhandig dat we niet kunnen zien hoe hij interacteert met zijn computer. Hierdoor is het een beetje giswerk op welke keys we ons moeten gaan richten. In de nabespreking met Vasilas hebben we afgesproken dat Vasilas voor de andere twee testen naar Eindhoven gaat. Hier kan hij het toetsenbord van Marijn filmen en fungeren als tolk voor ons.

### Eerste concept

Wat kan men maken met een drag and drop? Ik stelde mijzelf de vraag: waar gebruik ik drag and drop?. Al snel dacht ik aan Trello. Hier kwam het idee om een Agile Scrum bord te maken.

<img src="/img/schets-1-concept-1.JPG" height="500" />
![Schets Agile Bord 2](/img/schets-2-concept-1.JPG)

Echter vond ik dit concept toch te saai. Hierdoor ging ik brainstormen wat ik kon doen om het concept leuker te maken. Uiteindelijk kwam ik op het idee om [de agenda van de Effenaar](https://www.effenaar.nl/agenda) - de concerthal van Eindhoven - erbij te pakken. En zo kwam ik bij het uiteindelijke concept.

![Schets Effenaar Concept](/img/schets-1-concept-2.png)

## 🕹 Live Demo

[Bekijk hier de live demo 😃](https://martendebruijn.github.io/web-design-1920/)

## 🧙‍♂️ Usage

### Clone the repository

```zsh
git clone https://github.com/martendebruijn/web-design-1920.git
cd web-design-1920
```

### Controls

`HJKL` `arrow left` `arrow up` `arrow down` `arrow right` `enter`

## 📍 Table of Contents

- [👨🏻‍💻 User tests](#user-tests)
- [✨ Whishlist](#-Whishlist)
- [🙌 Credits](#-Credits)
- [📚 Sources](#-Sources)

## 👨🏻‍💻 User Test

### Test 1 - 00/00/0000

#### Voor de test

#### Uitkomst

### Test 2 - 15/04/2020

#### Voor de test

##### Plan

Allereerst wil ik mijn concept uitleggen aan Marijn vóórdát hij mijn prototype ziet. Daarna wil ik hem vragen om eerst te proberen om met mijn prototype te werken, zonder uitleg én ook zonder het informatie veld te openen. Wanneer hij er echt niet uitkomt wil ik hem vragen om het informatie veld te openen. Deze test wil ik mij vooral focussen op de, door mij, gekozen navigatie-toetsen.

##### Vragen

- Zijn de huidige navigatie toetsen goed te bereiken voor u?
- Zou u iets anders zien aan de navigatie toetsen?
- Is de visuele feedback van welk element geselecteerd is en waar een element heen kan gaan, duidelijk?
- Heeft u nog andere feedback?

#### Uitkomst

### Test 3 - 00/00/0000

#### Voor de test

#### Uitkomst

## ✨ Whishlist

## 🙌 Credits

- [Meyerweb: CSS Reset](http://meyerweb.com/eric/tools/css/reset/)
- Vasilas van Gemert voor het op en neer rijden naar Eindhoven om te fungeren als tolk en het toetsenbord van Marijn te filmen.

## 📚 Sources

📖 Artikel & Documentation **|** ⚙️ Code **|** 📹 Video **|** 🛠 Tools **|** 📓 Has notes in the wiki of this repo

- 📖 [Accessible drag and drop](https://dev.opera.com/articles/accessible-drag-and-drop/) **|** [📓Summary](https://github.com/martendebruijn/web-design-1920/wiki/accesible-drag-drop)
- 📖 [HTML - Living Standard](https://html.spec.whatwg.org/#dnd) **|** [📓Summary: How to make a drag and drop component](https://github.com/martendebruijn/web-design-1920/wiki/dnd)
- 📖 [Aria Practices](https://w3c.github.io/aria-practices/examples/menubar/menubar-1/menubar-1.html)
- 🛠 [Keycodes](https://keycode.info/)
- 📖 [Exclusive Design - Vasilis van Gemert](https://exclusive-design.vasilis.nl/)

❤️ Thanks for reading ❤️<br/>
❤️ Marten de Bruijn ❤️
