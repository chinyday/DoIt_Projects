
const btns = document.querySelectorAll('main .nav li');
const articles = document.querySelectorAll('section article');
const activeClass = 'on';
let grid;
const section = 'section';
const article = 'article';
const speed = '0.5s'

function setClassName() {
  for (let i = 0; i < articles.length; i++) {
    if (i % 2 == 0) {
      articles[i].classList.add('odd');
    } else {
      articles[i].classList.add('even');
    }
  }
}

function setFilter(btns) {
  for (let el of btns) {
    el.addEventListener('click', e => {
      e.preventDefault();

      // 클릭한 대상의 자식 요소에서 href 가져오기
      const sort = e.currentTarget.querySelector('a').getAttribute('href');

      // grid에 저장된 결과값을 가져와서 재정렬 기능 연결
      grid.arrange({
        filter: sort
      });

      for (let el of btns) {
        el.classList.remove(activeClass)
      }

      e.currentTarget.classList.add(activeClass);
    });
  }
}

function init() {
  grid = new Isotope(section, {
    itemSelector: article,
    columnWidth: article,
    transitionDuration: speed,
  });
}

window.addEventListener('load', () => {
  setClassName();
  setFilter(btns);
  init();
});