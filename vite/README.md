# IconAgency starter theme (Vite)

It's intended you alter this template as much as you want. Please update this
file, or the main project README, to reflect the project.

The IconAgency theme has two flavours, one uses Vite and the other, Webpack. The differences are:
- Vite focuses on providing a fast development experience by serving ES modules directly to the browser during development, leveraging the browser's native module system. This leads to faster hot module replacement and a more efficient development server.
- Webpack, on the other hand, bundles modules even during development. While webpack's approach is more flexible and can handle a wider array of module formats and transformations, it can be slower, especially for large projects.

In realistic terms, Vite is much faster but Webpack may be more reliable.

Pick whichever flavour you feel comfortable with.

## Last updated
### Oct 2023
- node ``lts/hydrogen``
- npm ``9.8``

Use of ``nvm`` is **highly recommended**.

## Install and use

```bash
npm i
```

### Local development (live reloading)

```bash
npm run dev
```

### Build production (static)

```bash
npm run build
```

## Manual installation

Within your Docker PHP CLI (lando ssh)

```bash
mkdir -p web/themes/custom/iconagency

curl -L https://bitbucket.org/iconagency/iconagency-drupal-theme/get/10.x.tar.gz --silent | gzip -dc | tar -x --strip-components 1 -C web/themes/custom/iconagency
```

Create a `.npmrc` file and set your token info (see `.npmrc.example`).

```conf
@fortawesome:registry=https://npm.fontawesome.com/
//npm.fontawesome.com/:_authToken=YOUR-TOKEN-HERE
```

Edit your `/.lando.yml` and add an excludes

```yml
# https://docs.lando.dev/config/performance.html#configuration
excludes:
  - web/themes/custom/iconagency/node_modules
```

```bash
lando rebuild
```
