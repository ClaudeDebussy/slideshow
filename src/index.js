import "./styles.css";
import "./modern-css-reset.css";

let offset = 0;
const numberOfImages = getNumberOfImages();
let currentlyDisplayedImage = 1;
createListeners();

function createListeners() {
  const leftArrow = document.querySelector(".left-arrow");
  const rightArrow = document.querySelector(".right-arrow");
  leftArrow.addEventListener("click", () => {
    previousImage();
  });
  rightArrow.addEventListener("click", () => {
    nextImage();
  });
}

function getNumberOfImages() {
  return document.getElementsByClassName("img").length;
}

function nextImage() {
  if (currentlyDisplayedImage + 1 <= numberOfImages) {
    const width = document.querySelector(".slideshow").offsetWidth;
    const imageRoll = document.querySelector(".photos");
    offset += width;
    currentlyDisplayedImage += 1;
    imageRoll.style.right = `${offset}px`;
  }
}

function previousImage() {
  if (currentlyDisplayedImage - 1 > 0) {
    const width = document.querySelector(".slideshow").offsetWidth;
    const imageRoll = document.querySelector(".photos");
    offset -= width;
    currentlyDisplayedImage -= 1;
    imageRoll.style.right = `${offset}px`;
  }
}
