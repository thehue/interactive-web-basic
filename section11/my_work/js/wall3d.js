// 즉시 실행 함수
(function () {
  const stageElem = document.querySelector(".stage");
  const houseElem = document.querySelector(".house");
  const barElem = document.querySelector(".progress-bar");
  const mousePos = { x: 0, y: 0 };
  let maxScrollValue = 0;

  function resizeHandler() {
    maxScrollValue = document.body.offsetHeight - window.innerHeight;
  }

  window.addEventListener("scroll", function () {
    const scrollPer = this.pageYOffset / maxScrollValue;
    const zMove = scrollPer * 980 - 490;
    houseElem.style.transform = `translateZ(${zMove}vw)`;

    //progress bar
    barElem.style.width = `${scrollPer * 100}%`;
  });

  window.addEventListener("mousemove", (e) => {
    mousePos.x = -1 + (e.clientX / window.innerWidth) * 1;
    mousePos.y = 1 - (e.clientY / window.innerHeight) * 1;
    // 움직이고 싶은 정도만큼 곱해주면 된다
    stageElem.style.transform = `rotateX(${mousePos.y * 5}deg) rotateY(${
      mousePos.x * 5
    }deg)`;
  });

  window.addEventListener("resize", resizeHandler);

  stageElem.addEventListener("click", function (e) {
    new Character({
      xPos: (e.clientX / window.innerWidth) * 100,
    });
  });
  resizeHandler();
})();
