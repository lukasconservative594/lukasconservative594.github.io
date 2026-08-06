/*
 * The mobile menu works without JavaScript (a checkbox drives it in CSS).
 * This file only adds the niceties: correct ARIA state, close-on-navigate,
 * close on Escape, and a clean slate on back/forward navigation.
 */
(function () {
  var menuToggle = document.getElementById("menu-toggle");

  if (!menuToggle) {
    return;
  }

  function setMenuOpen(isOpen) {
    menuToggle.checked = isOpen;
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  }

  menuToggle.addEventListener("change", function () {
    menuToggle.setAttribute("aria-expanded", String(menuToggle.checked));
  });

  document.querySelectorAll(".navigation a").forEach(function (link) {
    link.addEventListener("click", function () {
      setMenuOpen(false);
    });
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && menuToggle.checked) {
      setMenuOpen(false);
    }
  });

  window.addEventListener("pagehide", function () {
    setMenuOpen(false);
  });

  window.addEventListener("pageshow", function () {
    setMenuOpen(false);
  });
})();
