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
function focusCards(cards) {
  document.addEventListener('keydown', function (e) {
    if (listSelected) {
      if (e.keyCode === 32) {
        if (spatieIndexCards === cards.length) {
          spatieIndexCards = 0;
          cards[spatieIndexCards].focus();
          console.log('spatie + 1e kaart');
          console.log(cards); // hij pakt hier ook andere lijsten
        } else {
          cards[spatieIndexCards].focus();
          console.log('spatie + 2e kaart');
        }
        spatieIndexCards++;
      } else if (e.keyCode === 37) {
        const lists = getLists();
        spatieIndex = spatieIndex - 1;
        const remainedList = lists[spatieIndex];
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
        const cards = getCards(list);
        console.log('1e kaart + enter');
        cards[0].focus();
        focusCards(cards);
      }
    });
  });
}
focusList();
selectList();
