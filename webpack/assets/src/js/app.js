// IconAgency app.js
// Note: jQuery is available, but be better than that.

import('./fontawesome').then(({ default: FontAwesome }) => {
  new FontAwesome();

import('./external-links').then(({ default: ExternalLinks }) => {
    new ExternalLinks();
  });
});

import('./nav').then(({ default: Offcanvas }) => {
  new Offcanvas();
});

import('./webform').then(({ default: Webform }) => {
  new Webform();
});
