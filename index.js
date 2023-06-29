const stoves = document.querySelectorAll(".stove");

stoves.forEach((s) => {
  s.addEventListener("pointerover", handleHover);
  s.addEventListener("pointerout", handleOut);
});

function handleOut(e) {
  const imageBackdrop = this.querySelector("picture[class*='toggle-image']");
  imageBackdrop.classList.remove("show");
}

function handleHover(e) {
  const imageBackdrop = this.querySelector("picture[class*='toggle-image']");
  imageBackdrop.classList.add("show");
  console.dir(imageBackdrop);
}
