import $ from 'jquery';

export default class Webform {
  constructor() {
    this.init();
  }

  init() {
    const self = this;

    window.dataLayer = window.dataLayer || [];

    $(document).ajaxComplete(function (event, xhr, settings) {
      const activePageTracker = $('.webform-progress-tracker .progress-step.is-active');
      const categorySelect = $('.webform-submission-request-a-translation-form .form-item-category select');

      if (categorySelect.length) {
        self.categoryField(categorySelect);

        categorySelect.on('change', function () {
          self.categoryField(categorySelect);
        });
      }

      if (activePageTracker.length) {
        let pageKey = activePageTracker.attr('data-webform-page');

        switch (pageKey) {

          case 'contact_details':
            dataLayer.push({
              'form-name': 'request-translation-form',
              'event': 'form-step-1-org-details',
            });
            break;

          case 'translation_request':
            dataLayer.push({
              'form-name': 'request-translation-form',
              'event': 'form-step-2-contact-details',
            });
            break;

          case 'review_for_submission':
            dataLayer.push({
              'form-name': 'request-translation-form',
              'event': 'form-step-3-translation-request',
            });

            $('.webform-submission-request-a-translation-form .webform-button--submit').on('click', function () {
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

    $('.webform-submission-general-enquiry-form #edit-actions-submit').on('click', function () {
      dataLayer.push({
        'form-name': 'contact-form',
        'event': 'form-submitted'
      });
    });
  }

  categoryField(categoryElement) {
    $('.webform-submission-request-a-translation-form .form-item-category select').on('change', function () {
      const categoryValue = categoryElement.val();
      const submitButton = $('.webform-submission-request-a-translation-form .form-submit');

      categoryElement.removeClass('error');
      submitButton.removeAttr('disabled');

      if (categoryValue === 'Not an Australian Government-subsidised aged care provider') {
        categoryElement.addClass('error');
        submitButton.prop('disabled', true);
      }
    });
  }
}
