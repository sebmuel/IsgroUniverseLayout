const stoves = document.querySelectorAll(".stove");

stoves.forEach((s) => {
  s.addEventListener("pointerover", handleHover);
  s.addEventListener("pointerout", handleOut);
});

function handleOut() {
  const ele = this.querySelector(".stove-img.aktiv");
  ele.style.opacity = "0";
}

function handleHover() {
  const ele = this.querySelector(".stove-img.aktiv");
  ele.style.opacity = "1";
}
