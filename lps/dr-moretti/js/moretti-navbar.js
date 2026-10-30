(function (global) {
  function navPrefix() {
    var base = global.__MORETTI_BASE__ || "/";
    var parts = base.replace(/\/$/, "").split("/");
    var last = parts[parts.length - 1] || "";
    return last === "gruposd_moretti" ? "./" : "../";
  }

  function logoPath() {
    return navPrefix() === "./"
      ? "./images/36002e8b-4b48-4080-b3fa-ed75cc9e5f41.png"
      : "../images/36002e8b-4b48-4080-b3fa-ed75cc9e5f41.png";
  }

  function MorettiNavBar() {
    var React = global.React;
    var useState = React.useState;
    var _especialidades = useState(false);
    var especialidadesOpen = _especialidades[0];
    var setEspecialidadesOpen = _especialidades[1];
    var _tratamentos = useState(false);
    var tratamentosOpen = _tratamentos[0];
    var setTratamentosOpen = _tratamentos[1];

    var P = navPrefix();

    var linkStyle = { textDecoration: "none" };
    var navLinkClass =
      "font-['Poppins:SemiBold',sans-serif] not-italic text-[20px] text-white whitespace-nowrap cursor-pointer transition-colors duration-200 hover:text-[#437ae4]";
    var dropdownLinkClass =
      "font-['Poppins:SemiBold',sans-serif] not-italic text-[18px] text-white whitespace-nowrap block px-5 py-[10px] hover:text-[#437ae4] hover:bg-[rgba(255,255,255,0.07)] transition-colors duration-150";

    function scrollToSobre(e) {
      e.preventDefault();
      var el = document.getElementById("sobre");
      if (!el) {
        global.scrollTo({ top: 870, behavior: "smooth" });
        return;
      }
      var navOffset = 110;
      var top =
        el.getBoundingClientRect().top + global.pageYOffset - navOffset;
      global.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
    }

    return React.createElement(
      "nav",
      {
        className: "absolute top-0 left-0 right-0 z-[1000] flex items-center px-[46px]",
        style: {
          backgroundImage:
            "linear-gradient(125.45790826653177deg, rgb(8, 26, 61) 36.042%, rgb(1, 42, 121) 74.946%)",
          height: "101px",
        },
      },
      React.createElement(
        "a",
        { href: P + "index.html", className: "flex-shrink-0 mr-[50px]", style: linkStyle },
        React.createElement("img", {
          src: logoPath(),
          alt: "Dr. Rafael Moretti",
          style: { height: "80px", width: "auto" },
        })
      ),
      React.createElement(
        "div",
        { className: "flex items-center gap-[38px] flex-1 justify-center" },
        React.createElement(
          "a",
          { href: P + "index.html", className: navLinkClass, style: linkStyle },
          "Início"
        ),
        React.createElement(
          "div",
          {
            className: "relative",
            onMouseEnter: function () {
              setEspecialidadesOpen(true);
            },
            onMouseLeave: function () {
              setEspecialidadesOpen(false);
            },
          },
          React.createElement("span", { className: navLinkClass }, "Especialidades"),
          especialidadesOpen &&
            React.createElement(
              "div",
              {
                className: "absolute top-full left-0 rounded-[8px] py-2 min-w-[210px] z-[1001] shadow-xl",
                style: {
                  background: "rgb(8, 26, 61)",
                  border: "1px solid rgba(67,122,228,0.3)",
                },
              },
              React.createElement(
                "a",
                {
                  href: P + "moretti - protese joelho/index.html",
                  className: dropdownLinkClass,
                  style: linkStyle,
                },
                "Prótese de Joelho"
              ),
              React.createElement(
                "a",
                {
                  href: P + "moretti - protese quadril/index.html",
                  className: dropdownLinkClass,
                  style: linkStyle,
                },
                "Prótese de Quadril"
              )
            )
        ),
        React.createElement(
          "a",
          {
            href: P + "moretti - cirurgia robotica/index.html",
            className: navLinkClass,
            style: linkStyle,
          },
          "Cirurgia Robótica"
        ),
        React.createElement(
          "div",
          {
            className: "relative",
            onMouseEnter: function () {
              setTratamentosOpen(true);
            },
            onMouseLeave: function () {
              setTratamentosOpen(false);
            },
          },
          React.createElement("span", { className: navLinkClass }, "Tratamentos Não Cirúrgicos"),
          tratamentosOpen &&
            React.createElement(
              "div",
              {
                className: "absolute top-full left-0 rounded-[8px] py-2 min-w-[230px] z-[1001] shadow-xl",
                style: {
                  background: "rgb(8, 26, 61)",
                  border: "1px solid rgba(67,122,228,0.3)",
                },
              },
              React.createElement(
                "a",
                {
                  href: P + "moretti - infiltracao joelho/index.html",
                  className: dropdownLinkClass,
                  style: linkStyle,
                },
                "Infiltração no Joelho"
              ),
              React.createElement(
                "a",
                {
                  href: P + "moretti - infiltracao quadril/index.html",
                  className: dropdownLinkClass,
                  style: linkStyle,
                },
                "Infiltração no Quadril"
              )
            )
        ),
        React.createElement(
          "a",
          {
            href: P + "moretti - revisao protese/index.html",
            className: navLinkClass + " moretti-nav__link--long",
            style: linkStyle,
          },
          "Revisão de Prótese de Quadril e Joelho"
        ),
        React.createElement("a", { href: "#", className: navLinkClass, style: linkStyle }, "Blog"),
        React.createElement(
          "a",
          {
            href: "https://wa.me/5541900000438",
            target: "_blank",
            rel: "noopener noreferrer",
            className: navLinkClass,
            style: linkStyle,
          },
          "Contato"
        )
      )
    );
  }

  global.MorettiNavBar = MorettiNavBar;
})(window);
