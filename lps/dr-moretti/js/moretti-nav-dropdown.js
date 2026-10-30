(function () {
  var dropdowns = document.querySelectorAll(".moretti-nav__dropdown");
  if (!dropdowns.length) return;

  function closeAll(except) {
    dropdowns.forEach(function (dd) {
      if (dd === except) return;
      dd.classList.remove("is-open");
      var toggle = dd.querySelector(".moretti-nav__dropdown-toggle");
      if (toggle) toggle.setAttribute("aria-expanded", "false");
    });
    if (!except) document.body.classList.remove("moretti-nav-dropdown-open");
  }

  function openDropdown(dropdown) {
    closeAll(dropdown);
    dropdown.classList.add("is-open");
    document.body.classList.add("moretti-nav-dropdown-open");
    var toggle = dropdown.querySelector(".moretti-nav__dropdown-toggle");
    if (toggle) toggle.setAttribute("aria-expanded", "true");
  }

  function toggleDropdown(dropdown) {
    if (dropdown.classList.contains("is-open")) {
      closeAll(null);
    } else {
      openDropdown(dropdown);
    }
  }

  dropdowns.forEach(function (dropdown) {
    var toggle = dropdown.querySelector(".moretti-nav__dropdown-toggle");
    if (!toggle) return;

    if (toggle.tagName !== "BUTTON") {
      toggle.setAttribute("role", "button");
    }
    toggle.setAttribute("tabindex", "0");
    toggle.setAttribute("aria-haspopup", "true");
    if (!toggle.hasAttribute("aria-expanded")) {
      toggle.setAttribute("aria-expanded", "false");
    }

    toggle.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      toggleDropdown(dropdown);
    });

    toggle.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleDropdown(dropdown);
      }
      if (e.key === "Escape") closeAll(null);
    });

    var menu = dropdown.querySelector(".moretti-nav__dropdown-menu");
    if (menu) {
      menu.addEventListener("click", function (e) {
        e.stopPropagation();
      });
    }
  });

  document.addEventListener("click", function (e) {
    if (e.target.closest && e.target.closest(".moretti-nav__dropdown")) return;
    closeAll(null);
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeAll(null);
  });
})();
