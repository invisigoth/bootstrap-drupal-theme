export default class Offcanvas {
  constructor() {
    // Attach to a drupal behaviour to update on content changes.
    Drupal.behaviors.iconOffcanvas = {
      attach: (context) => {
        const offcanvas = document.getElementById("collasping-nav")
        offcanvas.setAttribute("tabindex", "-1")

        offcanvas.addEventListener("hidden.bs.offcanvas", () => {
          let toggler = document.querySelector('.navbar-toggler[data-bs-target="#collasping-nav"]')
          toggler.classList.add("collapsed")
          let mobnavtoggle = document.getElementById("mobile-nav-toggle")
          mobnavtoggle.setAttribute('aria-expanded', 'false')
        })

        offcanvas.addEventListener("shown.bs.offcanvas", () => {
          let toggler = document.querySelector('.navbar-toggler[data-bs-target="#collasping-nav"]')
          offcanvas.focus()
          toggler.classList.remove("collapsed")
          let mobnavtoggle = document.getElementById("mobile-nav-toggle")
          mobnavtoggle.setAttribute('aria-expanded', 'true')
        })

      },
    }

    // Initalize this behaviour immediatly.
    Drupal.behaviors.iconOffcanvas.attach(document)
  }
}
