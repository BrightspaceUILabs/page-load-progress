/**
`d2l-page-load-progress`
Polymer-based web component progress bar for the page load status

@demo demo/index.html
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/polymer/polymer-legacy.js';

import 'd2l-colors/d2l-colors.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="d2l-page-load-progress">
	<template strip-whitespace="">
		<style>
			:host {
				background-color: var(--d2l-color-sylvite);
				display: block;
				overflow: hidden;
			}
			.d2l-page-load-progress-bar {
				background-color: var(--d2l-color-corundum);
				transition: background-color 300ms;
				transform: translate(-100%,0);
			}
			:host, .d2l-page-load-progress-bar {
				height: 4px;
			}
			.d2l-page-load-progress-fast, .d2l-page-load-progress-slow {
				will-change: transform;
			}
			.d2l-page-load-progress-fast {
				transition: transform 300ms ease-in;
			}
			.d2l-page-load-progress-slow {
				transition: transform 10s cubic-bezier(.16,1,.4,1);
			}
		</style>
		<div><div class="d2l-page-load-progress-bar"></div></div>
	</template>
	
</dom-module>`;

document.head.appendChild($_documentContainer.content);
Polymer({
	is: 'd2l-page-load-progress',

	properties: {

		/**
		 * Whether the progress bar should automatically begin loading.
		 */
		autostart: {
			type: Boolean,
			observer: '_autoStartChanged',
			reflectToAttribute: true,
			value: false
		},

		/**
		 * Whether the progress bar should automatically hide itself after loading.
		 */
		autohide: {
			type: Boolean,
			reflectToAttribute: true,
			value: false
		},

		/**
		 * Property for consumer-defined styling.
		 */
		hidden: {
			type: Boolean,
			reflectToAttribute: true,
			value: false
		},

		/**
		 * Overrides the default color.
		 */
		color: {
			type: String,
			observer: '_colorChanged',
			reflectToAttribute: true
		},

		__width: {
			type: Number,
			value: 0
		}

	},

	ready: function() {
		if (this.autostart) {
			this.start();
		}
	},

	/**
	 * Completes the progress bar animation, moving it quickly to 100%.
	 */
	finish: function() {
		this._toggle(false, true, 100);
		if (this.autohide) {
			this._hide();
		}
	},

	/**
	 * Starts or restarts the progress bar animation.
	 */
	start: function() {
		this._show();
		this._toggle(false, false, 0);
		setTimeout(function() {
			if (this.__width === 0) {
				this._toggle(true, false, 99);
			}
		}.bind(this), 100);
	},

	_autoStartChanged: function(newValue) {
		if (newValue) {
			this.start();
		}
	},

	_colorChanged: function(newValue) {
		this.$$('.d2l-page-load-progress-bar').style.backgroundColor = newValue;
	},

	_toggle: function(slow, fast, width) {
		var div = this.$$('.d2l-page-load-progress-bar');
		this.toggleClass(
			'd2l-page-load-progress-slow',
			slow,
			div
		);
		this.toggleClass(
			'd2l-page-load-progress-fast',
			fast,
			div
		);
		this.__width = width;
		div.style.transform = 'translate(-' + (100 - width) + '%,0)';
	},

	_show: function() {
		this.hidden = false;
	},

	_hide: function() {
		this.hidden = true;
	}

});
