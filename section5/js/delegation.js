const menu = document.querySelector('.menu');
let beforeValue = null;

function clickHandler(e) {
  let target = e.target;
  while (!target.classList.contains('menu-btn')) {
    target = target.parentNode;

    if (target.nodeName === 'BODY') {
      return;
    }
  }

  const btnValue = target.dataset.value;

  const body = document.getElementsByTagName('body')[0];
  body.classList.add(`cursor_${btnValue}`);

  if (beforeValue !== btnValue) {
    body.classList.remove(`cursor_${beforeValue}`);
  }

  beforeValue = btnValue;
}

menu.addEventListener('click', clickHandler);
