import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import chaiJsx from 'chai-jsx';
import { JSDOM } from 'jsdom';

chai.use(chaiEnzyme());
chai.use(chaiJsx);

// global.document = new JSDOM('<!doctype html><html><body></body></html>');
const { document } = (new JSDOM('<!doctype html><html><body></body></html>')).window;
global.document = document;
console.log(global.document);
global.window = document.defaultView;
global.navigator = global.window.navigator;
