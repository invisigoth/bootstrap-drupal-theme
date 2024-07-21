"use strict";
(self["webpackChunkiconagency"] = self["webpackChunkiconagency"] || []).push([["assets_src_js_nav_js"],{

/***/ "./assets/src/js/nav.js":
/*!******************************!*\
  !*** ./assets/src/js/nav.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Offcanvas)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/createClass */ "./node_modules/@babel/runtime-corejs3/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs3/helpers/esm/classCallCheck.js");
/* provided dependency */ var Drupal = __webpack_require__(/*! drupal */ "drupal");



var Offcanvas = /*#__PURE__*/(0,_babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(function Offcanvas() {
  (0,_babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Offcanvas);

  // Attach to a drupal behaviour to update on content changes.
  Drupal.behaviors.iconOffcanvas = {
    attach: function attach(context) {
      var offcanvas = document.getElementById("collasping-nav");
      offcanvas.setAttribute("tabindex", "-1");
      offcanvas.addEventListener("hidden.bs.offcanvas", function () {
        var toggler = document.querySelector('.navbar-toggler[data-bs-target="#collasping-nav"]');
        toggler.classList.add("collapsed");
        var mobnavtoggle = document.getElementById("mobile-nav-toggle");
        mobnavtoggle.setAttribute('aria-expanded', 'false');
      });
      offcanvas.addEventListener("shown.bs.offcanvas", function () {
        var toggler = document.querySelector('.navbar-toggler[data-bs-target="#collasping-nav"]');
        offcanvas.focus();
        toggler.classList.remove("collapsed");
        var mobnavtoggle = document.getElementById("mobile-nav-toggle");
        mobnavtoggle.setAttribute('aria-expanded', 'true');
      });
    }
  }; // Initalize this behaviour immediatly.

  Drupal.behaviors.iconOffcanvas.attach(document);
});



/***/ })

}]);
//# sourceMappingURL=assets_src_js_nav_js-dc3abbd5d10914d7130f.js.map