// 즉시 실행 함수
(function () {
  const houseElm = document.querySelector(".house");
  let maxScrollValue = 0;

  function resizeHandler() {
    maxScrollValue = document.body.offsetHeight - window.innerHeight;
  }

  window.addEventListener("scroll", function () {
    const zMove = (this.pageYOffset / maxScrollValue) * 980 - 490;
    houseElm.style.transform = `translateZ(${zMove}vw)`;
  });

  window.addEventListener("resize", resizeHandler);

  resizeHandler();
})();
