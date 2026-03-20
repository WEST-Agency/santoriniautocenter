const mobileBtn = document.querySelector(".menu-opener");
const navLinks = document.querySelector("header nav");
const icon = document.querySelector(".menu-opener i");

mobileBtn.addEventListener("click", () => {
  navLinks.classList.toggle("opened");
  icon.classList.toggle("fa-times");
  icon.classList.toggle("fa-bars");
});

const toggleSlider = () => {
  const slides = document.querySelectorAll("input[name=slider]");
  if (slides.length === 0) return;

  let current = document.querySelector("input[name=slider]:checked");
  if (!current) {
    current = document.querySelector("input[name=slider]");
    current.setAttribute("checked", true);
  }

  let id = parseInt(current.getAttribute("id").split("-")[1]);

  if (id + 1 <= slides.length) {
    id++;
  } else {
    id = 1;
  }

  for (let slider of slides) slider.removeAttribute("checked");
  document.querySelector(`#slider-${id}`).setAttribute("checked", true);
};

setInterval(toggleSlider, 7500);
