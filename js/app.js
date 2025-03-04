document.addEventListener("DOMContentLoaded", function () {
  // Crée le bouton burger et l'ajoute à la navigation
  const burger = document.createElement("div");
  burger.classList.add("burger-menu");
  burger.innerHTML = "☰";
  document.querySelector(".nav-bar").appendChild(burger);

  // Cible le menu et ajoute l'événement de toggle
  const navLinks = document.querySelector(".nav-bar ul:nth-child(2)");

  burger.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });
});
