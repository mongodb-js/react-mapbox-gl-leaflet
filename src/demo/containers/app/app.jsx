import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Map } from 'react-leaflet';
import MapboxGlLayer from 'react-mapbox-gl-leaflet';

import styles from './app.scss';

const mapAttribution = `
  <a href="https://www.maptiler.com/copyright/" target="_blank">© MapTiler</a>
  <a href="https://www.openstreetmap.org/copyright" target="_blank">© OpenStreetMap contributors</a>
`;

class App extends PureComponent {
  static propTypes = {
    className: PropTypes.string
  };

  static defaultProps = {
    className: ''
  };

  render() {
    const { className } = this.props;

    const position = [-33.86785, 151.20732];
    const _className = classnames(styles.root, className);

    return (
      <div
        ref="mapContainer"
        className={_className}>
        <Map
          className={styles.map}
          ref="map"
          preferCanvas
          center={position}
          zoom={12}
          minZoom={0}
          maxZoom={14}>
          <MapboxGlLayer
            ref="mapboxGL"
            style="https://maps.tilehosting.com/styles/bright/style.json?key=2CLrASB61Gj6GPxI8aKe"
            attribution={mapAttribution} />
        </Map>
      </div>
    );
  }
}

export default App;
export { App };
