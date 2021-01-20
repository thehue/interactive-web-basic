// 전역변수 방지
(function main() {
  const ilbuni = document.querySelector('.ilbuni:nth-child(3)');
  ilbuni.addEventListener('click', () => {
    ilbuni.classList.toggle('special');
  });
})();
