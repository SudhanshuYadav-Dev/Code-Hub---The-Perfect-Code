// For Mobile Hamburger Menu
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// For Dark/Light Mode Switcher
const modeSwitcher = document.getElementById("mode-switcher");

modeSwitcher.addEventListener("click", () => {
  const currentTheme = document.body.getAttribute("data-theme");
  if (currentTheme === "dark") {
    document.body.removeAttribute("data-theme");
    modeSwitcher.textContent = "Switch Mode";
  } else {
    document.body.setAttribute("data-theme", "dark");
    modeSwitcher.textContent = "Light Mode";
  }
});
