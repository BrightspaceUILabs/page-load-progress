# d2l-page-load-progress

[![NPM version](https://img.shields.io/npm/v/@brightspace-ui-labs/page-load-progress.svg)](https://www.npmjs.org/package/@brightspace-ui-labs/page-load-progress)
[![NPM downloads](https://img.shields.io/npm/dt/@brightspace-ui-labs/page-load-progress.svg)](https://www.npmjs.com/package/@brightspace-ui-labs/page-load-progress)
[![Greenkeeper badge](https://badges.greenkeeper.io/BrightspaceUILabs/page-load-progress.svg)](https://greenkeeper.io/)
[![Build status](https://travis-ci.com/BrightspaceUILabs/page-load-status.svg?branch=master)](https://travis-ci.com/BrightspaceUILabs/page-load-status)

[Polymer](https://www.polymer-project.org)-based web component progress indicator. Loading quickly at first, then slower and slower until you tell it things are loaded.

![screenshot of page load progress](/screenshot.gif?raw=true)

For further information on this and other components, refer to [The Brightspace UI Guide](https://github.com/BrightspaceUI/guide/wiki).

## Installation

To install from NPM:
```shell
npm install @brightspace-ui/page-load-progress
```

## Usage

Include the [webcomponents.js](http://webcomponents.org/polyfills/) "lite" polyfill (for browsers who don't natively support web components), then import `d2l-page-load-progress.html`:

```html
<head>
  <script src="../webcomponentsjs/webcomponents-lite.js"></script>
  <link rel="import" href="../d2l-page-load-progress/d2l-page-load-progress.html">
</head>
```

The custom element `<d2l-page-load-progress>` can now be used in your page. The best place for it is usually at the very top:

<!---
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <link rel="import" href="../d2l-typography/d2l-typography.html">
    <link rel="import" href="d2l-page-load-progress.html">
    <custom-style include="d2l-typography">
      <style is="custom-style" include="d2l-typography"></style>
    </custom-style>
    <style>
      html {
        font-size: 20px;
      }
      body {
        color: var(--d2l-color-ferrite);
        font-family: 'Lato', 'Lucida Sans Unicode', 'Lucida Grande', sans-serif;
        letter-spacing: 0.01rem;
        font-size: 0.95rem;
        font-weight: 400;
        line-height: 1.4rem;
      }
    </style>
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<d2l-page-load-progress autostart color="#003b71"></d2l-page-load-progress>
<button onclick="document.querySelector('d2l-page-load-progress').start();">Start</button>
<button onclick="document.querySelector('d2l-page-load-progress').finish();">Finish</button>
<main>
  Main page content here.
</main>
```

### Starting & Finishing

Progress can be started, restarted and finished using its JavaScript API's `start()` and `finish()` methods. Make sure you wait for the `WebComponentsReady` event before interacting with it.

```javascript
window.addEventListener('WebComponentsReady', function() {

  var progress = document.getElementById('myProgress');
  progress.start();

  // take 2 seconds to "load"
  setTimeout(function() {
    progress.finish();
  }, 2000);

});
```

To start **automatically**, set the `autostart` attribute:

```html
<d2l-page-load-progress autostart></d2l-page-load-progress>
```

### Color

By default, the progress bar will be grayscale. However, the color can be customized using the `color` attribute:

```html
<d2l-page-load-progress color="#d81b60"></d2l-page-load-progress>
```

### Auto-hide

The `autohide` property will set `display: hidden` on the progress bar when `finish` is called:

```html
<d2l-page-load-progress autohide></d2l-page-load-progress>
```

[bower-url]: http://bower.io/search/?q=d2l-page-load-progress
[bower-image]: https://badge.fury.io/bo/d2l-page-load-progress.svg
[ci-url]: https://travis-ci.org/BrightspaceUI/page-load-progress
[ci-image]: https://travis-ci.org/BrightspaceUI/page-load-progress.svg?branch=master

## Versioning & Releasing

All version changes should obey [semantic versioning](https://semver.org/) rules.

Include either `[increment major]`, `[increment minor]` or `[increment patch]` in your merge commit message to automatically increment the `package.json` version and create a tag during the next build.
