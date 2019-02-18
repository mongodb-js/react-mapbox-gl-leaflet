# react-mapbox-gl-leaflet

[![][travis_img]][travis_url] [![][github_issues_img]][github_issues_url] [![github_forks_img]][github_forks_url] [![github_stars_img]][github_stars_url] [![][license_img]][license_url]

React wrapper of [`mapbox-gl-leaflet`][url-mapbox-gl-leaflet] for [`react-leaflet`][url-react-leaflet].

## Demos

| Package version | Dependency Versions                              | Demo             |
|-----------------|--------------------------------------------------|------------------|
| `1.0.0`         | `react-leaflet@2.x.x`, `mapbox-gl-leaflet@0.0.3` | [Link][url-demo] |

## Installation

```bash
npm install @mongodb-js/react-mapbox-gl-leaflet --save
```

You will also need to manually install the following peer dependencies:

```bash
npm install leaflet react react-dom react-leaflet mapbox-gl mapbox-gl-leaflet --save
```

## Usage

Please consult the [`mapbox-gl-leaflet` documentation][url-mapbox-gl-leaflet] for available prop options, the [Mapbox Vector Tile Specification][url-mapbox-vector-tile-specification] for defining the map tile data, and the [Mapbox Style Specification][url-mapbox-style-specification] for defining the visual appearance of the map.

```javascript
import React from 'react';
import { Map } from 'react-leaflet';
import MapboxGlLayer from '@mongodb-js/react-mapbox-gl-leaflet';

const DemoComponent = () => {
  return (
    <Map>
      <MapboxGlLayer
        accessToken="for-usage-with-mapbox-api-only"
        style="https://your-tile-server.com/path/to/your/map-style.json"
        attribution="Copyright attribution message goes here" />
    </Map>
  );
}
```

## Contributing

Pull requests of any kind are welcome from the community. Please ensure you have read the guidelines for [Contributing][url-contributing] and this project's [Code of Conduct][url-code-of-conduct] before raising a pull request.

### Maintainers

* Matt Fairbrass [@matt\_d_rat][url-twitter]

## License

[MIT License][license_url]

[url-mapbox-gl-leaflet]: https://github.com/mapbox/mapbox-gl-leaflet
[url-react-leaflet]: https://react-leaflet.js.org/
[url-mapbox-vector-tile-specification]: https://docs.mapbox.com/vector-tiles/specification/
[url-mapbox-style-specification]: https://docs.mapbox.com/mapbox-gl-js/style-spec/

[url-demo]: https://mongodb-js.github.io/react-mapbox-gl-leaflet
[url-twitter]: https://twitter.com/matt_d_rat
[url-contributing]: CONTRIBUTING.md
[url-code-of-conduct]: CODE_OF_CONDUCT.md

[img-screenshot]: src/demo/assets/images/screenshot.png "Result of applying middle truncation to the text"

[license_img]: https://img.shields.io/github/license/mongodb-js/react-mapbox-gl-leaflet.svg
[license_url]: https://github.com/mongodb-js/react-mapbox-gl-leaflet/blob/master/LICENSE
[github_issues_img]: https://img.shields.io/github/issues/mongodb-js/react-mapbox-gl-leaflet.svg
[github_issues_url]: https://github.com/mongodb-js/react-mapbox-gl-leaflet/issues
[github_forks_img]: https://img.shields.io/github/forks/mongodb-js/react-mapbox-gl-leaflet.svg
[github_forks_url]: https://github.com/mongodb-js/react-mapbox-gl-leaflet/network
[github_stars_img]: https://img.shields.io/github/stars/mongodb-js/react-mapbox-gl-leaflet.svg
[github_stars_url]: https://github.com/mongodb-js/react-mapbox-gl-leaflet/stargazers
[travis_img]: https://img.shields.io/travis/mongodb-js/react-mapbox-gl-leaflet.svg?style=flat-square
[travis_url]: https://travis-ci.org/mongodb-js/react-mapbox-gl-leaflet
