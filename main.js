/**
 * Portfolio site scripts.
 * Keeps behaviour minimal: set the copyright year.
 */
(function () {
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
})();
