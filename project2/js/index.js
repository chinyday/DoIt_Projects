const frameWrap = document.querySelector('.frameWrap');
const frames = frameWrap.querySelectorAll('article');
const DEG = 45; // 회전할 긱도
const len = frames.length - 1; // 0부터 시작하니 한개 빼주고 시작
let i = 0;

const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');

const audio = frameWrap.querySelectorAll('audio');
let num = 0;
let active = 0;

for (const frame of frames) {
  let picture = frame.querySelector('.pic');
  let pause = frame.querySelector('.pause');
  let play = frame.querySelector('.play');
  let reload = frame.querySelector('.reload');

  //play 
  play.addEventListener('click', e => {
    let isActive = e.currentTarget.closest('article').classList.contains('on');
    if (!isActive) return
    e.currentTarget.closest('article').querySelector('.pic').classList.add('on');
    e.currentTarget.closest('article').querySelector('audio').play();
  });

  //pause 
  pause.addEventListener('click', e => {
    let isActive = e.currentTarget.closest('article').classList.contains('on');
    if (!isActive) return
    e.currentTarget.closest('article').querySelector('.pic').classList.remove('on');
    e.currentTarget.closest('article').querySelector('audio').pause();
  });

  //reload 
  reload.addEventListener('click', e => {
    let isActive = e.currentTarget.closest('article').classList.contains('on');
    if (!isActive) return
    e.currentTarget.closest('article').querySelector('.pic').classList.remove('on');
    e.currentTarget.closest('article').querySelector('audio').load();
    e.currentTarget.closest('article').querySelector('audio').play();
  });

  picture.style.backgroundImage = `url(./img/member${i + 1}.jpg)`;
  frame.style.transform = `rotate(${DEG * i}deg) translateY(-100vh)`;
  i++;
}

function initMusic() {
  for (const el of audio) {
    el.pause();
    el.load();
    el.parentElement.previousElementSibling.classList.remove('on');
  }
}

function activeFrame(index, frames) {
  for (const el of frames) {
    el.classList.remove('on');
  }
  frames[index].classList.add('on');
}

prevBtn.addEventListener('click', e => {
  initMusic();
  num++;
  frameWrap.style.transform = `rotate(${DEG * num}deg)`;
  (active === 0) ? active = len : active--;
  activeFrame(active, frames);
});

nextBtn.addEventListener('click', e => {
  initMusic();
  num--;
  frameWrap.style.transform = `rotate(${DEG * num}deg)`;
  (active === len) ? active = 0 : active++;
  activeFrame(active, frames);
});

