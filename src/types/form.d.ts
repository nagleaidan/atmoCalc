export interface FormDefinition {
  title: string
  description: string
  link?: { name: string; href: string }
  description2?: string
  form: FormInputWrapper[]
}

export interface FormInputWrapper {
  label?: string
  description?: string
  inputs: FormInput[]
}

export interface FormInput {
  id: string
  name?: string
  unit?: string
  defaultValue?: number
  group?: FormInput[]
  table?: GasTableRow[]
}

export interface GasTableRow {
  name: string
  formula: string
  defaultPercent: number
  molarMass: number
  specificHeat: number | TempTableRow[]
}

export interface TempTableRow {
  temp: number
  formula: (temp: number) => number
}

export type AtmoOption = 'star' | 'gas' | 'earth' | 'other' | 'locked'

export interface AtmoOptionConfig {
  text: string
  value: AtmoOption
  tooltip: string
  config: FormDefinition
}
