import { Component, h, Element, Prop, State, Watch } from '@stencil/core';
import { Map, View } from 'ol';
import { Tile, Layer, Group } from 'ol/layer';
import OSM from 'ol/source/OSM';
import XYZ from 'ol/source/XYZ';
import { fromLonLat, toLonLat } from 'ol/proj';




@Component({
  tag: 'uc-map',
  styleUrl: './map.css',
  shadow: true,
})
export class OpenMap {
  @Element() hostElement: HTMLElement;
  map: Map;

  @Prop({ reflect: true }) zoomLevel: number;
  @Prop({ reflect: true }) mapCenter: string;
  @Prop({ reflect: true }) layer: Layer;
  @Prop({ reflect: true }) layerGroup: Group;
  @State() mapCenterParsed: number[];
  @State() openStreetMapHumanitarian = new Tile({
    source: new OSM({
      url: `https://tile-{a-c}.openstreetmap.fr/hot/{z}/{x}/{y}.png`,
    }),
    visible: false,
    className: 'open-street-map-humanitarian',
  });

  @State() openStreetMapStandard = new Tile({
    source: new OSM(),
    visible: true,
    className: 'open-street-map-standard',
  });

  @State() stamenTerrain = new Tile({
    source: new XYZ({
      url: `https://stamen-tiles.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg`,
      attributions: `Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.`,
    }),
    visible: false,
    className: 'stamen-terrain',
  });

  @State() baseLayerGroup = new Group({
    layers: [this.openStreetMapStandard, this.openStreetMapHumanitarian, this.stamenTerrain],
  });

  @Watch('mapCenter')
  parseCenter(newValue) {
    this.mapCenterParsed = JSON.parse(newValue);
  }
  componentWillLoad() {
    this.parseCenter(this.mapCenter);
  }

  componentDidLoad() {
    this.initMap();
  }

  getCood(event: any) {
    const pixel = this.map.getEventPixel(event.originalEvent);
    const coordinates = this.map.getCoordinateFromPixel(pixel);
    const lonLatCoordinate = toLonLat(coordinates);
    console.log(lonLatCoordinate);
  }
  initMap() {
    const mapContainer = this.hostElement.shadowRoot.querySelector('#map-container');
    this.map = new Map({
      target: mapContainer as HTMLElement,
      //   layers: [
      //     new TileLayer({
      //       source: new OSM(),
      //     }),
      //   ],
      layers: [this.baseLayerGroup],
      view: new View({
        center: fromLonLat(this.mapCenterParsed),
        zoom: this.zoomLevel,
      }),
    });
    // this.map.addLayer(this.baseLayerGroup);
    this.map.on('click', this.getCood.bind(this));
  }

  changeHandler = event => {
    this.baseLayerGroup.getLayers().forEach(layer => layer.setVisible(event.target.value === layer.getClassName()));
  };

  render() {
    return [
      <div class="grid-container">
        <div class="grid-1">
          <div class="sidebar">
            <h2>Base Layers</h2>
            {this.baseLayerGroup
              .getLayers()
              .getArray()
              .map(layer => (
                <input type="radio" name="baseLayerRadioButton" id="base-layer" value={layer.getClassName()} onChange={this.changeHandler.bind(this)} />
              ))}
          </div>
        </div>
      </div>,
      <div id="map-container"></div>,
      <h1>{ this.layerGroup}</h1>
    ];
  }
}
