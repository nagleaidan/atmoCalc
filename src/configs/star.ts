import type { FormDefinition } from '@/types/form'

export const starDefinition: FormDefinition = {
  title: 'Star Atmosphere',
  description:
    'Enter the following information as found in the celestial body .cfg files. All fields are required unless noted otherwise. Current star is the body for which we are developing the atmosphere.',
  form: [{ label: 'Home World', inputs: [{ id: 'homeSMA', name: 'semiMajorAxis', unit: 'm' }] }]
}
