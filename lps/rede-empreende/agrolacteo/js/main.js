// Rede Empreende no AgroLácteo 2026 — interações
(function () {
  // Troca de dia ativo na programação
  var dayButtons = document.querySelectorAll('.btn--day');
  dayButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      dayButtons.forEach(function (b) { b.classList.remove('is-active'); });
      btn.classList.add('is-active');
      // Aqui pode-se filtrar as atividades pelo dia (data-day)
    });
  });
})();
