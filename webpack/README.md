# IconAgency starter theme

This theme is a child theme of [bootstrap_barrio](https://www.drupal.org/project/bootstrap_barrio).

It's intended you alter this template as much as you want.

## Install and use

```bash
npm i
```

### Local development (live reloading)

```bash
npm run serve
```

### Build production (static)

```bash
npm run build
```

## Manual installation

Within your Docker PHP CLI (lando ssh)

```bash
composer require 'drupal/bootstrap_barrio:^5.5'

mkdir -p web/themes/custom/iconagency

curl -L https://bitbucket.org/iconagency/iconagency-drupal-theme/get/9.x.tar.gz --silent | gzip -dc | tar -x --strip-components 1 -C web/themes/custom/iconagency
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
