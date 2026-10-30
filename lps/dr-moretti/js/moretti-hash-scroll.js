(function () {
  var NAV_OFFSET = 110;

  function getNavOffset() {
    return document.body.classList.contains("moretti-has-nav") ? NAV_OFFSET : 0;
  }

  function isSamePageHref(href) {
    if (!href || href.charAt(0) === "#") return true;

    var hashIndex = href.indexOf("#");
    var path = hashIndex === -1 ? href : href.slice(0, hashIndex);
    if (!path || path === "./" || path === ".") return true;

    var currentFile = window.location.pathname.split("/").pop() || "index.html";
    var normalized = path.replace(/^\.\//, "");

    return (
      normalized === currentFile ||
      normalized === window.location.pathname ||
      path.endsWith(window.location.pathname)
    );
  }

  function scrollToHashTarget(behavior) {
    var hash = window.location.hash;
    if (!hash || hash.length < 2) return false;

    var id = decodeURIComponent(hash.slice(1));
    var target = document.getElementById(id);
    if (!target) return false;

    var top =
      target.getBoundingClientRect().top +
      window.pageYOffset -
      getNavOffset();

    window.scrollTo({
      top: Math.max(0, top),
      behavior: behavior || "auto",
    });
    return true;
  }

  function scheduleHashScroll(behavior, maxAttempts) {
    var attempts = 0;
    var limit = maxAttempts || 16;

    function tryScroll() {
      attempts += 1;
      if (scrollToHashTarget(behavior)) return;
      if (attempts < limit) {
        window.setTimeout(tryScroll, 50);
      }
    }

    window.requestAnimationFrame(function () {
      window.requestAnimationFrame(tryScroll);
    });
  }

  if (window.history && "scrollRestoration" in window.history) {
    window.history.scrollRestoration = "manual";
  }

  function onInitialLoad() {
    if (window.location.hash) {
      scheduleHashScroll("auto", 24);
    }
  }

  if (document.readyState === "complete") {
    onInitialLoad();
  } else {
    window.addEventListener("load", onInitialLoad);
  }

  window.addEventListener("hashchange", function () {
    scheduleHashScroll("smooth", 16);
  });

  document.addEventListener("click", function (e) {
    var link = e.target.closest && e.target.closest("a[href*='#']");
    if (!link) return;

    var href = link.getAttribute("href") || "";
    var hashIndex = href.indexOf("#");
    if (hashIndex === -1) return;

    if (!isSamePageHref(href)) return;

    var hash = href.slice(hashIndex);
    if (!hash || hash === "#") return;

    e.preventDefault();

    if (window.history && window.history.pushState) {
      window.history.pushState(null, "", hash);
    } else {
      window.location.hash = hash;
    }

    scheduleHashScroll("smooth", 16);
  });

  window.morettiScrollToHash = scheduleHashScroll;
})();
