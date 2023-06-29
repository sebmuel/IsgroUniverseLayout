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
  if (this.querySelector(".stove-img.aktiv")) {
    this.querySelector(".stove-img.aktiv").classList.add(OUT_ANIMATION);
    this.querySelector(".stove-img.aktiv").classList.remove(ENTRANCE_ANIMATION);
  }
}
// hover callback
function handleHover() {
  if (this.querySelector(".stove-img.aktiv")) {
    this.querySelector(".stove-img.aktiv").classList.add(ENTRANCE_ANIMATION);
    this.querySelector(".stove-img.aktiv").classList.remove(OUT_ANIMATION);
  }
}

function handleClick() {
  let link = this.dataset.link;
  window.location = link;
}
