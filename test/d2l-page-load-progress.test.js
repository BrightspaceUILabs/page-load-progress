import '../d2l-page-load-progress.js';
import { expect, fixture, html } from '@open-wc/testing';
import sinon from 'sinon';

const basic = html`<d2l-labs-page-load-progress></d2l-labs-page-load-progress>`;
const colorSet = html`<d2l-labs-page-load-progress color="#ff0000"></d2l-labs-page-load-progress>`;
const autoStart = html`<d2l-labs-page-load-progress autostart></d2l-labs-page-load-progress>`;

describe('page-load-progress', () => {

	let clock, elem;

	beforeEach(async() => {
		clock = sinon.useFakeTimers({
			toFake: ['setTimeout']
		});
	});

	afterEach(() => clock.restore());

	describe('basic', () => {

		it('should instantiate the element', async() => {
			elem = await fixture(basic);
			expect(elem.is).to.equal('d2l-labs-page-load-progress');
		});

	});

	describe('autostart', () => {

		describe('default', () => {

			beforeEach(async() => {
				elem = await fixture(basic);
			});

			it('should default "autostart" to false', () => {
				expect(elem.autostart).to.be.false;
				expect(elem.hasAttribute('autostart')).to.be.false;
				expect(elem.__width).to.eql(0);
			});

			it('should reflect "autostart" property change to attribute', () => {
				elem.autostart = true;
				clock.tick(100);
				expect(elem.hasAttribute('autostart')).to.be.true;
				expect(elem.__width).to.eql(99);
			});

			it('should reflect "autostart" attribute change to property', () => {
				elem.setAttribute('autostart', 'autostart');
				clock.tick(100);
				expect(elem.autostart).to.be.true;
				expect(elem.__width).to.eql(99);
			});

			it('should start when start() is called after 100ms', () => {
				elem.start();
				clock.tick(100);
				expect(elem.__width).to.eql(99);
			});

			it('should not go to 99% if finish() is called first', () => {
				elem.start();
				elem.finish();
				clock.tick(100);
				expect(elem.__width).to.eql(100);
			});

		});

		describe('set', () => {

			beforeEach(async() => {
				elem = await fixture(autoStart);
			});

			it('should start on its own after 100ms', () => {
				clock.tick(100);
				expect(elem.__width).to.eql(99);
			});

			it('should go to 100% if finish() is called after', () => {
				clock.tick(100);
				elem.finish();
				expect(elem.__width).to.eql(100);
			});

			it('should have "autostart" set to true', () => {
				expect(elem.autostart).to.be.true;
				expect(elem.hasAttribute('autostart')).to.be.true;
				clock.tick(100);
				expect(elem.__width).to.eql(99);
			});

			it('should reflect "autostart" property change to attribute', () => {
				elem.autostart = false;
				expect(elem.hasAttribute('autostart')).to.be.false;
			});

			it('should reflect "autostart" attribute change to property', () => {
				elem.removeAttribute('autostart');
				expect(elem.autostart).to.be.false;
			});

		});

	});

	describe('color', () => {

		describe('default', () => {

			beforeEach(async() => {
				elem = await fixture(basic);
			});

			it('should default "color" to undefined', () => {
				expect(elem.color).to.be.undefined;
				expect(elem.hasAttribute('color')).to.be.false;
			});

			it('should reflect "color" property change to attribute', () => {
				elem.color = '#ff0000';
				expect(elem.getAttribute('color')).to.equal('#ff0000');
			});

			it('should reflect "color" attribute change to property', () => {
				elem.setAttribute('color', '#00ff00');
				expect(elem.color).to.equal('#00ff00');
			});

		});

		describe('set', () => {

			beforeEach(async() => {
				elem = await fixture(colorSet);
			});

			it('should have "color" set to "#ff0000"', () => {
				expect(elem.color).to.equal('#ff0000');
				expect(elem.getAttribute('color')).to.equal('#ff0000');
			});

			it('should reflect "color" property change to attribute', () => {
				elem.color = '#00ff00';
				expect(elem.getAttribute('color')).to.equal('#00ff00');
			});

			it('should reflect "color" attribute change to property', () => {
				elem.setAttribute('color', '#0000ff');
				expect(elem.color).to.equal('#0000ff');
			});

		});

	});

	describe('starting and finishing', () => {
		beforeEach(async() => {
			elem = await fixture(basic);
		});

		it('should not auto-start', () => {
			expect(elem.__width).to.eql(0);
		});

		it('should go to 100% when finish is called', () => {
			elem.finish();
			expect(elem.__width).to.eql(100);
		});
	});

	describe('autohide', () => {
		beforeEach(async() => {
			elem = await fixture(basic);
		});

		it('should reflect "autostart" property change to attribute', () => {
			elem.autostart = true;
			expect(elem.hasAttribute('autostart')).to.be.true;
		});

		it('should not add hidden class when finishing if autohide not set', () => {
			elem.finish();
			expect(elem.hidden).to.be.false;
		});

		it('should add hidden class when finishing if autohide set', () => {
			elem.autohide = true;
			elem.finish();
			expect(elem.hidden).to.be.true;
		});

		it('should remove hidden class on calling start', () => {
			elem.autohide = true;
			elem.finish();
			elem.start();
			expect(elem.hidden).to.be.false;
		});
	});

});
