import React, { createRef } from 'react';
import { mount } from 'enzyme';
import { Map, withLeaflet } from 'react-leaflet';
import { MapboxGlLayer } from './react-mapbox-gl-leaflet';

describe('MapboxGlLayer', function() {
  let WrappedMapboxGlLayer;
  let component;
  let ref;
  let spyCreateLeafletElement;
  let spyAddLayer;
  let spyRemoveLayer;

  beforeEach(function() {
    ref = createRef();

    // Setup spies
    spyCreateLeafletElement = sinon.spy(MapboxGlLayer.prototype, 'createLeafletElement');
    spyAddLayer = sinon.spy(MapboxGlLayer.prototype, '_addLayer');
    spyRemoveLayer = sinon.spy(MapboxGlLayer.prototype, '_removeLayer');

    // Wrap the MapboxGlLayer with leaflet
    WrappedMapboxGlLayer = withLeaflet(MapboxGlLayer);

    component = mount(
      <Map>
        <WrappedMapboxGlLayer
          ref={ref}
          style="https://some.tileserver.com/style.json"
          attribution="test" />
      </Map>
    );
  });

  afterEach(function() {
    // Restore original spied functions
    spyCreateLeafletElement.restore();
    spyAddLayer.restore();
    spyRemoveLayer.restore();

    component = null;
  });

  it('should instantiate a MapboxGlLayer when rendered inside a Map', function() {
    expect(component).to.not.equal(null);
    expect(component).to.not.equal(false);
  });

  it('should be decorated with the leaflet prop by the `withLeaflet` hoc', function() {
    expect(ref.current.props.leaflet).to.be.an('object');
  });

  it('should call the `createLeafletElement` method when the layer has been added to the map', function() {
    spyCreateLeafletElement.should.have.been.calledOnce;
  });

  context('_addLayer', function() {
    let spyOnResize;

    beforeEach(function() {
      const { leaflet } = ref.current.props;

      // Setup spies
      spyOnResize = sinon.spy(leaflet.map, '_onResize');

      // Use fake timers to control setTimeout manually
      this.clock = sinon.useFakeTimers();

      // Simulate the layeradd event on the leaflet map
      leaflet.map.fire('layeradd', { layer: { _map: leaflet.map }});
    });

    afterEach(function() {
      // Restore the real clock
      this.clock.restore();

      // Restore the spied functions
      spyOnResize.restore();
    });

    it('should call the `_addLayer` method when the layer has been added to the map', function() {
      spyAddLayer.should.have.been.calledOnce;
    });

    it('should force a re-render of the map by calling `_onResize` after `200ms`', function() {
      spyOnResize.should.not.have.been.called;
      this.clock.tick(200);
      spyOnResize.should.have.been.calledOnce;
    });
  });

  context('_removeLayer', function() {
    beforeEach(function() {
      const { leaflet } = ref.current.props;

      // Simulate the layeradd event on the leaflet map
      leaflet.map.fire('layerremove', { layer: { _map: leaflet.map }});
    });

    it('should call the `_removeLayer` method when the layer has been removed from the map', function() {
      spyRemoveLayer.should.have.been.calledOnce;
    });
  });
});
