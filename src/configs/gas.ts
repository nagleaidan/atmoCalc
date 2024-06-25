import type { FormDefinition } from '@/types/form'

export const gasDefinition: FormDefinition = {
  title: 'Gas Giant Atmosphere',
  description:
    'Enter the following information as found in the celestial body .cfg files. All fields are required unless noted otherwise. Current body is the planet for which we are developing the atmosphere. Current star is the star that the current body orbits, which may or may not be the parent star of the home world.',
  form: [
    { label: 'Home World', inputs: [{ id: 'homeSMA', name: 'semiMajorAxis', unit: 'm' }] },
    {
      label: 'Current Star',
      inputs: [
        { id: 'starRadius', name: 'radius', unit: 'm' },
        { id: 'starluminosity', name: 'luminosity', unit: 'W/m²' },
        {
          id: 'starGrav',
          group: [
            { id: 'starGravParameter', name: 'gravParameter', unit: 'm³/s²' },
            { id: 'starMass', name: 'mass', unit: 'kg' },
            { id: 'starGeeASL', name: 'geeASL', unit: 'g₀' }
          ]
        }
      ]
    },
    {
      label: 'Current Body',
      inputs: [
        { id: 'bodyRadius', name: 'radius', unit: 'm' },
        {
          id: 'bodyGrav',
          group: [
            { id: 'bodyGravParameter', name: 'gravParameter', unit: 'm³/s²' },
            { id: 'bodyMass', name: 'mass', unit: 'kg' },
            { id: 'bodyGeeASL', name: 'geeASL', unit: 'g₀' }
          ]
        },
        { id: 'bodyAlbedo', name: 'albedo (bond)' },
        { id: 'bodySMA', name: 'semiMajorAxis', unit: 'm' },
        { id: 'bodyEccentricity', name: 'eccentricity' },
        { id: 'bodyInclination', name: 'inclination', unit: '°' },
        { id: 'bodyArgument', name: 'argumentOfPeriapsis', unit: '°' }
      ]
    },
    {
      description:
        'Atmospheres are developed at real life scale and then modified to fit the smaller KSP universe. Enter what the radius of the current body would be in real life.',
      inputs: [{ id: 'irlRadius', name: 'Current body, real life radius', unit: 'm' }]
    }
  ]
}
