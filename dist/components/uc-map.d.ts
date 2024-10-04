import type { Components, JSX } from "../types/components";

interface UcMap extends Components.UcMap, HTMLElement {}
export const UcMap: {
  prototype: UcMap;
  new (): UcMap;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
