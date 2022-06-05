let slideIndex = 0;
showSlides();
function plusSlides(n) {
  showSlides((slideIndex += n));
}
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++; 
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}
const signupForm = document.querySelector("#user-signup-form");
const first_name = document.querySelector("#first_name");
const email = document.querySelector("#email");
const website = document.querySelector("#website");
const message = document.querySelector("#message");

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const userData = {
    first_name: first_name.value,
    email: email.value,
    website: website.value,
    message: message.value,
  };
  createUser(userData);
  signupForm.reset();
});

async function createUser(userData) {
  try {
    const response = await fetch("http://api.kesho.me/v1/user-test/contact", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: { "Content-Type": "application/json" },
    });
    await response.json();
  } catch (e) {
    console.log("Error - ", e);
  }
}

const modalOpenBtn = document.querySelector("#send-button");
const myModal = document.querySelector(".my-modal");

modalOpenBtn.addEventListener("click", () => {
  openModal(".my-modal");
});

function openModal(modalSelector) {
  const modalNode = document.querySelector(modalSelector);
  modalNode.classList.add("visible");

  const closeBtn = modalNode.querySelector(".modal-close");
  closeBtn.addEventListener("click", () => {
    closeModal(modalSelector);
  });
}
function closeModal(modalSelector) {
  const modalNode = document.querySelector(modalSelector);
  modalNode.classList.remove("visible");
}
