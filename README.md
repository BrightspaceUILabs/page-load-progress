# d2l-page-load-progress
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/BrightspaceUI/page-load-progress)
[![Bower version][bower-image]][bower-url]
[![Build status][ci-image]][ci-url]

[Polymer](https://www.polymer-project.org)-based web component progress indicator. Loading quickly at first, then slower and slower until you tell it things are loaded.

![screenshot of page load progress](/screenshot.gif?raw=true)

For further information on this and other Brightspace UI components, see the docs at [ui.developers.brightspace.com](http://ui.developers.brightspace.com/).

## Installation

Install from [Bower][bower-url]:
```shell
bower install d2l-page-load-progress
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
    <script>
      var progress = document.getElementById('interactive');
      document.getElementById('start').addEventListener('click', function() {
        progress.start();
      });
      document.getElementById('finish').addEventListener('click', function() {
        progress.finish();
      });
    </script>
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<d2l-page-load-progress autostart color="#003b71"></d2l-page-load-progress>
<button id="start">Start</button>
<button id="finish">Finish</button>
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

[bower-url]: http://bower.io/search/?q=d2l-page-load-progress
[bower-image]: https://badge.fury.io/bo/d2l-page-load-progress.svg
[ci-url]: https://travis-ci.org/BrightspaceUI/page-load-progress
[ci-image]: https://travis-ci.org/BrightspaceUI/page-load-progress.svg?branch=master
