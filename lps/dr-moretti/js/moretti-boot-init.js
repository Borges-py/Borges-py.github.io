(function () {
  var errorBox = document.getElementById("boot-error");
  var root = document.getElementById("root");
  var appReady = false;

  function showBootError(message) {
    if (errorBox) {
      errorBox.textContent = message;
      errorBox.classList.add("visible");
      return;
    }
    if (!root) return;
    root.classList.remove("loading");
    root.style.color = "#ffffff";
    root.style.textAlign = "center";
    root.style.padding = "24px";
    root.textContent = message;
  }

  window.__morettiBoot = {
    showBootError: showBootError,
    markLoaded: function () {
      appReady = true;
      if (errorBox) errorBox.classList.remove("visible");
    },
  };

  window.setTimeout(function () {
    if (!appReady && root && root.classList.contains("loading")) {
      showBootError(
        "A pagina demorou para carregar. Confirme que o Apache esta ligado e acesse http://192.168.15.5/gruposd_moretti/ na mesma rede Wi-Fi."
      );
    }
  }, 15000);
})();
