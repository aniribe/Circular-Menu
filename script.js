let cameraBtn = document.getElementById("camera");
let videoBtn = document.getElementById("video");
let envelopeBtn = document.getElementById("envelope");
let commentBtn = document.getElementById("comment");
let settingsBtn = document.getElementById("settings");
let microphoneBtn = document.getElementById("microphone");
let musicBtn = document.getElementById("music");
let homeBtn = document.getElementById("home");
let handle = document.querySelector(".knob-base");
let knobIcon = document.getElementById("knobIcon");

cameraBtn.addEventListener("click", function () {
  //   deleteActiveClass();
  //   this.classList.add("active");
  handle.style.transform = `rotate(${0}deg)`;
  activateBtn(cameraBtn);
  knobIcon.className = "fas fa-camera";
});

videoBtn.addEventListener("click", function () {
  //   deleteActiveClass();
  //   this.classList.add("active");
  activateBtn(videoBtn);
  handle.style.transform = `rotate(${-46}deg)`;
  knobIcon.className = "fas fa-video";
});

envelopeBtn.addEventListener("click", function () {
  //   this.classList.add("active");
  activateBtn(envelopeBtn);
  handle.style.transform = `rotate(${-90}deg)`;
  knobIcon.className = "fas fa-envelope";
});

commentBtn.addEventListener("click", function () {
  //   this.classList.add("active");
  activateBtn(commentBtn);
  handle.style.transform = `rotate(${-135}deg)`;
  knobIcon.className = "fas fa-comment-alt";
});

settingsBtn.addEventListener("click", function () {
  //   this.classList.add("active");
  activateBtn(settingsBtn);
  handle.style.transform = `rotate(${180}deg)`;
  knobIcon.className = "fas fa-cog";
});

microphoneBtn.addEventListener("click", function () {
  //   this.classList.add("active");
  activateBtn(microphoneBtn);
  handle.style.transform = `rotate(${135}deg)`;
  knobIcon.className = "fas fa-microphone";
});

musicBtn.addEventListener("click", function () {
  //   this.classList.add("active");
  activateBtn(musicBtn);
  handle.style.transform = `rotate(${90}deg)`;
  knobIcon.className = "fas fa-music";
});

homeBtn.addEventListener("click", function () {
  //   this.classList.add("active");
  activateBtn(homeBtn);
  handle.style.transform = `rotate(${45}deg)`;
  knobIcon.className = "fas fa-home";
});

function deleteActiveClass() {
  let item = document.querySelector(".active");

  if (item) {
    item.classList.remove("active");
  }
}

let activateBtn = (element) => {
  deleteActiveClass();
  element.classList.add("active");
};
