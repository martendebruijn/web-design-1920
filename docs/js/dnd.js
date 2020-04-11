let spatieIndex = 0;
let spatieIndexCards = 1; // begint bij 1 omdat men kaart 0 al selecteerd met enter
let listSelected = false;

// helpers
function getLists() {
  return document.querySelectorAll('ol');
}
function getCards(list) {
  return list.querySelectorAll('li');
}

// list / card navigation
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
      }
    });
  });
}
focusList();
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
