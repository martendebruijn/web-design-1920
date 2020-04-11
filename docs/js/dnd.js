let spatieIndex = 0;
let listSelected = false;

function getLists() {
  return document.querySelectorAll('ol');
}
function getCards(list) {
  return list.querySelectorAll('li');
}
function focusList() {
  document.addEventListener('keydown', function (e) {
    if (!listSelected) {
      if (e.keyCode === 32) {
        e.preventDefault();
        const lists = getLists();
        if (spatieIndex === lists.length) {
          spatieIndex = 0;
          lists[spatieIndex].focus();
          console.log('spatie + 1e lijst');
        } else {
          lists[spatieIndex].focus();
          console.log('spatie + lijst');
        }
        spatieIndex++;
      }
    }
  });
}
function focusCards(cards, list) {
  console.log(list); // geeft de juiste lijst
  document.addEventListener('keydown', function (e) {
    if (listSelected) {
      if (e.keyCode === 32) {
        console.log('LET OP DEZE: SPATIE'); //spatie
        console.log(list); // werd 2 keer afgevuurd ?? 1 x onjuist , 1x juist | werd later 3 x afgevuurd ?
        // De eerste gaat iedere keer goed maar al men uit de lijst gaat, komen ze dubbel?
        if (spatieIndex === cards.length) {
          spatieIndex = 0;
          cards[spatieIndex].focus();
          console.log('spatie + 1e kaart');
        } else {
          cards[spatieIndex].focus();
          console.log('spatie + 2e kaart');
        }
        spatieIndex++;
      } else if (e.keyCode === 37) {
        console.log('LET OP DEZE: PIJL RECHTS'); // pijltje links
        console.log(list); // geeft verkeerde lijst
        // de-select lijst
        list.focus();
        // reset spatieindex naar de index van lijst

        const i = list.getAttribute('data-list-index');
        // console.log('onder en boven zouden hetzelfde moeten zijn');
        console.log(list); // geeft niet de juiste lijst
        console.log(i);

        listSelected = false;
        console.log('pijl naar rechts + lijst');
      }
    }
  });
}

// event listener op de lijst
function selectList() {
  const lists = getLists();
  lists.forEach(function (list) {
    list.addEventListener('keydown', function (e) {
      if (e.keyCode === 13) {
        listSelected = true;
        spatieIndex = 1;
        const cards = getCards(list);
        console.log('1e kaart + enter');
        cards[0].focus();
        console.log('LET OP DEZE ENTER');
        console.log(list); // geeft de juiste lijst
        focusCards(cards, list);
      }
    });
  });
}
focusList();
selectList();
