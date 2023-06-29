// grab all elements
const stoves = document.querySelectorAll(".stove");

// add the eventlistener with callbacks
stoves.forEach((s) => {
  s.addEventListener("pointerover", handleHover);
  s.addEventListener("pointerout", handleOut);
});

// out callback
function handleOut() {
  this.querySelector(".stove-img.aktiv").style.opacity = "0";
}

// hover callback
function handleHover() {
  this.querySelector(".stove-img.aktiv").style.opacity = "1";
}
