(function () {
  // 이벤트 위임
  const stage = document.querySelector('.stage');

  const clickHandler = (e) => {
    console.log(e.target);
    if (!e.target.classList.contains('ilbuni')) {
      return;
    }
    stage.removeChild(e.target);
  };

  stage.addEventListener('click', clickHandler);
})();
