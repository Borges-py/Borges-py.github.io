// Vitrine INOVA — Rede Empreende/PR — interações
(function () {
  // Pequeno feedback de clique no botão de edições (placeholder para futura navegação por edição)
  var pillBtn = document.querySelector('.edicoes__pill-btn');
  if (pillBtn) {
    pillBtn.addEventListener('click', function () {
      var pill = document.querySelector('.edicoes__pill');
      if (pill) {
        pill.classList.add('is-active');
      }
    });
  }
})();
