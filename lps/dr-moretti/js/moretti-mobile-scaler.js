(function (global) {
  var DESIGN_WIDTH = 1440;

  function getViewportWidth() {
    var width =
      global.innerWidth ||
      document.documentElement.clientWidth ||
      (global.screen && global.screen.width) ||
      DESIGN_WIDTH;
    return Math.max(Math.min(width, DESIGN_WIDTH * 2), 280);
  }

  function getPageScale() {
    return Math.min(1, getViewportWidth() / DESIGN_WIDTH);
  }

  function MorettiMobileScaler(props) {
    var React = global.React;
    var children = props.children;
    var designWidth = props.designWidth || DESIGN_WIDTH;
    var designHeight = props.designHeight;
    var wrapRef = React.useRef(null);
    var stageRef = React.useRef(null);
    var initialScale = getPageScale();

    React.useLayoutEffect(
      function () {
        var resizeTimer = null;

        function applyScale() {
          var wrap = wrapRef.current;
          var stage = stageRef.current;
          if (!wrap || !stage) return;

          var scale = getPageScale();
          wrap.style.width = designWidth * scale + "px";
          wrap.style.height = designHeight * scale + "px";
          stage.style.transform = "scale(" + scale + ")";
        }

        applyScale();

        function scheduleScaleUpdate() {
          if (resizeTimer) global.clearTimeout(resizeTimer);
          resizeTimer = global.setTimeout(applyScale, 150);
        }

        global.addEventListener("resize", scheduleScaleUpdate);
        global.addEventListener("orientationchange", scheduleScaleUpdate);

        return function () {
          if (resizeTimer) global.clearTimeout(resizeTimer);
          global.removeEventListener("resize", scheduleScaleUpdate);
          global.removeEventListener("orientationchange", scheduleScaleUpdate);
        };
      },
      [designWidth, designHeight]
    );

    return React.createElement(
      "div",
      { style: { width: "100%", maxWidth: "100vw", overflow: "hidden" } },
      React.createElement(
        "div",
        {
          ref: wrapRef,
          style: {
            width: designWidth * initialScale,
            height: designHeight * initialScale,
            margin: "0 auto",
            overflow: "hidden",
          },
        },
        React.createElement(
          "div",
          {
            ref: stageRef,
            style: {
              width: designWidth,
              height: designHeight,
              transform: "scale(" + initialScale + ")",
              transformOrigin: "top left",
            },
          },
          children
        )
      )
    );
  }

  global.MORETTI_DESIGN_WIDTH = DESIGN_WIDTH;
  global.MorettiMobileScaler = MorettiMobileScaler;
})(window);
