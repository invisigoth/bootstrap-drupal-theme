// IconAgency fontawesome.js

// Core Font Awesome
import { library, config, dom } from '@fortawesome/fontawesome-svg-core';

// Font Awesome Icons
import {
  faSearch as falSearch,
  faExternalLink as falExternalLink,
  faCheckCircle as falCheckCircle,
  faTimes as faTimes,
  faBars as faBars,
} from '@fortawesome/pro-light-svg-icons';

import {
  faSearch as fasSearch,
  faCheck as faCheck,
  faCircleCheck as fasCircleCheck,
} from '@fortawesome/pro-solid-svg-icons';

import { faTwitter } from '@fortawesome/free-brands-svg-icons';

/**
 * IconAgency SVG FontAwesome loader.
 */
export default class FontAwesome {
  constructor() {
    this.configure();

    // Attach to a drupal behaviour to update on content changes.
    Drupal.behaviors.iconagencyFontAwesome = {
      attach: (context) => {
        if (context.querySelector('i')) {
          dom.i2svg({ node: context });
        }
      },
    };

    // Initalize this behaviour immediatly.
    Drupal.behaviors.iconagencyFontAwesome.attach(document);
  }

  configure() {
    // Loaded in vendors.scss
    config.autoAddCss = false;

    // pro-light-svg-icons
    library.add(falSearch, falExternalLink, falCheckCircle, faTimes, faBars);

    // pro-solid-svg-icons
    library.add(fasSearch, faCheck, fasCircleCheck);

    // free-brands-svg-icons
    library.add(faTwitter);
  }
}
