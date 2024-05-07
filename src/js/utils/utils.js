export function $(selector) {
  return document.querySelector(`${selector}`);
}

export function clog(...str) {
  console.log(...str);
}

export function cdir(...str) {
  console.dir(...str);
}

export function ifCardGetCard(target){
  if (target.dataset.cardFrontImg == '') {
    return target.parentElement;
  } else if (target.dataset.cardFront  == '') {
    return target;
  }
};

export function isHaveClass(target, string){
  return Object.values(target.classList)
      .indexOf(string) > 0 ? true : false;
}

export function fCardRotate(e) { //чужой
  this.style.transform = `scale(1.1) perspective(1000px) rotatey(${(e.offsetX - this.offsetWidth / 2) / 6}deg) rotatex(${((e.offsetY - this.offsetHeight / 2) / 6) * -1}deg)`;
};

export function fCardDefault() { //чужой
  this.style.transform = ``;
};

export function getLastAmountOfCards(){
  if (!localStorage.getItem("lastAmountOfCards")) 
    localStorage.setItem("lastAmountOfCards", 11);
  return localStorage.getItem("lastAmountOfCards")
}

export function setLastAmountOfCards(amount){
  localStorage.setItem("lastAmountOfCards", amount);
}

export function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}