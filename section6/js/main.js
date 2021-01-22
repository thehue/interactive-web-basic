(function () {
  const stage = document.querySelector('.stage');
  // 현재 활성화된 아이템을 저장
  let currentItem;

  function activate(element) {
    element.parentNode.classList.add('open');
    currentItem = element.parentNode;
  }

  function inactivate() {
    currentItem.classList.remove('open');
  }

  function doorHandler(e) {
    let target = e.target;

    if (currentItem) {
      inactivate();
    }

    if (target.classList.contains('door-body')) {
      activate(target);
    }
  }

  stage.addEventListener('click', doorHandler);
})();
