export type ChartDataPoint = { x: number; y: number }

export type Padding = { top?: number; left?: number; right?: number; bottom?: number }

export type Dimensions = { top: number; left: number; width: number; height: number }

export type AxisDomain = { min: number; max: number }

export type ChartDomain = { x: AxisDomain; y: AxisDomain }

export type Stroke = { color?: string; width?: number; opacity?: number }

export type ChartContext = {
  data: ChartDataPoint[]
  dimensions: Dimensions | undefined
  domain: ChartDomain
}
