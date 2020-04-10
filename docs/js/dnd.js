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
        const lists = getLists();
        if (spatieIndex === lists.length) {
          spatieIndex = 0;
          lists[spatieIndex].focus();
        } else {
          lists[spatieIndex].focus();
          spatieIndex++;
        }
      }
    }
  });
}
function focusCards(list) {
  document.addEventListener('keydown', function (e) {
    if (e.keyCode === 32) {
      const cards = getCards(list);
      if (spatieIndex === cards.length) {
        spatieIndex = 0;
        cards[spatieIndex].focus();
      } else {
        cards[spatieIndex].focus();
        spatieIndex++;
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
        spatieIndex = 0;
        focusCards(list);
      }
    });
  });
}
focusList();
selectList();
