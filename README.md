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
	<script src="bower_components/webcomponentsjs/webcomponents-lite.min.js"></script>
	<link rel="import" href="bower_components/d2l-page-load-progress/d2l-page-load-progress.html">
</head>
```

The custom element `<d2l-page-load-progress>` can now be used in your page. The best place for it is usually at the very top:
```html
<body>
	<d2l-page-load-progress></d2l-page-load-progress>
	<main>
		Main page content here.
	</main>
</body>
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
[bower-image]: https://img.shields.io/bower/v/d2l-page-load-progress.svg
[ci-url]: https://travis-ci.org/BrightspaceUI/page-load-progress
[ci-image]: https://travis-ci.org/BrightspaceUI/page-load-progress.svg?branch=master
