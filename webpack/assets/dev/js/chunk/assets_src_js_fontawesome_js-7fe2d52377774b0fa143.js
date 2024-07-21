"use strict";
(self["webpackChunkiconagency"] = self["webpackChunkiconagency"] || []).push([["assets_src_js_fontawesome_js"],{

/***/ "./assets/src/js/fontawesome.js":
/*!**************************************!*\
  !*** ./assets/src/js/fontawesome.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FontAwesome)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs3/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/createClass */ "./node_modules/@babel/runtime-corejs3/helpers/esm/createClass.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/pro-light-svg-icons */ "./node_modules/@fortawesome/pro-light-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/pro-solid-svg-icons */ "./node_modules/@fortawesome/pro-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* provided dependency */ var Drupal = __webpack_require__(/*! drupal */ "drupal");


// IconAgency fontawesome.js
// Core Font Awesome
 // Font Awesome Icons




/**
 * IconAgency SVG FontAwesome loader.
 */

var FontAwesome = /*#__PURE__*/function () {
  function FontAwesome() {
    (0,_babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, FontAwesome);

    this.configure(); // Attach to a drupal behaviour to update on content changes.

    Drupal.behaviors.iconagencyFontAwesome = {
      attach: function attach(context) {
        if (context.querySelector('i')) {
          _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__.dom.i2svg({
            node: context
          });
        }
      }
    }; // Initalize this behaviour immediatly.

    Drupal.behaviors.iconagencyFontAwesome.attach(document);
  }

  (0,_babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(FontAwesome, [{
    key: "configure",
    value: function configure() {
      // Loaded in vendors.scss
      _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__.config.autoAddCss = false; // pro-light-svg-icons

      _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__.library.add(_fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faSearch, _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faExternalLink, _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faCheckCircle, _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faTimes, _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faBars); // pro-solid-svg-icons

      _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__.library.add(_fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faSearch, _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faCheck, _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faCircleCheck); // free-brands-svg-icons

      _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__.library.add(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faTwitter);
    }
  }]);

  return FontAwesome;
}();



/***/ })

}]);
//# sourceMappingURL=assets_src_js_fontawesome_js-7fe2d52377774b0fa143.js.map