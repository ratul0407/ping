"use strict";
const notifyEl = document.querySelector(".notify__btn");
const emailEl = document.querySelector(".email__btn");
const errorEl = document.querySelector(".error__message");
notifyEl.addEventListener("click", function () {
  if (!emailEl.value) {
    errorEl.style.opacity = "1";
    emailEl.classList.add("border-light_red");
  } else if (!emailEl.value.includes("@" && ".com")) {
    errorEl.style.opacity = "1";
    emailEl.classList.add("border-light_red");
  } else {
    errorEl.style.opacity = "0";
    emailEl.classList.remove("border-light_red");
    emailEl.value = "";
  }
});
