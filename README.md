# Web Design @cmda-minor-web 1920

## Introductie

## Live Demo

[Bekijk hier de live demo 😃](https://martendebruijn.github.io/web-design-1920/)

## Usage

```zsh
git clone https://github.com/martendebruijn/web-design-1920.git
cd web-design-1920
```

## Table of Contents

- [Known Issues](#Known-issues)
- [To do](#To-do)
- [Random Things I Learned](#random-things-i-learned)
- [Whishlist](#Whishlist)
- [Credits](#Credits)
- [Sources](#Sources)

## To do

- [x] add styling to dnd
- [x] add keyboard accesibility to dnd
- [ ] add information tab
- [ ] change card content
- [ ] Add cancel option to dnd menu (fysieke knop en rechter pijl toets)
- [ ] Fix moved card cannot be moved issue
- [ ] Add possibility to move multiple cards at once
- [ ] Prevent DND to the agenda list
- [ ] Only highlight the selected target
- [ ] Add test results 1 to wiki
- [ ] Add test results 2 to wiki

## Known Issues

⚠️⚠️⚠️

- Soms werkt het navigatie menu voor het verplaatsen van de kaarten niet (bij kaarten die men al een keer heeft verplaatst)
- Focused element is soms buiten beeld.
- De 'hoef ik niet heen' lijst is niet leesbaar op kleinere schermen (13").
- Als dnd menu open is, navigeert men niet alleen door het menu heen maar ook de lijst.
-

⚠️⚠️⚠️

## Random Things I Learned

- Bij de `addEventListener` kan men een options (object) variable toevoegen. Hierin kan men de optie `once` toevoegen, die ervoor zorgt dat een event automatisch wordt verwijderd wanneer hij één keer is uitgevoerd. Wat erg handig is als je een event dynamisch toevoegt en niet wilt dat er twee keer dezelfde eventlistener wordt toegevoegd. Moet je er wel voor zorgen dat je het event pas weer toevoegd als deze ook daadwerkelijk uitgevoerd is.

## Whishlist

## Credits

## Sources

📖 Artikel & Documentation **|** ⚙️ Code **|** 📹 Video **|** 🛠 Tools **|** 📓 Has notes in the wiki of this repo

- 📖[Accessible drag and drop](https://dev.opera.com/articles/accessible-drag-and-drop/) **|** [📓Summary](https://github.com/martendebruijn/web-design-1920/wiki/accesible-drag-drop)
- 📖[HTML - Living Standard](https://html.spec.whatwg.org/#dnd) **|** [📓Summary: How to make a drag and drop component](https://github.com/martendebruijn/web-design-1920/wiki/dnd)
- 📖[Aria Practices](https://w3c.github.io/aria-practices/examples/menubar/menubar-1/menubar-1.html)
- 🛠[Keycodes](https://keycode.info/)
