let spatieIndex = 0;

function getLists() {
  return document.querySelectorAll('ol');
}

document.addEventListener('keydown', function (e) {
  if (e.keyCode === 32) {
    const lists = getLists();
    if (spatieIndex === 5) {
      spatieIndex = 0;
      lists[spatieIndex].focus();
    } else {
      lists[spatieIndex].focus();
      spatieIndex++;
    }
  }
});
