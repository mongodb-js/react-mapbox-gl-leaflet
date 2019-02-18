const path = require('path');

const SRC_PATH = path.join(__dirname, '/../src');
const OUTPUT_PATH = path.join(__dirname, '/../build');
const LIB_PATH = path.join(__dirname, '/../lib');
const DEMO_PATH = path.join(__dirname, '/../demo');

module.exports = {
  name: 'react-mapbox-gl-leaflet',
  moduleName: 'ReactMapboxGlLeaflet',
  path: {
    // The src path to our application
    src: SRC_PATH,

    // The build path to where our bundle will be output for dev
    output: OUTPUT_PATH,

    // The build path to where our library bundle will be output for dist
    lib: LIB_PATH,

    // The build path to where our demo bundle will be output for dist
    demo: DEMO_PATH
  },
  globals: {},
  // Vendor bundle configuration for the demo
  vendor: [
    'classnames',
    'leaflet',
    'mapbox-gl',
    'mapbox-gl-leaflet',
    'react',
    'react-dom',
    'react-leaflet'
  ]
};
