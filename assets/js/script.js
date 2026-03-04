const mobileBtn = document.querySelector(".menu-opener");
const navLinks = document.querySelector("header nav");
const icon = document.querySelector(".menu-opener i");

mobileBtn.addEventListener("click", () => {
  navLinks.classList.toggle("opened");
  icon.classList.toggle("fa-times");
  icon.classList.toggle("fa-bars");
});
