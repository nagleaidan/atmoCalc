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
  group?: FormInput[]
}

export type AtmoOption = 'star' | 'gas' | 'earth' | 'other' | 'locked'

export interface AtmoOptionConfig {
  text: string
  value: AtmoOption
  tooltip: string
  config: FormDefinition
}
