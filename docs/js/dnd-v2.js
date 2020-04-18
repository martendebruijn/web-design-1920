let listIndex = 0;
let cardIndex = 0;
let listSelected = false;
let cardSelected = false;
let selectedListIndex = 0;
var selectedCard;
var selectedList;

// helpers
function getLists() {
  return document.querySelectorAll('ol');
}
function getCards(list) {
  return list.querySelectorAll('li');
}
function getListWrappers() {
  return document.querySelectorAll('.list-wrappers');
}
function getDraggableElements() {
  return document.querySelectorAll(`[draggable="true"]`);
}
function getSelectedListCards(listWrappers) {
  const selectedList = listWrappers[listIndex];
  return getCards(selectedList);
}
// navigatie pijltjes toetsten + enter selecteren
// focus lijst 1, kaart 1 bij laden
getCards(getListWrappers()[0])[0].focus();
// main navigation
document.addEventListener('keydown', function (e) {
  //   console.log(e.key, ': ', e.keyCode);
  const listWrappers = getListWrappers();
  const actualLists = getLists();
  if (e.keyCode === 8) {
    console.log('backspace');
    if (listSelected && !cardSelected) {
      //focus list
      actualLists[selectedListIndex].focus();
      listSelected = false;
    } else if (!listSelected && cardSelected) {
      //focus card
      selectedCard.classList.remove('selected');
      selectedCard.focus();
      cardSelected = false;
      listSelected = true;
    }
    console.log(listSelected);
    console.log(cardSelected);
  }
  // pijl naar links / H, index -1
  if ((e.keyCode === 37 || e.keyCode === 72) && listSelected && !cardSelected) {
    console.log('arrowLeft');
    console.log(listIndex);
    if (listIndex <= 0) {
      listIndex = 4;
    } else {
      listIndex--;
    }
    listSelected = false;
    const _cards = getCards(actualLists[listIndex]);
    const cardsLength = _cards.length;
    if (cardsLength !== 0) {
      listSelected = true;
      selectedListIndex = listIndex;
      _cards[0].focus();
    } else {
      listSelected = false;
      actualLists[listIndex].focus();
    }
  } else if ((e.keyCode === 37 || e.keyCode === 72) && !listSelected) {
    console.log('arrowLeft & !listSelected');
    if (listIndex <= 0) {
      listIndex = 4;
    } else {
      listIndex--;
    }
    if (!cardSelected) {
      const _cards = getCards(actualLists[listIndex]);
      const cardsLength = _cards.length;
      if (cardsLength !== 0) {
        listSelected = true;
        selectedListIndex = listIndex;
        _cards[0].focus();
      } else {
        listSelected = false;
        actualLists[listIndex].focus();
      }
    } else {
      actualLists[listIndex].focus();
    }
  }

  // pijl naar rechts / L, index +1
  if ((e.keyCode === 39 || e.keyCode === 76) && listSelected && !cardSelected) {
    console.log('arrowRight');
    console.log(listIndex);
    if (listIndex >= 4) {
      listIndex = 0;
    } else {
      listIndex++;
    }
    listSelected = false;
    const _cards = getCards(actualLists[listIndex]);
    const cardsLength = _cards.length;
    if (cardsLength !== 0) {
      listSelected = true;
      selectedListIndex = listIndex;
      _cards[0].focus();
    } else {
      listSelected = false;
      actualLists[listIndex].focus();
    }
  } else if ((e.keyCode === 39 || e.keyCode === 76) && !listSelected) {
    console.log('arrowRight & !listSelected');
    if (listIndex >= 4) {
      listIndex = 0;
    } else {
      listIndex++;
    }
    if (!cardSelected) {
      const _cards = getCards(actualLists[listIndex]);
      const cardsLength = _cards.length;
      if (cardsLength !== 0) {
        listSelected = true;
        selectedListIndex = listIndex;
        _cards[0].focus();
      } else {
        listSelected = false;
        actualLists[listIndex].focus();
      }
    } else {
      actualLists[listIndex].focus();
    }
  }
  // pijl naar beneden / J, index + 1
  if ((e.keyCode === 40 || e.keyCode === 74) && listSelected) {
    console.log('arrowDown & listSelected');
    e.preventDefault();
    const cards = getSelectedListCards(listWrappers);
    if (cardIndex >= cards.length - 1) {
      cardIndex = 0;
    } else {
      cardIndex++;
    }
    cards[cardIndex].focus();
  } else if (
    (e.keyCode === 40 || e.keyCode === 74) &&
    !listSelected &&
    listIndex === 3
  ) {
    listIndex++;
    if (!cardSelected) {
      const _cards = getCards(actualLists[listIndex]);
      const cardsLength = _cards.length;
      if (cardsLength !== 0) {
        listSelected = true;
        selectedListIndex = listIndex;
        _cards[0].focus();
      } else {
        listSelected = false;
        actualLists[listIndex].focus();
      }
    } else {
      actualLists[listIndex].focus();
    }
  }
  // pijl naar boven / K, index - 1
  if ((e.keyCode === 38 || e.keyCode === 75) && listSelected) {
    console.log('arrowUp & listSelected');
    e.preventDefault();
    const cards = getSelectedListCards(listWrappers);
    if (cardIndex <= 0) {
      cardIndex = cards.length - 1;
    } else {
      cardIndex--;
    }
    cards[cardIndex].focus();
  } else if (
    (e.keyCode === 38 || e.keyCode === 75) &&
    !listSelected &&
    listIndex === 4
  ) {
    listIndex--;
    if (!cardSelected) {
      const _cards = getCards(actualLists[listIndex]);
      const cardsLength = _cards.length;
      if (cardsLength !== 0) {
        listSelected = true;
        selectedListIndex = listIndex;
        _cards[0].focus();
      } else {
        listSelected = false;
        actualLists[listIndex].focus();
      }
    } else {
      actualLists[listIndex].focus();
    }
  }
  // enter, selecteer lijst
  if (e.keyCode === 13) {
    if (!listSelected && !cardSelected) {
      console.log('enter & !listSelected & !cardSelected');
      const cards = getSelectedListCards(listWrappers);
      console.log(cards);
      if (cards.length !== 0) {
        listSelected = true;
        selectedListIndex = listIndex;
        cards[0].focus();
      }
    } else if (listSelected && !cardSelected) {
      console.log('enter & listSelected & !cardSelected');
      // enter, selecteer card
      cardSelected = true;
      listSelected = false;
      selectedList = listWrappers[selectedListIndex];
      const cards = getCards(selectedList);
      if (cardIndex >= cards.length) {
        cardIndex = cards.length - 1;
      }
      selectedCard = cards[cardIndex];
      selectedCard.classList.add('selected');
    } else if (!listSelected && cardSelected) {
      console.log('enter & !listSelected & cardSelected');
      const targetList = listWrappers[listIndex];
      if (selectedList !== targetList) {
        moveCard(selectedCard, targetList);
        removeCard(selectedCard);
      } else {
        selectedCard.classList.remove('selected');
      }
      cardSelected = false;
    }
  }
});

function moveCard(element, target) {
  const list = target.querySelector('ol');
  const clone = element.cloneNode(true);
  clone.classList.remove('selected');
  list.insertAdjacentHTML('afterbegin', clone.outerHTML);
}
function removeCard(element) {
  element.remove();
}

// normal drag and drop
// Todo: add source (HTML standaard website)
// draggable item
var internalDNDType = 'text/plain';
function dragStartHandler(e) {
  if (e.target instanceof HTMLLIElement) {
    e.dataTransfer.setData(internalDNDType, e.target.innerHTML);
    e.dataTransfer.effectAllowed = 'move'; // only allow moves
  } else {
    e.preventDefault(); // don't allow selection to be dragged
  }
}
function dragEndHandler(e) {
  if (e.dataTransfer.dropEffect == 'move') {
    // remove the dragged element
    e.target.parentNode.removeChild(e.target);
  }
}
// target
function dragEnterHandler(e) {
  var items = e.dataTransfer.items;
  for (var i = 0; i < items.length; ++i) {
    // make this a cached for loop
    var item = items[i];
    if (item.kind == 'string' && item.type == internalDNDType) {
      e.preventDefault();
      return;
    }
  }
}
function dragOverHandler(e) {
  e.dataTransfer.dropEffect = 'move';
  e.preventDefault();
}
function dropHandler(e) {
  var li = document.createElement('li');
  var data = e.dataTransfer.getData(internalDNDType);
  console.log(data);
  li.innerHTML = data;
  console.log(e.target.tagName);
  const target = e.target;
  const parent = target.parentNode;
  if (target.tagName === 'OL') {
    target.insertBefore(li, target.childNodes[2]);
  } else if (parent.tagName === 'OL') {
    parent.insertBefore(li, parent.childNodes[2]);
  } else {
    parent.parentNode.insertBefore(li, parent.parentNode.childNodes[2]);
  }
}
