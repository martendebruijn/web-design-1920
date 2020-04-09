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

function getDraggableElements() {
  return document.querySelectorAll(`[draggable="true"]`);
}

function selectDraggableElement() {
  const elements = getDraggableElements();
  elements.forEach(function (item) {
    item.addEventListener('keydown', function (e) {
      console.log(e.keyCode);
      if (e.keyCode === 13) {
        // selecteer element
        if (item.getAttribute('aria-grabbed') === 'true') {
          item.setAttribute('aria-grabbed', 'false');
        } else {
          item.setAttribute('aria-grabbed', 'true');
        }
        highlightTargets();
      }
    });
  });
}
selectDraggableElement();

function highlightTargets() {
  const el = document.querySelector('.target');
  el.classList.add('highlight');
}
