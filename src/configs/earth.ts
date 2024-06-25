import type { FormDefinition } from '@/types/form'

export const earthDefinition: FormDefinition = {
  title: 'Earthlike Atmosphere',
  description:
    'Enter the following information as found in the celestial body .cfg files. All fields are required unless noted otherwise. Current body is the body for which we are developing the atmosphere. If the current body is a moon, parent planet is the planet that it orbits. Current star is the star that the current body, or its parent planet, orbits. The current star may or may not be the parent star of the home world.',
  form: [{ label: 'Home World', inputs: [{ id: 'homeSMA', name: 'semiMajorAxis', unit: 'm' }] }]
}
