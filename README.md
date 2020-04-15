# 🎓Web Design @cmda-minor-web 1920 👨🏻‍💻Marten de Bruijn

## Introductie

## Live Demo

[Bekijk hier de live demo 😃](https://martendebruijn.github.io/web-design-1920/)

## Usage

```zsh
git clone https://github.com/martendebruijn/web-design-1920.git
cd web-design-1920
```

## Table of Contents

- [User tests](#user-tests)
- [Navigation](#Navigation)
- [Errors](#Errors)
- [To do](#To-do)
- [Known Issues](#Known-issues)
- [Whishlist](#Whishlist)
- [Credits](#Credits)
- [Sources](#Sources)
- [Random Things I Learned](#random-things-i-learned)

## User Test

De tests zal ik waarschijnlijk in mijn wiki uitwerken.

### Test 1 - 00/00/0000

### Test 2 - 15/04/2020

#### Plan

Allereerst wil ik mijn concept uitleggen aan Marijn vóórdát hij mijn prototype ziet. Daarna wil ik hem vragen om eerst te proberen om met mijn prototype te werken, zonder uitleg én ook zonder het informatie veld te openen. Wanneer hij er echt niet uitkomt wil ik hem vragen om het informatie veld te openen. Deze test wil ik mij vooral focussen op de, door mij, gekozen navigatie-toetsen.

#### Vragen

- Zijn de huidige navigatie toetsen goed te bereiken voor u?
- Zou u iets anders zien aan de navigatie toetsen?
- Is de visuele feedback van welk element geselecteerd is en waar een element heen kan gaan, duidelijk?
- Heeft u nog andere feedback?

### Test 3 - 00/00/0000

## Navigation

Hieronder de lijst met navigatie controls.

- **Spatie balk**: navigeren over de elementen.
- **Enter**: een element selecteren.
- **Pijltjestoets naar rechts**: uit de selectie gaan.

## Errors

Onderstaand een lijst met errors die ik heb geïmplementeerd, zodat in het geval dat er iets niet werkt, men (mogelijk) snel kan zien wat en waar het fout gaat.

- [01: Navigatie error](#01:-navigatie-error)
- [02: Target not found](#02:-target-not-found)

### 01: Navigatie error

Als op de een of andere manier `listSelected` en `cardSelected` allebei waar zijn, wordt onderstaande error weergegeven in de console. Een kaart en een lijst mogen niet tegelijk geselecteerd zijn. Deze error geeft ook de huidige waardes van `listSelected` en `cardSelected`, hoewel deze allebei `true` zouden moeten zijn, anders zou deze error niet weergegeven mogen worden.

```
Error-01: er is iets fout gegaan met het navigeren in de functie: navigation(). List selected = ${listSelected}, Card selected = ${cardSelected}.
```

### 02: Target not found

Wanneer deze error in de console staat, is er hoogst waarschijnlijk een type fout gemaakt in: óf het `aria-label` van de navigatie pop-up, óf het ID van het lijst-element. In de toekomst zou er nagedacht kunnen worden om hier een `toLowerCase` (of `toUpperCase`) functionaliteit aan toe te voegen, zodat deze twee niet case-sensitive zijn.

```
Error-02: aria-label van de navigatie pop-up komt niet overeen met het ID waar het element heen moet. In de functie: moveElement().
```

## To do

- [ ] add information tab
- [ ] change card content
- [ ] Add cancel option to dnd menu (fysieke knop en rechter pijl toets)
- [ ] Fix moved card cannot be moved issue
- [ ] Add possibility to move multiple cards at once
- [ ] Prevent DND to move card to the agenda list
- [ ] Add test results 1 to wiki
- [ ] Add test results 2 to wiki
- [ ] Add red border to cards on hover so that they don't dissolve in the orange background of the list (mouse)
- [x] Add navigation controls to README
- [x] Add custom error logs to README
- [x] add styling to dnd
- [x] add keyboard accesibility to dnd
- [x] Only highlight the selected target
- [x] Add placeholder for empty lists

### If I have time

- [ ] Clean up code
- [ ] Change list headers so that they aren't inside the list element

## Known Issues

⚠️⚠️⚠️

- Verplaatste kaarten kunnen niet nog een keer verplaatst worden.
- ~~De 'hoef ik niet heen' lijst is niet leesbaar op kleinere schermen (13").~~
- ~~Als dnd menu open is, navigeert men niet alleen door het menu heen maar ook de lijst.~~
- ~~Focused element is soms buiten beeld.~~

⚠️⚠️⚠️

## Whishlist

## Credits

## Sources

📖 Artikel & Documentation **|** ⚙️ Code **|** 📹 Video **|** 🛠 Tools **|** 📓 Has notes in the wiki of this repo

- 📖[Accessible drag and drop](https://dev.opera.com/articles/accessible-drag-and-drop/) **|** [📓Summary](https://github.com/martendebruijn/web-design-1920/wiki/accesible-drag-drop)
- 📖[HTML - Living Standard](https://html.spec.whatwg.org/#dnd) **|** [📓Summary: How to make a drag and drop component](https://github.com/martendebruijn/web-design-1920/wiki/dnd)
- 📖[Aria Practices](https://w3c.github.io/aria-practices/examples/menubar/menubar-1/menubar-1.html)
- 🛠[Keycodes](https://keycode.info/)

## Random Things I Learned

- Bij de `addEventListener` kan men een options (object) variable toevoegen. Hierin kan men de optie `once` toevoegen, die ervoor zorgt dat een event automatisch wordt verwijderd wanneer hij één keer is uitgevoerd.
