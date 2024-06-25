import type { FormDefinition } from '@/types/form'

export const lockedDefinition: FormDefinition = {
  title: 'Tidally Locked Atmosphere',
  description:
    'This calculator is for planets tidally locked to their star, not tidally locked moons. For proper tidally locked atmospheres, the following mod is a required dependency:',
  link: {
    name: 'Sigma HeatShifter',
    href: 'https://github.com/Sigma88/Sigma-HeatShifter/releases'
  },
  description2:
    'Enter the following information as found in the celestial body .cfg files. All fields are required unless noted otherwise. Current body is the planet for which we are developing the atmosphere. Current star is the star that the current body orbits, which may or may not be the parent star of the home world.',
  form: [{ label: 'Home World', inputs: [{ id: 'homeSMA', name: 'semiMajorAxis', unit: 'm' }] }]
}
