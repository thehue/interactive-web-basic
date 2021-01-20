(function () {
  const ilbuniGroup = document.querySelectorAll('.ilbuni');
  const stage = document.querySelector('.stage');

  const clickHandler = (e) => {
    stage.removeChild(e.currentTarget);
  };

  ilbuniGroup.forEach((el, index) => {
    el.addEventListener('click', clickHandler);
  });
})();
