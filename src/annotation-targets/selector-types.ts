export type SvgShapeType = 'rect' | 'circle' | 'ellipse' | 'line' | 'polyline' | 'polygon' | 'path';
export interface SupportedSelector {
  type: string;
  temporal?: {
    startTime: number;
    endTime?: number;
  };
  spatial?: {
    unit?: 'percent' | 'pixel';
    x: number;
    y: number;
    width?: number;
    height?: number;
  };
  points?: [number, number][];
  svg?: string;
  svgShape?: SvgShapeType;
  style?: SelectorStyle;
}

export interface SelectorStyle {
  fill?: string;
  fillOpacity?: number;
  stroke?: string;
  strokeOpacity?: number;
  strokeWidth?: string;
  strokeDasharray?: string;
}

export interface BoxSelector extends SupportedSelector {
  type: 'BoxSelector';
  spatial: {
    unit?: 'percent' | 'pixel';
    x: number;
    y: number;
    width: number;
    height: number;
  };
}

export interface PointSelector extends SupportedSelector {
  type: 'PointSelector';
  spatial: {
    x: number;
    y: number;
  };
}

export interface SvgSelector extends SupportedSelector {
  type: 'SvgSelector';
  svg: string;
  svgShape?: SvgShapeType;
  points?: [number, number][];
  spatial?: {
    unit: 'pixel';
    x: number;
    y: number;
    width: number;
    height: number;
  };
}

export interface TemporalSelector extends SupportedSelector {
  type: 'TemporalSelector';
  temporal: {
    startTime: number;
    endTime?: number;
  };
}

export interface TemporalBoxSelector extends SupportedSelector {
  type: 'TemporalBoxSelector';
  spatial: {
    unit?: 'percent' | 'pixel';
    x: number;
    y: number;
    width: number;
    height: number;
  };
  temporal: {
    startTime: number;
    endTime?: number;
  };
}

export type SupportedSelectors = TemporalSelector | BoxSelector | TemporalBoxSelector | PointSelector | SvgSelector;

export type ParsedSelector = {
  selector: SupportedSelectors | null;
  selectors: SupportedSelectors[];
};
