"use strict";

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
}

function changeBackgroundColor() {
  const color = getRandomColor();

  document.body.style.backgroundColor = color;
}

setInterval(changeBackgroundColor, 2000);
