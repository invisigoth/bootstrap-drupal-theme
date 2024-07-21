"use strict";
(self["webpackChunkiconagency"] = self["webpackChunkiconagency"] || []).push([["assets_src_js_external-links_js"],{

/***/ "./assets/src/js/external-links.js":
/*!*****************************************!*\
  !*** ./assets/src/js/external-links.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Tables)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/createClass */ "./node_modules/@babel/runtime-corejs3/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs3/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_array_from__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/array/from */ "./node_modules/@babel/runtime-corejs3/core-js-stable/array/from.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_array_from__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_array_from__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__);
/* provided dependency */ var Drupal = __webpack_require__(/*! drupal */ "drupal");






var Tables = /*#__PURE__*/(0,_babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(function Tables() {
  (0,_babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Tables);

  // Attach to a drupal behaviour to update on content changes.
  Drupal.behaviors.iconExternalLinks = {
    attach: function attach(context) {
      var links = context.querySelectorAll(".text-formatted a[href^=\"http\"]:not([href*=\"".concat(window.location.hostname, "\"]):not(.external-processed)"));

      if (links) {
        _babel_runtime_corejs3_core_js_stable_array_from__WEBPACK_IMPORTED_MODULE_2___default()(links).forEach(function (link) {
          link.setAttribute('rel', 'nofollow noopener');
          link.classList.add('external-processed');
          var icon = document.createElement('i');
          icon.setAttribute('title', 'External website');
          icon.classList.add('fal', 'fa-sm', 'fa-external-link', 'mx-2');
          link.parentNode.insertBefore(icon, link.nextSibling);
        });

        Drupal.behaviors.iconagencyFontAwesome.attach(context);
      }
    }
  }; // Initalize this behaviour immediatly.

  Drupal.behaviors.iconExternalLinks.attach(document);
});



/***/ })

}]);
//# sourceMappingURL=assets_src_js_external-links_js-d78e11880d68588ccc67.js.map