const menu = document.querySelector('.menu');

function clickHandler(e) {
  let target = e.target;
  while (!target.classList.contains('menu-btn')) {
    target = target.parentNode;

    if (target.nodeName === 'BODY') {
      return;
    }
  }
}

menu.addEventListener('click', clickHandler);
