export default class Tables {
  constructor() {
    // Attach to a drupal behaviour to update on content changes.
    Drupal.behaviors.iconExternalLinks = {
      attach: (context) => {
        const links = context.querySelectorAll(
          `.text-formatted a[href^="http"]:not([href*="${window.location.hostname}"]):not(.external-processed)`,
        );

        if (links) {
          Array.from(links).forEach((link) => {
            link.setAttribute('rel', 'nofollow noopener');
            link.classList.add('external-processed');

            const icon = document.createElement('i');
            icon.setAttribute('title', 'External website');
            icon.classList.add('fal', 'fa-sm', 'fa-external-link', 'mx-2');
            link.parentNode.insertBefore(icon, link.nextSibling);
          });

          Drupal.behaviors.iconagencyFontAwesome.attach(context);
        }
      },
    };

    // Initalize this behaviour immediatly.
    Drupal.behaviors.iconExternalLinks.attach(document);
  }
}
