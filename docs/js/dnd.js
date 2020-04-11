let spatieIndex = 0;
let spatieIndexCards = 1; // begint bij 1 omdat men kaart 0 al selecteerd met enter
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
          console.log(spatieIndex);
        }
        console.log('ik geef spatie index plus 1 en hoor false te zijn');
        console.log(listSelected);
        spatieIndex++;
      }
    } else if (listSelected) {
      const _lists = getLists();
      const _list = _lists[spatieIndex - 1];
      const _cards = getCards(_list);
      if (e.keyCode === 32) {
        // hij voert deze code dus voor iedere keer dat je op spatie drukt uit
        console.log(
          spatieIndexCards === _cards.length || spatieIndexCards === 0
        );
        console.log('index: ' + spatieIndexCards);
        if (spatieIndexCards >= _cards.length || spatieIndexCards === 0) {
          spatieIndexCards = 0;
          console.log('index: ' + spatieIndexCards);
          console.log('spatie + 1e kaart');
          _cards[spatieIndexCards].focus();
        } else {
          console.log(_cards);
          console.log('index: ' + spatieIndexCards);
          _cards[spatieIndexCards].focus();
          console.log('spatie + 2e kaart');
        }
        spatieIndexCards++;
        console.log('index: ' + spatieIndexCards);
        // --- --- ---
      } else if (e.keyCode === 37) {
        const remainedList = _lists[spatieIndex - 1];
        remainedList.focus();
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
        const cards = getCards(e.target);
        console.log('1e kaart + enter');
        cards[0].focus();
        // focusCards();
        // console.log('ik ben nu zovaak afgevuurt:' + z++);
      }
    });
  });
}
focusList();
selectList();
