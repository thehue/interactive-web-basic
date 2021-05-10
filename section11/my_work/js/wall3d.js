// 즉시 실행 함수
(function () {
  const houseElm = document.querySelector(".house");
  let maxScrollValue = document.body.offsetHeight - window.innerHeight;

  window.addEventListener("scroll", function () {
    const zMove = (this.pageYOffset / maxScrollValue) * 980;
    houseElm.style.transform = `translateZ(${-490 + zMove}vw)`;
  });
})();
