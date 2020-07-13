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

let rot = 0;

cameraBtn.addEventListener("click", function () {
  rotationHandle(this, 0, "fas fa-camera");
});

videoBtn.addEventListener("click", function () {
  rotationHandle(this, 310, "fas fa-video");
});

envelopeBtn.addEventListener("click", function () {
  rotationHandle(this, 270, "fas fa-envelope");
});

commentBtn.addEventListener("click", function () {
  rotationHandle(this, 230, "fas fa-comment-alt");
});

settingsBtn.addEventListener("click", function () {
  rotationHandle(this, 180, "fas fa-cog");
});

microphoneBtn.addEventListener("click", function () {
  rotationHandle(this, 135, "fas fa-microphone");
});

musicBtn.addEventListener("click", function () {
  rotationHandle(this, 90, "fas fa-music");
});

homeBtn.addEventListener("click", function () {
  rotationHandle(this, 45, "fas fa-home");
});

function deleteActiveClass() {
  let item = document.querySelector(".active");

  if (item) {
    item.classList.remove("active");
  }
}

let activateBtn = (element) => {
  element.classList.add("active");
};

function addIconOnKnob(classes) {
  knobIcon.className = classes;
}

function newRotate(newRot) {
  let apparentRot = rot % 360;

  if (apparentRot < 0) {
    apparentRot += 360;
  }

  if (apparentRot < 180 && newRot > apparentRot + 180) {
    // rotate back
    rot -= 360;
  }

  if (apparentRot >= 180 && newRot <= apparentRot - 180) {
    // rotate forward
    rot += 360;
  }

  rot += newRot - apparentRot;

  handle.style.transform = `rotate(${rot}deg)`;
}

function rotationHandle(element, newRot, classes) {
  deleteActiveClass();
  activateBtn(element);
  newRotate(newRot);
  addIconOnKnob(classes);
}
