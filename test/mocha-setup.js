const chai = require('chai');
const chaiEnzyme = require('chai-enzyme');
const sinon = require('sinon');
const L = require('leaflet');
const sinonStubPromise = require('sinon-stub-promise');
const sinonChai = require('sinon-chai');
const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
const MapboxGlMock = require('./mocks/mapbox-gl');

require('raf/polyfill'); // requestAnimationFrame Polyfill for React 16

Enzyme.configure({ adapter: new Adapter() });

sinonStubPromise(sinon);

require('jsdom-global')(
  undefined,
  {
    url: 'http://localhost',
    runScripts: 'outside-only'
  }
);

global.sinon = sinon;
global.expect = chai.expect;
global.HTMLElement = typeof window.HTMLElement === 'undefined' ? () => {} : window.HTMLElement;
global.L = L;
global.mapboxgl = MapboxGlMock;

chai.should();
chai.use(sinonChai);
chai.use(chaiEnzyme());

// Mock HTML canvas
window.HTMLCanvasElement.prototype.getContext = () => ({});

// Mock window.URL static methods
if (typeof window.URL.createObjectURL === 'undefined') {
  Object.defineProperty(window.URL, 'createObjectURL', { value: () => {} });
}

if (typeof window.URL.revokeObjectURL === 'undefined') {
  Object.defineProperty(window.URL, 'revokeObjectURL', { value: () => {} });
}
