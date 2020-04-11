let spatieIndex = 0;
let spatieIndexCards = 0;
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
    }
  });
}
function focusCards() {
  const lists = getLists();
  document.addEventListener('keydown', function (e) {
    if (listSelected) {
      if (e.keyCode === 32) {
        const _list = lists[spatieIndex - 1];
        const cards = getCards(_list);
        if (spatieIndexCards === cards.length) {
          spatieIndexCards = 0;
          cards[spatieIndexCards].focus();
          console.log('spatie + 1e kaart');
          console.log(cards); // hij pakt hier ook andere lijsten
        } else {
          console.log(cards);
          console.log(spatieIndexCards);
          cards[spatieIndexCards].focus();
          console.log('spatie + 2e kaart');
        }
        spatieIndexCards++;
      } else if (e.keyCode === 37) {
        // spatieIndex = spatieIndex - 1;
        const remainedList = lists[spatieIndex - 1];
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
        focusCards();
      }
    });
  });
}
focusList();
selectList();
