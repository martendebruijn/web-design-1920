let spatieIndex = 0;
let spatieIndexCards = 1; // begint bij 1 omdat men kaart 0 al selecteerd met enter
let dndMenuIndex = 0;
let listSelected = false;
let cardSelected = false;

// helpers
function getLists() {
  return document.querySelectorAll('ol');
}
function getCards(list) {
  return list.querySelectorAll('li');
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
        const lists = getLists();
        if (spatieIndex >= lists.length) {
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
    } else if (listSelected && !cardSelected) {
      const _lists = getLists();
      const _list = _lists[spatieIndex - 1];
      const _cards = getCards(_list);
      if (e.keyCode === 32) {
        // spatie
        e.preventDefault();
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
      } else if (e.keyCode === 37) {
        // pijl naar rechts <-
        const remainedList = _lists[spatieIndex - 1];
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
        removePopup();
        removeHighlight();
        cardSelected = false;
        listSelected = true;
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
  const lists = getLists();
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
  const lists = getLists();
  const currentList = lists[spatieIndex - 1];
  lists.forEach(function (list) {
    if (list !== currentList) {
      list.classList.add('jsHighlightTargets');
    }
  });
}
function highlightSelectedTarget(target) {
  const lists = getLists();
  const label = target.getAttribute('aria-label');
  lists.forEach(function (list) {
    const highlighted = list.classList.contains('jsHighlightTargets');
    if (label === list.id && !highlighted) {
      list.classList.add('jsHighlightTargets');
    } else if (label !== list.id && highlighted) {
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
  const currentList = lists[spatieIndex - 1];
  const listID = currentList.id;
  keys.forEach(function (key) {
    if (key !== listID) {
      popup.push(menuItems[key]);
    }
  });
  const finalPopup = popup.join(' ');
  element.insertAdjacentHTML('afterbegin', finalPopup);
  // element.setAttribute('aria-expanded', 'true');
}
function removePopup() {
  const popup = document.querySelector('#popup');
  popup.remove();
}
function moveElement(element, id) {
  const clone = element.cloneNode(true);
  clone.setAttribute('aria-grabbed', false);
  const target = document.getElementById(id);
  if (!target) {
    console.log(
      'Error-02: aria-label van de navigatie pop-up komt niet overeen met het ID waar het element heen moet. In de functie: moveElement().'
    );
  } else {
    target.insertAdjacentHTML('beforeend', clone.outerHTML);
    const cards = target.children;
    const listIndex = target.getAttribute('data-list-index');
    spatieIndex = listIndex;

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
        removePopup();
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

// to do:
// add class .js-highlight to possible targets DONE
// make the drop keyboard accesible DONE
// add possibility to cancel the drop
// make sure everything works with the new elements DONE
// add a info tab
// maak placeholder en fix navigatie wanneer een lijst leeg is
// add highlight to the ONLY the selected target when the user navigated in the dnd menu
