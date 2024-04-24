export function ifCardGetCard(target){
  if (target.dataset.cardFrontImg == '') {
    return target.parentElement;
  } else if (target.dataset.cardFront  == '') {
    return target;
  }
};

export function fCardRotate(e) { //чужой
  this.style.transform = `scale(1.1) perspective(1000px) rotatey(${(e.offsetX - this.offsetWidth / 2) / 6}deg) rotatex(${((e.offsetY - this.offsetHeight / 2) / 6) * -1}deg)`;
};

export function fCardDefault() { //чужой
  this.style.transform = ``;
};