import { Map } from 'ol';
import { Tile, Layer, Group } from 'ol/layer';
import OSM from 'ol/source/OSM';
import XYZ from 'ol/source/XYZ';
export declare class OpenMap {
  hostElement: HTMLElement;
  map: Map;
  zoomLevel: number;
  mapCenter: string;
  layer: Layer;
  layerGroup: Group;
  mapCenterParsed: number[];
  openStreetMapHumanitarian: Tile<OSM>;
  openStreetMapStandard: Tile<OSM>;
  stamenTerrain: Tile<XYZ>;
  baseLayerGroup: Group;
  parseCenter(newValue: any): void;
  componentWillLoad(): void;
  componentDidLoad(): void;
  getCood(event: any): void;
  initMap(): void;
  changeHandler: (event: any) => void;
  render(): any[];
}
