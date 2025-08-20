// Toggle hamburger menu
const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");
hamburger?.addEventListener("click", () => {
  nav.classList.toggle("open");
});

// Back to top button
const back = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    back.classList.add("show");
  } else {
    back.classList.remove("show");
  }
});

// Year auto update
document.getElementById("year").textContent = new Date().getFullYear();
