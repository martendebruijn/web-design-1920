// normal drag and drop
var internalDNDType = 'text/x-example'; // set this to something specific to your site
function dragStartHandler(event) {
  if (event.target instanceof HTMLLIElement) {
    // use the element's data-value="" attribute as the value to be moving:
    event.dataTransfer.setData(internalDNDType, event.target.dataset.value);
    event.dataTransfer.effectAllowed = 'move'; // only allow moves
  } else {
    event.preventDefault(); // don't allow selection to be dragged
  }
}
function dragEndHandler(event) {
  if (event.dataTransfer.dropEffect == 'move') {
    // remove the dragged element
    event.target.parentNode.removeChild(event.target);
  }
}
function dragEnterHandler(event) {
  var items = event.dataTransfer.items;
  for (var i = 0; i < items.length; ++i) {
    var item = items[i];
    if (item.kind == 'string' && item.type == internalDNDType) {
      event.preventDefault();
      return;
    }
  }
}
function dragOverHandler(event) {
  event.dataTransfer.dropEffect = 'move';
  event.preventDefault();
}
function dropHandler(event) {
  var li = document.createElement('li');
  var data = event.dataTransfer.getData(internalDNDType);
  if (data == 'fruit-apple') {
    li.textContent = 'Apples';
  } else if (data == 'fruit-orange') {
    li.textContent = 'Oranges';
  } else if (data == 'fruit-pear') {
    li.textContent = 'Pears';
  } else {
    li.textContent = 'Unknown Fruit';
  }
  event.target.appendChild(li);
}

// keyboard accesibility
function getDraggableElements() {
  return document.querySelectorAll(`[draggable="true"]`);
}

function selectDraggableElement() {
  const elements = getDraggableElements();
  elements.forEach(function (item) {
    item.addEventListener('keydown', function (e) {
      if (e.keyCode === 13) {
        // enter key
        // selecteer element
        if (item.getAttribute('aria-grabbed') === 'true') {
          item.setAttribute('aria-grabbed', 'false');
        } else {
          item.setAttribute('aria-grabbed', 'true');
          //   moveElement(item);
          addPopup(item);
          selectTarget(item);
        }
        toggleHighlight();
      }
    });
  });
}
selectDraggableElement();

function toggleHighlight() {
  const targets = document.querySelectorAll('.target');
  targets.forEach((item) => item.classList.toggle('highlight'));
}
function addPopup(element) {
  const popup =
    '<ul id="popup" role="menu"><li aria-label="Favorites" tabindex="0" role="menuitem">Favorite</li><li tabindex="0" aria-label="Hate" role="menuitem">Hate</li></ul>';
  element.insertAdjacentHTML('afterend', popup);
  element.setAttribute('aria-expanded', 'true');
}
function removePopup() {
  const popup = document.getElementById('popup');
  popup.remove();
}
function moveElement(element, id) {
  console.log(element);
  console.log(id);
  const clone = element.cloneNode(true);
  clone.setAttribute('aria-grabbed', 'false');
  const target = document.getElementById(id);
  console.log(target);
  if (!target) {
    console.log(
      'Error: aria-label van de navigatie pop-up komt niet overeen met het ID waar het element heen moet.'
    );
  } else {
    target.insertAdjacentHTML('afterbegin', clone.outerHTML);
  }
}
function removeOldElement(element) {
  element.remove();
}
function selectTarget(elementToBeMoved) {
  const targets = document.querySelector('#popup').children;
  const arr = Array.from(targets);
  arr.forEach(function (item) {
    item.addEventListener('keydown', function (e) {
      if (e.keyCode === 13) {
        // enter key
        const label = item.getAttribute('aria-label');
        moveElement(elementToBeMoved, label);
        removePopup();
        removeOldElement(elementToBeMoved);
        toggleHighlight();
      }
    });
  });
}
