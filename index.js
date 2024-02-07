"use strict";

const imageConEl = document.querySelector(".image-container");
const prewEl = document.getElementById("prev");
const nextEl = document.getElementById("next");

let x = 0;
let timer;
prewEl.addEventListener("click", () => {
  x = x + 45;
  clearTimeout(timer);
  updateGallery();
});

nextEl.addEventListener("click", () => {
  x = x - 45;
  clearTimeout(timer);
  updateGallery();
});

function updateGallery() {
  imageConEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;
  timer = setTimeout(() => {
    x = x - 45;
    updateGallery();
  }, 2000);
}

updateGallery();
