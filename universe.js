// grab all elements
const stoves = document.querySelectorAll(".stove:not(disable)");
const imagesContainer = document.querySelectorAll(".stove .stove-img")
const ENTRANCE_ANIMATION = "animate__fadeIn";
const OUT_ANIMATION = "animate__fadeOut";
const MOBILE_BREAKPOINT = 991;

// add the eventlistener with callbacks
stoves.forEach((stove) => {
  stove.addEventListener("pointerover", handleHover);
  stove.addEventListener("pointerout", handleOut);
  stove.addEventListener("click", handleClick);
});


// add the eventlistener with callbacks
imagesContainer.forEach((image) => {
  setImageSrc(image);

})

function setImageSrc(img){
  if(window.innerWidth <= MOBILE_BREAKPOINT){
    img.style.backgroundImage = `url('${img.dataset.toggleSrc}')`
  }
}

// out callback
function handleOut() {
  const stove = this.querySelector(".stove-img.aktiv");
  if (stove) {
    stove.style.opacity = "0";
  }
}
// hover callback
function handleHover() {
  debugger
  const stove = this.querySelector(".stove-img.aktiv");
  if (stove) {
    stove.style.opacity = "1";
  }
}

// click callback
function handleClick() {
  // get data attribute
  let link = this.dataset.link;
  window.location = link;
}
