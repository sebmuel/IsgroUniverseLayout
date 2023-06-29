// grab all elements
const stoves = document.querySelectorAll(".stove:not(disable)");
const ENTRANCE_ANIMATION = "animate__fadeIn";
const OUT_ANIMATION = "animate__fadeOut";

// add the eventlistener with callbacks
stoves.forEach((stove) => {
  stove.addEventListener("pointerover", handleHover);
  stove.addEventListener("pointerout", handleOut);
  stove.addEventListener("click", handleClick);
});

// out callback
function handleOut() {
  const stove = this.querySelector(".stove-img.aktiv");
  if (stove) {
    stove.classList.add(OUT_ANIMATION);
    stove.classList.remove(ENTRANCE_ANIMATION);
  }
}
// hover callback
function handleHover() {
  const stove = this.querySelector(".stove-img.aktiv");
  if (stove) {
    stove.classList.add(ENTRANCE_ANIMATION);
    stove.classList.remove(OUT_ANIMATION);
  }
}

// click callback
function handleClick() {
  // get data attribute
  let link = this.dataset.link;
  window.location = link;
}
