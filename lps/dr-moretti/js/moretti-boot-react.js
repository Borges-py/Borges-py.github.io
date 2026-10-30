(function () {
  function loadScript(src) {
    return new Promise(function (resolve, reject) {
      var s = document.createElement("script");
      s.src = src;
      s.async = false;
      s.onload = function () {
        resolve();
      };
      s.onerror = function () {
        reject(new Error("Falha ao carregar: " + src));
      };
      document.head.appendChild(s);
    });
  }

  var root = window.__MORETTI_ROOT__;
  var base = window.__MORETTI_BASE__;
  var version = "20260606";

  if (!root || !base) {
    console.error("moretti-page-base.js deve ser carregado antes de moretti-boot-react.js");
    return;
  }

  var scripts = [
    root + "js/react.production.min.js",
    root + "js/react-dom.production.min.js",
    root + "js/moretti-mobile-scaler.js?v=" + version,
    base + "app.js?v=" + version,
  ];

  var chain = Promise.resolve();
  scripts.forEach(function (src) {
    chain = chain.then(function () {
      return loadScript(src);
    });
  });

  chain.catch(function (err) {
    var el = document.getElementById("root");
    if (!el) return;
    el.classList.remove("loading");
    el.style.color = "#ffffff";
    el.style.textAlign = "center";
    el.style.padding = "24px";
    el.innerHTML =
      "Nao foi possivel carregar a pagina. Limpe o cache do navegador e tente novamente.<br><small style='opacity:0.8'>" +
      (err && err.message ? err.message : "erro desconhecido") +
      "</small>";
  });
})();
