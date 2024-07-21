"use strict";
(self["webpackChunkiconagency"] = self["webpackChunkiconagency"] || []).push([["assets_src_js_webform_js"],{

/***/ "./assets/src/js/webform.js":
/*!**********************************!*\
  !*** ./assets/src/js/webform.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Webform)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs3/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/createClass */ "./node_modules/@babel/runtime-corejs3/helpers/esm/createClass.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);




var Webform = /*#__PURE__*/function () {
  function Webform() {
    (0,_babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Webform);

    this.init();
  }

  (0,_babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Webform, [{
    key: "init",
    value: function init() {
      var self = this;
      window.dataLayer = window.dataLayer || [];
      jquery__WEBPACK_IMPORTED_MODULE_2___default()(document).ajaxComplete(function (event, xhr, settings) {
        var activePageTracker = jquery__WEBPACK_IMPORTED_MODULE_2___default()('.webform-progress-tracker .progress-step.is-active');
        var categorySelect = jquery__WEBPACK_IMPORTED_MODULE_2___default()('.webform-submission-request-a-translation-form .form-item-category select');

        if (categorySelect.length) {
          self.categoryField(categorySelect);
          categorySelect.on('change', function () {
            self.categoryField(categorySelect);
          });
        }

        if (activePageTracker.length) {
          var pageKey = activePageTracker.attr('data-webform-page');

          switch (pageKey) {
            case 'contact_details':
              dataLayer.push({
                'form-name': 'request-translation-form',
                'event': 'form-step-1-org-details'
              });
              break;

            case 'translation_request':
              dataLayer.push({
                'form-name': 'request-translation-form',
                'event': 'form-step-2-contact-details'
              });
              break;

            case 'review_for_submission':
              dataLayer.push({
                'form-name': 'request-translation-form',
                'event': 'form-step-3-translation-request'
              });
              jquery__WEBPACK_IMPORTED_MODULE_2___default()('.webform-submission-request-a-translation-form .webform-button--submit').on('click', function () {
                dataLayer.push({
                  'form-name': 'request-translation-form',
                  'event': 'form-submitted'
                });
              });
              break;

            default:
              // Do nothing.
              break;
          }
        }
      });
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('.webform-submission-general-enquiry-form #edit-actions-submit').on('click', function () {
        dataLayer.push({
          'form-name': 'contact-form',
          'event': 'form-submitted'
        });
      });
    }
  }, {
    key: "categoryField",
    value: function categoryField(categoryElement) {
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('.webform-submission-request-a-translation-form .form-item-category select').on('change', function () {
        var categoryValue = categoryElement.val();
        var submitButton = jquery__WEBPACK_IMPORTED_MODULE_2___default()('.webform-submission-request-a-translation-form .form-submit');
        categoryElement.removeClass('error');
        submitButton.removeAttr('disabled');

        if (categoryValue === 'Not an Australian Government-subsidised aged care provider') {
          categoryElement.addClass('error');
          submitButton.prop('disabled', true);
        }
      });
    }
  }]);

  return Webform;
}();



/***/ })

}]);
//# sourceMappingURL=assets_src_js_webform_js-1aa001109f7ed2b975df.js.map