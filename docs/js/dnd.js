let listIndex = 0;
let cardIndex = 1; // begint bij 1 omdat men kaart 0 al selecteerd met enter
let listSelected = false;
let cardSelected = false;
let lastList = 0;

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

// main navigation
function navigation() {
  document.addEventListener('keydown', function (e) {
    if (e.keyCode === 73) {
      const info = document.getElementById('help');
      info.classList.toggle('hidden');
    }
    if (!listSelected && !cardSelected) {
      if (e.keyCode === 32) {
        // spatie
        e.preventDefault();
        const lists = test_getLists();
        if (listIndex >= lists.length) {
          listIndex = 0;
          lists[listIndex].focus();
          console.log('spatie + 1e lijst');
        } else {
          lists[listIndex].focus();
          console.log('spatie + lijst');
          console.log(listIndex);
        }
        console.log('ik geef spatie index plus 1 en hoor false te zijn');
        console.log(listSelected);
        listIndex++;
      }
    } else if (listSelected && !cardSelected) {
      const _lists = test_getLists();
      const _list = _lists[listIndex - 1];
      const _cards = getCards(_list);
      if (e.keyCode === 32) {
        // spatie
        e.preventDefault();
        // hij voert deze code dus voor iedere keer dat je op spatie drukt uit
        console.log(cardIndex === _cards.length || cardIndex === 0);
        console.log('index: ' + cardIndex);
        if (cardIndex >= _cards.length || cardIndex === 0) {
          cardIndex = 0;
          console.log('index: ' + cardIndex);
          console.log('spatie + 1e kaart');
          _cards[cardIndex].focus();
        } else {
          console.log(_cards);
          console.log('index: ' + cardIndex);
          _cards[cardIndex].focus();
          console.log('spatie + 2e kaart');
        }
        cardIndex++;
        console.log('index: ' + cardIndex);
      } else if (e.keyCode === 37) {
        // pijl naar rechts <-
        const remainedList = _lists[listIndex - 1];
        remainedList.focus();
        listSelected = false;
        console.log('pijl naar rechts + lijst');
      }
    } else if (!listSelected && cardSelected) {
      // navigeer in het DND menu
      const targets = document.getElementById('popup').children;
      if (e.keyCode === 32) {
        e.preventDefault();
        // spatie
        if (dndMenuIndex >= 4) {
          dndMenuIndex = 0;
          targets[dndMenuIndex].focus();
          highlightSelectedTarget(targets[dndMenuIndex]);
          dndMenuIndex++;
        } else {
          targets[dndMenuIndex].focus();
          highlightSelectedTarget(targets[dndMenuIndex]);
          dndMenuIndex++;
        }
      } else if (e.keyCode === 37) {
        // pijl naar rechts <-
        removePopup(listIndex);
        removeHighlight();
        cardSelected = false;
        listSelected = true;
        dndMenuIndex = 0;
      }
    } else {
      console.log(
        `Error-01: er is iets fout gegaan met het navigeren in de functie: navigation(). List selected = ${listSelected}, Card selected = ${cardSelected}.`
      );
    }
  });
}

// event listener op de lijst
function selectList() {
  const lists = test_getLists();
  lists.forEach(function (list) {
    list.addEventListener('keydown', function (e) {
      if (e.keyCode === 13 && !listSelected && !cardSelected) {
        // enter
        listSelected = true;
        const cards = getCards(e.target);
        console.log('1e kaart + enter');
        if (cards.length !== 0) {
          cards[0].focus();
        }
      }
    });
  });
}

navigation();
selectList();

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
// make it so that the user can only drop it in the list and not also in the cards
function dragEnterHandler(e) {
  var items = e.dataTransfer.items;
  console.log(items);
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

function getDraggableElements() {
  return document.querySelectorAll(`[draggable="true"]`);
}
let z = 1;
function highlightTargets() {
  console.log(`ik wordt zovaak uitgevoerd: ${z++}`);
  const lists = test_getLists();
  const currentList = lists[listIndex - 1];
  lists.forEach(function (list) {
    if (list !== currentList) {
      list.classList.add('jsHighlightTargets');
    }
  });
}
function highlightSelectedTarget(target) {
  const lists = test_getLists();
  const label = target.getAttribute('aria-label');
  const _label = 't-' + label;
  lists.forEach(function (list) {
    const highlighted = list.classList.contains('jsHighlightTargets');
    if (_label === list.id && !highlighted) {
      list.classList.add('jsHighlightTargets');
    } else if (_label !== list.id && highlighted) {
      list.classList.remove('jsHighlightTargets');
    }
  });
}

function removeHighlight() {
  const highlightedElements = document.querySelectorAll('.jsHighlightTargets');
  console.log(highlightedElements);
  highlightedElements.forEach(function (element) {
    element.classList.remove('jsHighlightTargets');
  });
}

function showPopup(element) {
  element.classList.add('t-sel');
  // to do: cancel btn
  const menuItems = {
    base: '<ul id="popup" role="menu">',
    agenda:
      '<li aria-label="agenda" tabindex="-1" role="menuitem">🗓 Agenda</li>',
    want:
      '<li aria-label="want" tabindex="-1" role="menuitem">🎤 Wil ik heen</li>',
    kids:
      '<li aria-label="kids" tabindex="-1" role="menuitem">👨‍👩‍👦‍👦 Leuk voor de kinderen</li>',
    maybe:
      '<li aria-label="maybe" tabindex="-1" role="menuitem">📌 Misschien</li>',
    nope:
      '<li aria-label="nope" tabindex="-1" role="menuitem">🗑 Hoef ik niet heen</li>',
    end: '</ul>',
  };
  const keys = Object.keys(menuItems);
  let popup = [];
  const lists = getLists();
  const currentList = lists[listIndex - 1];
  const listID = currentList.id;
  keys.forEach(function (key) {
    if (key !== listID) {
      popup.push(menuItems[key]);
    }
  });
  const finalPopup = popup.join(' ');

  const parent = currentList.parentNode.parentNode;
  console.log(parent);
  const menuWrapper = parent.querySelector('.menu-wrapper');
  console.log(menuWrapper);
  menuWrapper.insertAdjacentHTML('afterbegin', finalPopup);
  menuWrapper.classList.add('opened');
  // appendedMenu.insertAdjacentHTML('afterbegin', finalPopup);
  // element.setAttribute('aria-expanded', 'true');
}
function removePopup(last) {
  console.log(last);
  const lists = test_getLists();
  lists.forEach(function (item) {
    const i = item.getAttribute('data-index');
    if (i == last) {
      const wrap = item.querySelector('.menu-wrapper');
      wrap.classList.remove('opened');
      const popup = document.querySelector('#popup');
      popup.remove();
    }
  });
}
function moveElement(element, id) {
  const clone = element.cloneNode(true);
  clone.setAttribute('aria-grabbed', false);
  clone.classList.remove('t-sel');
  const target = document.getElementById(id);
  if (!target) {
    console.log(
      'Error-02: aria-label van de navigatie pop-up komt niet overeen met het ID waar het element heen moet. In de functie: moveElement().'
    );
  } else {
    target.insertAdjacentHTML('beforeend', clone.outerHTML);
    const cards = target.children;
    lastList = listIndex;
    const listIndex = target.getAttribute('data-list-index');
    listIndex = listIndex;
    dndMenuIndex = 0;
    cards[1].focus();
  }
}
function removeOldElement(element) {
  element.remove();
}
function removeEmptyPlaceholder(label) {
  const list = document.getElementById(label);
  const containsCards = getCards(list);
  if (containsCards.length === 1) {
    const placeholder = list.querySelector('.empty');
    placeholder.remove();
  }
}
function selectTarget(elementToBeMoved) {
  console.log('card: ' + cardSelected);
  console.log('list: ' + listSelected);
  const targets = document.getElementById('popup').children;
  console.log(targets);
  const arr = Array.from(targets);
  arr.forEach(function (item) {
    item.addEventListener('keydown', function (e) {
      console.log(e.key);
      console.log(e.keyCode);
      console.log(e.keyCode === 13);
      console.log(cardSelected);
      console.log(!listSelected); // hier is list selected true maar waarom?
      console.log(listSelected);
      if (e.keyCode === 13 && cardSelected && !listSelected) {
        console.log('jeejs');
        // enter
        const label = item.getAttribute('aria-label');
        moveElement(elementToBeMoved, label);
        removeOldElement(elementToBeMoved);
        removeHighlight();
        removePopup(lastList);
        removeEmptyPlaceholder(label);
        cardSelected = false;
      }
    });
  });
}

let y = 1;
function selectDraggableElement() {
  const elements = getDraggableElements();
  console.log(`ik wordt ${y++} uitgevoerd`);
  //  y.removeEventListener("mouseover", RespondMouseOver);
  elements.forEach(function (element) {
    element.addEventListener('keydown', function sel(e) {
      if (e.keyCode === 13 && listSelected && !cardSelected) {
        // enter
        cardSelected = true;
        listSelected = false;
        element.setAttribute('aria-grabbed', 'true');
        highlightTargets();
        showPopup(element);
        selectTarget(element);
      }
    });
  });
}
selectDraggableElement();

document.querySelector('#test').addEventListener('click', function (e) {
  document.querySelector('#menu-wrapper').classList.toggle('opened');
});
