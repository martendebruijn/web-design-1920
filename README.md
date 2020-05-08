# 🎓Web Design @cmda-minor-web 1920 👨🏻‍💻Marten de Bruijn

![Screenshot van de applicatie](/img/screenshot-web-design.png)
![GIF van de applicatie](/img/web-design-eind-product.gif)

## 👾 Introductie

De module web design gaat over het ontwerpen en testen van interactie. Tijdens deze module kregen we een ontwerp opdracht specifiek voor één mens. Het ontwerp hebben we drie maal getest met dit persoon. Op basis van de uitkomsten van de testen verbeterde we het ontwerp. Deze testen moesten, vanwege de Covid-19 tijden waar wij momenteel in leven, remote gebeuren. Dit was een extra uitdaging.

Het persoon voor wie ik de ontwerp opdracht ging maken was Marijn Meijles. Marijn is een programmeur, houdt erg veel van metal muziek, heeft een vrouw en twee kinderen en woont in Eindhoven. Maar Marijn heeft ook een motorische stoornis. Dit betekent dat hij veel moeite heeft met fijne motoriek. Hij gebruikt zijn computer met alleen zijn linkerhand: met zijn duim gebruikt hij het trackpad, maar vooral gebruikt hij het toetsenbord om te navigeren. Ook heeft hij sticky keys aan staan op zijn Mac.

Voor Marijn is een drag and drop operatie lastig - alhoewel in de tests bleek dat dit hem vrij goed af ging, maar dat terzijde. De ontwerpvraag bij deze opdracht was:

> Hoe kun je een drag and drop lijst optimaliseren voor een gebruiker die afhankelijk is van zijn toetsenbord én motorisch gestoord is?

## ✏️ Concept

Een speciaal voor Marijn gemaakte concert planner van de Effenaar. De Effenaar is de concerthal van Eindhoven. Door middel van drag and drop kan hij concerten in verschillende lijsten zetten. Marijn kan concerten ordenen in 'wil ik heen', 'leuk voor de kinderen', 'misschien', 'hoef ik niet heen'. De lijst 'hoef ik niet heen' kan in de toekomst weggelaten worden; evenementen waar hij dan niet heen wilt kunnen dan meteen verwijderd worden. Echter voor de sake van het prototype heb ik deze erin gelaten, zodat het niet mogelijk is dat er geen kaarten meer zijn.

## 🕹 Live Demo

[Bekijk hier de live demo 😃](https://martendebruijn.github.io/web-design-1920/)

## 🧙‍♂️ Usage

### Clone the repository

```zsh
git clone https://github.com/martendebruijn/web-design-1920.git
cd web-design-1920
```

### Controls

- `HJKL` `arrow left` `arrow up` `arrow down` `arrow right` navigeren over de lijsten en kaarten
- `enter` selecteert een element
- `backspace` deselecteer een element

## ⚠️ Known Issues

- Als men de normale manier - met de muis - drag and drop gebruikt, klopt de keyboard navigatie niet meer.

## 📍 Table of Contents

- [👨🏻‍💻 User scenario](#-user-scenario)
- [💈 Exclusive Design Principles](#-exclusive-design-principles)
- [🎨 Ontwerpproces en usertests](#-ontwerpproces-en-usertests)
- [✨ Whishlist](#-Whishlist)
- [🙌 Credits](#-Credits)
- [📚 Sources](#-Sources)

## 👨🏻‍💻 User scenario

### Wie is de gebruiker voor wie ik ontwerp?

Het persoon voor wie ik de ontwerp opdracht ging maken was Marijn Meijles. Marijn is een programmeur, houdt erg veel van metal muziek, heeft een vrouw en twee kinderen en woont in Eindhoven. Maar Marijn heeft ook een motorische stoornis. Dit betekent dat hij veel moeite heeft met fijne motoriek. Hij gebruikt zijn computer met alleen zijn linkerhand: met zijn duim gebruikt hij het trackpad, maar vooral gebruikt hij het toetsenbord om te navigeren. Ook heeft hij sticky keys aan staan op zijn Mac.

#

### Wat wil deze gebruiker op mijn site?

Marijn vind het leuk om naar concerten te gaan. In het bijzonder metal concerten. Hoe fijn zou het zijn als hij in een oog omslag kan zien welke concerten in zijn lokale concerthal zijn; en deze kan sorteren in lijsten als 'wil ik heen', 'misschien' en 'leuk met de kinderen'.

#

### Hoe gaat deze gebruiker zijn doelen bereiken?

Omdat Marijn motorisch gestoord is, is zijn fijne motoriek niet goed. Hierom is het erg belangrijk dat de site toetsenbord-toegankelijk is. Echter zijn de normale conventies niet toepasbaar bij Marijn, omdat hij slechts zijn linkerhand gebruikt en maar een paar toetsen gebruikt.

#

### Waarom komt deze gebruiker naar mijn site?

Zodat hij op een gemakelijke manier concerten kan uitzoeken waar hij heen - of niet - wilt.

## 💈 Exclusive Design Principles

Er zijn vier exclusive desing principles: study situation, ignore conventions, prioritise identity en add nonsense. Hieronder beschrijf ik kort wat deze design principles precies inhoudt. Ook staat er een kleine omschrijving bij hoe ik de principles heb toegepast in mijn ontwerp. Voor een uitgebreidere uitleg kan men [mijn ontwerpproces](#-ontwerpproces-en-usertests) lezen.

### Study Situation

Het principle study situation gaat volledig over het onderzoeken van desbetreffende situatie. Om daadwerkelijk exclusief voor één persoon te ontwerpen, moet men een goede kennis hebben van de situatie. Hier kan men de volgende vragen bij gebruiken:

- Wie is dit persoon?
- Tegen welke problemen loopt hij aan?
- Welke lichamelijke beperking heeft hij?
- Hoe gebruikt hij computers?
- Hoe navigeert hij over het web?
- Etc.

#### Toepassing

Study situation heb ik in mijn concept toegepast door mij zo goed mogelijk in te leven in de situatie van Marijn en zijn leven. Bijvoorbeeld dat hij in Eindhoven woont, een vrouw en twee kinderen heeft, graag naar concerten gaat. Maar ook bijvoorbeeld dat hij de tab toets niet gebruikt. Dit had ik niet kunnen weten als ik geen onderzoek naar Marijn als persoon had gedaan.

#

### Ignore Conventions

De orginele conventie zegt dat men moet blijven bij de conventies die bekend zijn bij mensen. Echter werken deze conventies niet altijd even goed voor iedereen; in het bijzonder bij mensen met een lichamelijke beperking. Hierdoor moet men onderzoeken of deze conventiens nodig zijn - en bruikbaar zijn - voor degene waar je voor aan het ontwerpen bent.

#### Toepassing

Ignore Conventions was meteen op dag 1 al duidelijk. Naast dat er amper/geen conventies überhaupt zijn voor drag and drop, is het gebruik van de tab toets om te navigeren over links op websites niet bruikbaar voor Marijn. Marijn gebruikt de tab toets namelijk niet. Marijn maakt eigenlijk alleen gebruik van de rechterkant van zijn toetsenbord. En af en toe het trackpad.

#

### Prioritise Identity

Dit principle gaat over dat het product echt voor diegene ontworpen wordt. Het mens bestuderen en een product speciaal voor hen maken, is al een goede stap in deze richting. Maar kan nog beter door hen bij het ontwerpproces te betrekken.

#### Toepassing

Door bij de test goed te observeren en luisteren naar wat Marijn wilt. Hij is degene waar het uiteindelijk om draait. Dit principe blijkt uit dat in het prototype expres geen gebruik is gemaakt van heftige animaties of kleuren. Dit omdat Marijn daar niet van houdt. Hierom heb ik het UI zo netjes mogelijk geprobeert te houden. Maar ook dat het prototype draait om de agenda van de Effenaar in Eindhoven, waar hij woont. Ook het feit dat hij twee kinderen heeft, heb ik erin verwerkt door een aparte lijst te maken voor concerten die leuk zijn om met de familie heen te gaan.

#

### Add nonsense

Het add nonsense principle gaat over het ontwerp meer maken dan alleen functioneel. Door 'onzin' toe te voegen aan het ontwerp.

#### Toepassing

Add nonsense is het enige principle dat ik niet zo erg heb toegevoegd in mijn prototype. Mijn prototype is toch wat meer functioneel gericht. Nonsense die ik eventueel had kunnen toevoegen:

- Een toets gebruiken als randomizer. (Bijvoorbeeld de `r`...) Wanneer Marijn op deze knop drukt, er een willekeurig evenement te voor schijn komt. Dit zou ervoor kunnen zorgen dat Marijn evenementen zou kunnen zien die hij bij normaal gebruik niet zou zien.
- Een toets combinatie gebruiken dat degehele lay-out veranderd naar een donker Metal interface (met geluid).
- Als Marijn een kaart verwijderd dat men een (metal) geluid hoort. Dit zou ook kunnen met een animatie, echter vind Marijn zo'n animatie na een paar keer niet leuk meer en wordt het irritant.

## 🎨 Ontwerpproces en usertests

### 📍 O-Table of Contents

- [Hoe werkt een drag and drop eigenlijk?](#Hoe-werkt-een-drag-and-drop-eigenlijk)
- [Hoe werkt een accessible drag and drop?](#Hoe-werkt-een-accessible-drag-and-drop)
- [De eerste test - 08-04-2020](#De-eerste-test---08-04-2020)
- [Eerste concept](#Eerste-concept)
- [Nieuw concept](#Nieuw-concept)
- [Test 2 - 15-04-2020](#Test-2---15-04-2020)
- [Nieuwe controls](#Nieuwe-controls)
- [De laatste test - 22-04-2020](#De-laatste-test---22-04-2020)
- [Final touch](#Final-touch)

#

### Hoe werkt een drag and drop eigenlijk?

Ikzelf had nog nooit een drag and drop gemaakt. Voordat ik begon met het maken van een ontwerp voor Marijn begon ik met het onderzoeken hoe een - normale - drag and drop werkt. Dit deed ik op basis van [de standaarde van HTML](https://html.spec.whatwg.org/#dnd). In de wiki van deze repo kan men [een samenvatting](https://github.com/martendebruijn/web-design-1920/wiki/dnd) vinden van deze standaarden.

#

[Terug naar 📍 O-Table of Contents](#-o-table-of-contents)

#

### Hoe werkt een accessible drag and drop?

Na het maken van een normale drag and drop, ging ik onderzoeken hoe men het toegankelijk kan maken. Dit heb ik gedaan op basis van [dit artikel](https://dev.opera.com/articles/accessible-drag-and-drop/). In de wiki van deze repo kan men [een samenvatting](https://github.com/martendebruijn/web-design-1920/wiki/accesible-drag-drop) vinden van dit artikel.

![Accesible Drag and Drop](/img/accesible-dnd-1.png)

#

[Terug naar 📍 O-Table of Contents](#-o-table-of-contents)

#

### De eerste test - 08-04-2020

#### Voor de test

De eerste test was meteen op de eerste dag van de module. Dit veroorzaakte dat ik - en bijna iedereen uit het team - nog niet een prototype had om daadwerkelijk te testen. Hierom hadden we als groep afgesproken om hele basis prototypes te maken. Zodat we konden zien hoe Marijn met deze om gaat als ze niet toegankelijk zijn gemaakt. Ook hadden we als groep een aantal vragen opgesteld voor Marijn.

#### De test

Wat meteen opviel aan Marijn was dat hij veel lacht. Marijn beschreef zichzelf dan ook als opgewekt, bedreven en analytisch. Ook heeft hij er een hekel aan als mensen niet nadenken. Hij is regelmatig te vinden in de moshpit bij stoner metal concerten. **Eindhoven Rock City!**

Om te navigeren gebruikt hij alleen zijn linkerhand. Met zijn duim gebruikt hij het trackpad. De tab gebruikt hij weinig of niet. Verder gebruikt hij vooral de enter toets, shift toets en de pijltjes toetsen. Ook maakt hij gebruik van sneltoetsen door sticky keys te gebruiken. Naast de sticky keys gebruikt hij geen andere hulpmiddelen. Hij maakt gebruik van Chrome, Safari, OSX en heeft een van de nieuwere iPhones. Verder gaf hij mee dat hij gewoon kan typen en dat we gebruik moesten maken van het feit dat hij een programmeur is.

Het remote testen ging moeizaam. Doordat Marijn moeite heeft met praten was hij vrijwel niet te verstaan. Ook is het onhandig dat we niet kunnen zien hoe hij interacteert met zijn computer. Hierdoor is het een beetje giswerk op welke keys we ons moeten gaan richten. In de nabespreking met Vasilas hebben we afgesproken dat Vasilas voor de andere twee testen naar Eindhoven gaat. Hier kan hij het toetsenbord van Marijn filmen en fungeren als tolk voor ons.

#### Conclusie

- Vasilas gaat de volgende keren naar Eindhoven toe.
- Navigeren met links
- Niet of nauwelijks `tab`.

#

[Terug naar 📍 O-Table of Contents](#-o-table-of-contents)

#

### Eerste concept

Wat kan men maken met een drag and drop? Ik stelde mijzelf de vraag: waar gebruik ik drag and drop?. Al snel dacht ik aan Trello. Hier kwam het idee om een Agile Scrum bord te maken.

<img src="/img/schets-1-concept-1.JPG" height="500" />

![Schets Agile Bord 2](/img/schets-2-concept-1.JPG)

#

[Terug naar 📍 O-Table of Contents](#-o-table-of-contents)

#

### Nieuw concept

Echter vond ik dit concept toch te saai. Hierdoor ging ik brainstormen wat ik kon doen om het concept leuker te maken. Uiteindelijk kwam ik op het idee om [de agenda van de Effenaar](https://www.effenaar.nl/agenda) - de concerthal van Eindhoven - erbij te pakken. En zo kwam ik bij het uiteindelijke concept.

![Schets Effenaar Concept](/img/schets-1-concept-2.png)

De kleuren bij bovenstaande eerste schets heb ik gebaseerd op de - volgens de Rolling Stones, ik weet niks van metal - [top 3 metal albums aller tijden](https://www.rollingstone.com/music/music-lists/the-100-greatest-metal-albums-of-all-time-113614/?list_page=2#list-item-20).

Bij de headers van de lijsten heb ik emoticons toegevoegd om het wat spannender te maken. Voor de 'leuk voor de kinderen' lijst heb ik gekozen voor de 👨‍👨‍👦‍👦 emoticon, omdat Marijn een vrouw en twee kinderen heeft.

#

[Terug naar 📍 O-Table of Contents](#-o-table-of-contents)

#

### Test 2 - 15-04-2020

Het eerste wat Marijn zei toen hij mijn concept zag, was dat hij het een leuk idee vond. Verder ging de test niet zo soepel - of eigenlijk juist wel omdat ik er veel uit heb kunnen halen. Doordat de keyboard controls niet goed werkte en het prototype erg buggy was snapte Marijn er niks van. Ook had Marijn het voor elkaar gekregen om twee elementen te selecteren, terwijl dit niet de bedoeling was dat dit kon. Ook zag ik bij hem dat de scroll bars weergegeven worden - en hierdoor de lay-out verkeerd werd weergegeven. Bij mij is dit niet het geval. Later kwam ik erachter dat dit een instelling van je Mac is. De scroll bars heb ik later weggehaald door het parent element op `overflow: hidden` te zetten en het child element op `overflow-y: scroll` te zetten.

![Remote testing](/img/test-2.png)

Marijn had het ook over de `HJKL` toetsen op het toetsenbord. HJKL wordt gebruikt als alternatief voor de pijltjes toetsen. Dit stamt af van toen veel computers geen specifieke pijltjes toetsen hadden. Een ander voordeel van de `HJKL` toetsen is dat ze groter zijn en meer uitelkaar zitten dan de pijltjes toetsen. Hierdoor zijn de HJKL toetsen toegankelijker voor Marijn.

Bij mijn concept was het de bedoeling dat men eerst een lijst selecteert en vervolgens een element in die lijst selecteert. Wanneer men een element selecteert komt er een navigatie menu tevoorschijn. In dit menu kan men de lijst selecteren waar het element heen moet. Dit werkte niet soepel en besloot ik om dit sub-menu eruit te halen. In plaats van het sub-menu wilde ik dat nadat een element geselecteerd wordt men daarna met keyboard controls kan navigeren over de andere lijsten.

Ik had gekozen om enkel de spatiebalk en de entertoets te gebruiken. Mijn redenatie was dat beide knopper vrij groot zijn en niet direct naast elkaar zitten en dus goed en makkelijk te bedienen waren. Echter toen Marijn mijn prototype opende, ging hij er meteen van uit dat men kon navigeren met de pijltjes toetsten. Toen er niets gebeurde, moest ik de controls aan Marijn uitleggen.

#### Conclusie

- Andere controls bedenken
- Bugs fiksen
- Scroll bars weghalen
- Navigatie verbeteren

#

[Terug naar 📍 O-Table of Contents](#-o-table-of-contents)

#

### Nieuwe controls

Aan de hand van de tweede test kon ik concluderen dat de bedachte controls niet de juiste controls waren. Marijn had het erover dat hij ervan uit ging dat men kon navigeren door middel van de pijltjestoetsen. Ook is de enter toets een gebruikelijke toets om elementen te selecteren. Naast de pijltjes toetsen had Marijn het ook over `HJKL`. Toetsen die vaak ook in plaats van de pijltjes toetsen worden gebruikt. Dit wordt bijvoorbeeld gedaan in VIM. Na de tweede test ben ik dus vooral bezig geweest met het ombouwen van het prototype naar de nieuwe controls:

- `HJKL` en de pijltjes toetsen voor het navigeren
- `enter` voor het selecteren
- `backspace` voor het deselecteren

#

[Terug naar 📍 O-Table of Contents](#-o-table-of-contents)

#

### De laatste test - 22-04-2020

De laatste test met Marijn verliep soepel. Marijn vond de nieuwe toetscombinaties fijn werken. Ook waren de bugs eruit. Doordat deze test zo soepel verliep heb ik naast dat mijn prototype goed werkt er niet al te veel uit kunnen halen.

#### Conclusie

- Navigeren werkt fijn.
- "Prima app"

#

[Terug naar 📍 O-Table of Contents](#-o-table-of-contents)

#

### Final touch

De kleuren heb ik zo neutraal mogelijk gemaakt, zodat het duidelijk is welk element geselecteerd is. Ook kan ik de 'hoef ik niet heen' lijst weghalen. Dat wanneer Marijn ergens niet heen wilt hij deze gewoon kan verwijderen.

## ✨ Whishlist

- Automatische agenda updates
- Opslaan
- Zelf lijsten aan kunnen maken

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
- 📖 [How user scenarios help to improve your UX - Sabina Idler - usabilla.com](https://usabilla.com/blog/how-user-scenarios-help-to-improve-your-ux/)

❤️ Thanks for reading ❤️<br/>
❤️ Marten de Bruijn ❤️
