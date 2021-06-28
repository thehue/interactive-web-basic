// 즉시 실행 함수
(function () {
  const houseElm = document.querySelector(".house");
  const barElem = document.querySelector(".progress-bar");
  let maxScrollValue = 0;

  function resizeHandler() {
    maxScrollValue = document.body.offsetHeight - window.innerHeight;
  }

  window.addEventListener("scroll", function () {
    const scrollPer = this.pageYOffset / maxScrollValue;
    const zMove = scrollPer * 980 - 490;
    houseElm.style.transform = `translateZ(${zMove}vw)`;

    //progress bar
    barElem.style.width = `${scrollPer * 100}%`;
  });

  window.addEventListener("resize", resizeHandler);

  resizeHandler();
})();
