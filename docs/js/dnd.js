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
          spatieIndex++;
          console.log('spatie + lijst'); // deze wordt afgevuurt
        }
      }
    }
  });
}
function focusCards(cards, list) {
  document.addEventListener('keydown', function (e) {
    if (listSelected) {
      if (e.keyCode === 32) {
        if (spatieIndex === cards.length) {
          spatieIndex = 0;
          cards[spatieIndex].focus();
          console.log('spatie + 1e kaart');
        } else {
          cards[spatieIndex].focus();
          spatieIndex++;
          console.log('spatie + 2e kaart'); // deze wordt ook afgevuurt
        }
      } else if (e.keyCode === 37) {
        // de-select lijst
        list.focus();
        // reset spatieindex naar de index van lijst
        const lists = getLists();
        console.log(lists);
        console.log(list); // check op de een of andere manier bij welke index lists[index] === list is en deze waarde is de huidige spatieindex
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
        focusCards(cards, list);
      }
    });
  });
}
focusList();
selectList();
