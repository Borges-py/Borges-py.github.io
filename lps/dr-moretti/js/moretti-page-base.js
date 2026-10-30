(function () {
  var path = window.location.pathname || "/";
  var decoded = decodeURIComponent(path);
  var marker = "/gruposd_moretti";
  var markerIdx = decoded.toLowerCase().indexOf(marker);

  if (markerIdx >= 0) {
    window.__MORETTI_ROOT__ = decoded.substring(0, markerIdx + marker.length) + "/";
  } else {
    window.__MORETTI_ROOT__ = "/";
  }

  if (!path.endsWith("/")) {
    path = path.replace(/[^/]+$/, "");
  }
  if (!path.endsWith("/")) {
    path += "/";
  }
  window.__MORETTI_BASE__ = path;
})();
