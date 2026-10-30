(function () {
  var ICONS = {    gps: "c8b8888b-f1b4-4668-8aed-5a9adc19a253.svg",
    location: "ba95a412-7b4d-4d5a-99f8-1cfc82f52aec.svg",
    phone: "d04b6063-bf50-42e6-8df1-816368ba10ff.svg",
    email: "ff0194b6-3ea5-4eb9-b81d-8f5beb3f5c95.svg",
    // hospital: era uma cruz sólida avulsa; agora o prédio de clínica do layout.
    hospital: "clinica.svg",
    // car: o desenho original tinha a placa vazia porque o "P" saiu do Figma
    // como arquivo separado. O carro-estacionamento.svg junta os dois.
    car: "carro-estacionamento.svg",
    map: "1630d716-b378-4654-ba86-494d69782e5f.png",
    logo: "36002e8b-4b48-4080-b3fa-ed75cc9e5f41.png",
  };

  var LEGACY_FOOTER_NODE_IDS = [
    "21:295",
    "21:301",
    "21:300",
    "21:310",
    "21:311",
    "21:317",
    "21:319",
    "21:379",
    "21:408",
    "21:409",
    "21:420",
    "21:424",
    "21:426",
    "21:428",
    "21:437",
    "21:438",
    "21:440",
    "21:442",
    "21:461",
    "21:478",
    "21:488",
    "2038:279",
  ];

  function hideLegacyFigmaFooter() {
    var root = document.getElementById("root");
    if (!root) return;
    LEGACY_FOOTER_NODE_IDS.forEach(function (nodeId) {
      var nodes = root.querySelectorAll('[data-node-id="' + nodeId + '"]');
      nodes.forEach(function (node) {
        node.style.setProperty("display", "none", "important");
      });
    });
  }

  function watchLegacyFigmaFooter() {
    var root = document.getElementById("root");
    if (!root || typeof MutationObserver === "undefined") return;
    hideLegacyFigmaFooter();
    var observer = new MutationObserver(hideLegacyFigmaFooter);
    observer.observe(root, { childList: true, subtree: true });
    window.setTimeout(hideLegacyFigmaFooter, 0);
    window.setTimeout(hideLegacyFigmaFooter, 300);
    window.setTimeout(hideLegacyFigmaFooter, 1200);
  }

  function assetPrefix() {
    var mount = document.getElementById("moretti-footer-mount");
    if (mount && mount.getAttribute("data-assets")) {
      return mount.getAttribute("data-assets");
    }
    return "./images/";
  }

  function homeHref(prefix) {
    return prefix.indexOf("../") === 0 ? "../index.html#sobre" : "./index.html#sobre";
  }

  // Os SVGs ficam 6 meses em cache (.htaccess). Quando um ícone é corrigido,
  // basta subir esta versão para que os navegadores busquem o arquivo novo.
  var ICON_VERSION = "20260831h";

  function icon(prefix, name) {
    return prefix + ICONS[name] + "?v=" + ICON_VERSION;
  }

  function contactIcon(prefix, name) {
    return (
      '<span class="moretti-footer__contact-icon" aria-hidden="true">' +
      '<img src="' + icon(prefix, name) + '" alt="" width="22" height="22" decoding="async" />' +
      "</span>"
    );
  }

  function emailIconHtml() {
    return (
      '<span class="moretti-footer__contact-icon moretti-footer__contact-icon--email" aria-hidden="true">' +
      '<svg xmlns="http://www.w3.org/2000/svg" width="23" height="17" viewBox="0 0 23 16.974" fill="none">' +
      '<path d="M20.9785 0H2.02148C0.909129 0 0 0.95 0 2.12169V14.8519C0 16.024 0.909713 16.9736 2.02148 16.9736H20.9785C22.0909 16.9736 23 16.0236 23 14.8519V2.12169C23 0.949717 22.0904 0 20.9785 0ZM20.6681 1.41446C20.0145 2.10269 12.3376 10.1865 12.0222 10.5186C11.7587 10.7959 11.2414 10.7961 10.9778 10.5186L2.33189 1.41446H20.6681ZM1.34766 14.5918V2.38172L7.1455 8.48678L1.34766 14.5918ZM2.33189 15.5591L8.0969 9.48859L10.0234 11.5172C10.8128 12.3484 12.1875 12.3481 12.9767 11.5172L14.9031 9.48864L20.6681 15.5591H2.33189ZM21.6523 14.5918L15.8545 8.48678L21.6523 2.38172V14.5918Z" fill="#081A3D"/>' +
      "</svg></span>"
    );
  }

  /**
   * Conteúdo do rodapé por variante.
   *
   * A página escolhe a variante pelo atributo data-variant do
   * #moretti-footer-mount. Sem o atributo, usa "padrao".
   */
  var VARIANTES = {
    padrao: {
      titulo: "Fale com o Dr. Rafael Moretti",
      paragrafos: [
        "Agende sua avaliação, tire dúvidas sobre artroplastia, infiltração ou cirurgia robótica e descubra qual o melhor tratamento para seu caso pelo WhatsApp abaixo:",
      ],
      endereco: "Av. das Araucárias, 1000 – Sala 300 – Curitiba/PR",
      botao: "Enviar mensagem",
      nota: "Agende sua avaliação com o Dr. Rafael Moretti e dê o primeiro passo para recuperar movimento e qualidade de vida.",
    },
    curitiba: {
      titulo: "Atendimento em Curitiba",
      paragrafos: [
        "Em Curitiba, o Dr. Rafael Moretti oferece atendimento humanizado e personalizado para quem busca tratamentos modernos e cirurgias seguras do quadril e do joelho.",
        "Cada paciente é acompanhado com atenção, tecnologia e cuidado individualizado, em todas as fases do seu tratamento.",
      ],
      endereco: "Av. das Araucárias, 1000, sala 300 – Curitiba/PR",
      botao: "Agende sua consulta pelo WhatsApp",
      nota: "e dê o primeiro passo para viver sem dor.",
    },
    "protese-joelho": {
      titulo: "Atendimento em Curitiba",
      paragrafos: [
        "Atendimento especializado em Curitiba para pacientes que buscam tratamentos modernos e cirurgias de alta precisão no quadril e no joelho.",
        "Em Curitiba, o Dr. Rafael Moretti oferece <strong>atendimento humanizado</strong> para quem busca <strong>tratamento personalizado e cirurgia segura</strong> do quadril e do joelho.",
        "Cada paciente é acompanhado com <strong>atenção, tecnologia e cuidado individualizado</strong>, em todas as fases do seu tratamento.",
      ],
      endereco: "Av. das Araucárias, 1000, sala 300 – Curitiba/PR",
      botao: "Agende sua consulta pelo WhatsApp",
      nota: "",
    },
    "revisao-protese": {
      titulo: "Atendimento em Curitiba",
      paragrafos: [
        "Atendimento especializado em Curitiba para pacientes que buscam tratamentos modernos e cirurgias de alta precisão no quadril e no joelho.",
        "Em Curitiba, o Dr. Rafael Moretti oferece <strong>atendimento humanizado</strong> para quem busca <strong>tratamento personalizado e cirurgia segura</strong> do quadril e do joelho.",
        "Cada paciente é acompanhado com <strong>atenção, tecnologia e cuidado individualizado</strong>, em todas as fases do seu tratamento.",
      ],
      endereco: "Av. das Araucárias, 1000, sala 300 – Curitiba/PR",
      botao: "Agende sua consulta pelo WhatsApp",
      nota: "e dê o primeiro passo para viver sem dor.",
    },
    "infiltracao-joelho": {
      titulo: "Atendimento em Curitiba",
      paragrafos: [
        "O consultório do Dr. Rafael Moretti está localizado em uma região central de Curitiba, proporcionando fácil acesso e um ambiente acolhedor.",
        "Cada atendimento é realizado com foco no cuidado individualizado, garantindo conforto, segurança e acompanhamento próximo em todas as etapas do tratamento, desde a avaliação inicial até o retorno às suas atividades.",
      ],
      endereco: "Av. das Araucárias, 1000 – Sala 300 – Curitiba/PR",
      botao: "Agendar via WhatsApp",
      nota: "",
    },
    "infiltracao-quadril": {
      titulo: "Fale com o Dr. Rafael Moretti",
      paragrafos: [
        "Atendimento especializado em Curitiba para pacientes que buscam tratamentos modernos e cirurgias de alta precisão no quadril e no joelho.",
        "Em Curitiba, o Dr. Rafael Moretti oferece atendimento humanizado para quem busca tratamento personalizado e cirurgia segura do quadril e do joelho.",
        "Cada paciente é acompanhado com atenção, tecnologia e cuidado individualizado, em todas as fases do seu tratamento.",
      ],
      endereco: "Av. das Araucárias, 1000 – Sala 300 – Curitiba/PR",
      botao: "Enviar mensagem",
      nota: "Agende sua avaliação com o Dr. Rafael Moretti e dê o primeiro passo para recuperar movimento e qualidade de vida.",
    },
  };

  function varianteNome() {
    var mount = document.getElementById("moretti-footer-mount");
    var nome = mount && mount.getAttribute("data-variant");
    return VARIANTES[nome] ? nome : "padrao";
  }

  function variante() {
    return VARIANTES[varianteNome()];
  }

  function renderHighlights(prefix, v) {
    if (v.highlights === false) return "";
    return (
      '<div class="moretti-footer__highlights" aria-label="Diferenciais do consultório">' +
      '<div class="moretti-footer__highlight">' +
      '<img src="' + icon(prefix, "hospital") + '" alt="" width="48" height="48" loading="lazy" />' +
      "<p>O consultório do Dr. Rafael Moretti oferece um ambiente acolhedor, infraestrutura completa e acompanhamento médico em todas as etapas, da avaliação à recuperação.</p>" +
      "</div>" +
      '<div class="moretti-footer__highlight">' +
      '<img src="' + icon(prefix, "car") + '" alt="" width="48" height="48" loading="lazy" />' +
      "<p>Também possui localização central, de fácil acesso e com estacionamento próprio.</p>" +
      "</div>" +
      "</div>"
    );
  }

  function renderFooter(prefix) {
    var year = new Date().getFullYear();
    var v = variante();
    var nome = varianteNome();
    return (
      '<footer class="moretti-footer moretti-footer--' + nome + '" id="contato">' +
      '<div class="moretti-footer__inner">' +
      '<div class="moretti-footer__grid">' +
      '<div>' +
      '<h2 class="moretti-footer__title">' +
      '<img src="' + icon(prefix, "gps") + '" alt="" width="56" height="56" />' +
      v.titulo +
      "</h2>" +
      '<div class="moretti-footer__copy">' +
      "<p>" + v.paragrafos.join("</p><p>") + "</p>" +
      "</div>" +
      renderHighlights(prefix, v) +
      '<ul class="moretti-footer__contact" aria-label="Contato">' +
      "<li><a href=\"https://www.google.com/maps/search/?api=1&query=Av.+das+Araucarias+1000+Curitiba\" target=\"_blank\" rel=\"noopener noreferrer\">" +
      contactIcon(prefix, "location") +
      "<span>" + v.endereco + "</span></a></li>" +
      '<li><a href="tel:+5541900000438">' +
      contactIcon(prefix, "phone") +
      "<span>(41) 90000-0438</span></a></li>" +
      '<li><a href="mailto:contato@drmoretti.exemplo.com">' +
      emailIconHtml() +
      '<span class="moretti-footer__contact-email">contato@drmoretti.exemplo.com</span></a></li>' +
      "</ul>" +
      '<div class="moretti-footer__cta">' +
      '<a href="https://wa.me/5541900000438" target="_blank" rel="noopener noreferrer">' + v.botao + "</a>" +
      "</div>" +
      (v.nota ? '<p class="moretti-footer__note">' + v.nota + "</p>" : "") +
      "</div>" +
      '<div class="moretti-footer__map">' +
      '<img src="' + icon(prefix, "map") + '" alt="Mapa ilustrativo da região de Curitiba" width="413" height="620" loading="lazy" />' +
      "</div>" +
      "</div>" +
      "</div>" +
      '<div class="moretti-footer__bar">' +
      '<div class="moretti-footer__bar-inner">' +
      '<img class="moretti-footer__logo" src="' + icon(prefix, "logo") + '" alt="Dr. Rafael Moretti" width="140" height="179" loading="lazy" />' +
      '<span class="moretti-footer__bar-divider" aria-hidden="true"></span>' +
      '<div class="moretti-footer__bar-links">' +
      '<a href="' + homeHref(prefix) + '">Resumo do Doutor</a>' +
      '<span class="moretti-footer__bar-divider" aria-hidden="true"></span>' +
      "<span>Redes sociais</span>" +
      '<span class="moretti-footer__bar-divider" aria-hidden="true"></span>' +
      "<span>© " + year + " Dr. Rafael Moretti — Ortopedia | Curitiba/PR</span>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</footer>"
    );
  }

  function mountFooter() {
    if (document.querySelector("footer.moretti-footer")) {
      document.body.classList.add("moretti-has-shared-footer");
      watchLegacyFigmaFooter();
      return;
    }
    var mount = document.getElementById("moretti-footer-mount");
    if (!mount) return;
    var prefix = assetPrefix();
    mount.outerHTML = renderFooter(prefix);
    document.body.classList.add("moretti-has-shared-footer");
    watchLegacyFigmaFooter();
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mountFooter);
  } else {
    mountFooter();
  }
})();
