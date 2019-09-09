# d2l-page-load-progress

[![NPM version](https://img.shields.io/npm/v/@brightspace-ui-labs/page-load-progress.svg)](https://www.npmjs.org/package/@brightspace-ui-labs/page-load-progress)
[![NPM downloads](https://img.shields.io/npm/dt/@brightspace-ui-labs/page-load-progress.svg)](https://www.npmjs.com/package/@brightspace-ui-labs/page-load-progress)
[![Greenkeeper badge](https://badges.greenkeeper.io/BrightspaceUILabs/page-load-progress.svg)](https://greenkeeper.io/)
[![Build status](https://travis-ci.com/BrightspaceUILabs/page-load-progress.svg?branch=master)](https://travis-ci.com/BrightspaceUILabs/page-load-progress)

> Note: this is a ["labs" component](https://github.com/BrightspaceUI/guide/wiki/Component-Tiers). While functional, these tasks are prerequisites to promotion to BrightspaceUI "official" status:
>
> - [ ] [Design organization buy-in](https://github.com/BrightspaceUI/guide/wiki/Before-you-build#working-with-design)
> - [ ] [design.d2l entry](http://design.d2l/)
> - [ ] [Architectural sign-off](https://github.com/BrightspaceUI/guide/wiki/Before-you-build#web-component-architecture)
> - [x] [Continuous integration](https://github.com/BrightspaceUI/guide/wiki/Testing#testing-continuously-with-travis-ci)
> - [x] [Cross-browser testing](https://github.com/BrightspaceUI/guide/wiki/Testing#cross-browser-testing-with-sauce-labs)
> - [x] [Unit tests](https://github.com/BrightspaceUI/guide/wiki/Testing#testing-with-polymer-test) (if applicable)
> - [ ] [Accessibility tests](https://github.com/BrightspaceUI/guide/wiki/Testing#automated-accessibility-testing-with-axe)
> - [ ] [Visual diff tests](https://github.com/BrightspaceUI/visual-diff)
> - [x] [Localization](https://github.com/BrightspaceUI/guide/wiki/Localization) with Serge (if applicable)
> - [x] Demo page
> - [x] README documentation

[Polymer](https://www.polymer-project.org)-based web component progress indicator. Loading quickly at first, then slower and slower until you tell it things are loaded.

![screenshot of page load progress](/screenshot.gif?raw=true)

For further information on this and other components, refer to [The Brightspace UI Guide](https://github.com/BrightspaceUI/guide/wiki).

## Installation

To install from NPM:
```shell
npm install @brightspace-ui/page-load-progress
```

## Usage

Include the [webcomponents.js](http://webcomponents.org/polyfills/) polyfill loader (for browsers who don't natively support web components), then include `d2l-page-load-progress.js`:

```html
<head>
  <script src="node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js"></script>
  <script type="module" src="node_modules/@brightspace-ui/page-load-progress/d2l-page-load-progress.js"></script>
</head>
```

The custom element `<d2l-labs-page-load-progress>` can now be used in your page. The best place for it is usually at the very top:

```html
<d2l-labs-page-load-progress autostart color="#003b71"></d2l-labs-page-load-progress>
<button onclick="document.querySelector('d2l-labs-page-load-progress').start();">Start</button>
<button onclick="document.querySelector('d2l-labs-page-load-progress').finish();">Finish</button>
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
<d2l-labs-page-load-progress autostart></d2l-labs-page-load-progress>
```

### Color

By default, the progress bar will be grayscale. However, the color can be customized using the `color` attribute:

```html
<d2l-labs-page-load-progress color="#d81b60"></d2l-labs-page-load-progress>
```

### Auto-hide

The `autohide` property will set `display: hidden` on the progress bar when `finish` is called:

```html
<d2l-labs-page-load-progress autohide></d2l-labs-page-load-progress>
```

## Versioning & Releasing

All version changes should obey [semantic versioning](https://semver.org/) rules.

Include either `[increment major]`, `[increment minor]` or `[increment patch]` in your merge commit message to automatically increment the `package.json` version and create a tag during the next build.
