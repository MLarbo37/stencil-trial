// import { Component, h, Prop, Watch, Element } from '@stencil/core';
// import 'ol/ol.css';
// import Map from 'ol/Map';
// import View from 'ol/View';
// import Feature from 'ol/Feature';
// import Point from 'ol/geom/Point';
// import { fromLonLat } from 'ol/proj';
// import { Vector as VectorLayer } from 'ol/layer';
// import { Vector as VectorSource } from 'ol/source';

// @Component({
//   tag: 'uc-pin-map',
//   styleUrl: './pin-map.css',
//   shadow: true,
// })
// export class MapComponent {
//   @Prop() latitude: number;
//   @Prop() longitude: number;

//   @Element() private element: HTMLElement;
//   private map: Map;

//   componentDidLoad() {
//     this.initializeMap();
//   }

//   @Watch('latitude')
//   @Watch('longitude')
//   handleCoordinatesChange() {
//     // this.updatePin();
//   }

//   initializeMap() {
//     const target = this.element.shadowRoot.querySelector('.map');

//     const view = new View({
//       center: fromLonLat([this.longitude, this.latitude]),
//       zoom: 10,
//     });

//     this.map = new Map({
//       target: target as HTMLElement,
//       view,
//     });

//     this.addPin();
//   }

//   addPin() {
//     const pin = new Feature({
//       geometry: new Point(fromLonLat([this.longitude, this.latitude])),
//     });

//     const vectorSource = new VectorSource({
//       features: [pin],
//     });

//     const vectorLayer = new VectorLayer({
//       source: vectorSource,
//     });

//     this.map.addLayer(vectorLayer);
//   }

// //   updatePin() {
// //     const pin = this.map.getLayers().getArray()[0].getSource().getFeatures()[0];
// //     const newCoordinates = fromLonLat([this.longitude, this.latitude]);
// //     pin.setGeometry(new Point(newCoordinates));
// //   }

//   render() {
//     return <div class="map"></div>;
//   }
// }
