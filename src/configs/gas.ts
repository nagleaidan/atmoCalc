import type { FormDefinition } from '@/types/form'

export const gasDefinition: FormDefinition = {
  title: 'Gas Giant Atmosphere',
  description:
    'Enter the following information as found in the celestial body .cfg files. All fields are required unless noted otherwise. Current body is the planet for which we are developing the atmosphere. Current star is the star that the current body orbits, which may or may not be the parent star of the home world.',
  form: [
    {
      label: 'Home World',
      inputs: [{ id: 'homeSMA', name: 'semiMajorAxis', unit: 'm', defaultValue: 13599840256 }]
    },
    {
      label: 'Current Star',
      inputs: [
        { id: 'starRadius', name: 'radius', unit: 'm', defaultValue: 261600000 },
        {
          id: 'starGrav',
          group: [
            { id: 'starGravParameter', name: 'gravParameter', unit: 'm³/s²' },
            { id: 'starMass', name: 'mass', unit: 'kg' },
            { id: 'starGeeASL', name: 'geeASL', unit: 'g₀', defaultValue: 1.74684656100137 }
          ]
        },
        { id: 'starLuminosity', name: 'luminosity', unit: 'W/m²', defaultValue: 1360 }
      ]
    },
    {
      label: 'Current Body',
      inputs: [
        { id: 'bodyRadius', name: 'radius', unit: 'm', defaultValue: 6000000 },
        {
          id: 'bodyGrav',
          group: [
            { id: 'bodyGravParameter', name: 'gravParameter', unit: 'm³/s²' },
            { id: 'bodyMass', name: 'mass', unit: 'kg' },
            { id: 'bodyGeeASL', name: 'geeASL', unit: 'g₀', defaultValue: 0.800273296 }
          ]
        },
        { id: 'bodyAlbedo', name: 'albedo (bond)', defaultValue: 0.52 },
        { id: 'bodySMA', name: 'semiMajorAxis', unit: 'm', defaultValue: 68773560320 },
        { id: 'bodyEccentricity', name: 'eccentricity', defaultValue: 0.05 },
        { id: 'bodyInclination', name: 'inclination', unit: '°', defaultValue: 1.304 },
        { id: 'bodyArgument', name: 'argumentOfPeriapsis', unit: '°', defaultValue: 0 }
      ]
    },
    {
      description:
        'Atmospheres are developed at real life scale and then modified to fit the smaller KSP universe. Enter what the radius of the current body would be in real life:',
      inputs: [
        {
          id: 'irlRadius',
          name: 'Current body, real life radius',
          unit: 'm',
          defaultValue: 63750000
        }
      ]
    },
    {
      description:
        'Enter below the composition of the atmosphere. Only the most common and applicable gases are included, though there is space to add others.',
      inputs: [
        {
          id: 'gasTable',
          table: [
            {
              name: 'Hydrogen',
              formula: 'H₂',
              defaultPercent: 90.75,
              molarMass: 2.02,
              specificHeat: [
                {
                  temp: 100,
                  formula: () => 28.154
                },
                {
                  temp: 298.15,
                  formula: (temp) =>
                    -0.0000012385 * temp ** 3 + 0.000847907 * temp ** 2 - 0.174747 * temp + 38.3882
                },
                {
                  temp: 1000,
                  formula: (temp) =>
                    33.066178 -
                    11.363417 * (temp / 1000) +
                    11.432816 * (temp / 1000) ** 2 -
                    2.772874 * (temp / 1000) ** 3 -
                    0.158558 / (temp / 1000) ** 2
                },
                {
                  temp: 2500,
                  formula: (temp) =>
                    18.563083 +
                    12.257357 * (temp / 1000) -
                    2.859786 * (temp / 1000) ** 2 +
                    0.268238 * (temp / 1000) ** 3 +
                    1.97799 / (temp / 1000) ** 2
                },
                {
                  temp: 6000,
                  formula: (temp) =>
                    43.41356 -
                    4.293079 * (temp / 1000) +
                    1.272428 * (temp / 1000) ** 2 -
                    0.096876 * (temp / 1000) ** 3 -
                    20.533862 / (temp / 1000) ** 2
                },
                {
                  temp: Infinity,
                  formula: () => 41.965
                }
              ]
            },
            {
              name: 'Helium',
              formula: 'He',
              defaultPercent: 9.25,
              molarMass: 4.002602,
              specificHeat: 20.786
            },
            {
              name: 'Methane',
              formula: 'CH₄',
              defaultPercent: 0,
              molarMass: 16.0425,
              specificHeat: [
                {
                  temp: 100,
                  formula: () => 33.258
                },
                {
                  temp: 298.15,
                  formula: (temp) =>
                    0.000000327888 * temp ** 3 -
                    0.000095605 * temp ** 2 +
                    0.00787935 * temp +
                    33.0982
                },
                {
                  temp: 1300,
                  formula: (temp) =>
                    -0.703029 +
                    108.4773 * (temp / 1000) -
                    42.52157 * (temp / 1000) ** 2 +
                    5.862788 * (temp / 1000) ** 3 +
                    0.678565 / (temp / 1000) ** 2
                },
                {
                  temp: 6000,
                  formula: (temp) =>
                    85.81217 +
                    11.26467 * (temp / 1000) -
                    2.114146 * (temp / 1000) ** 2 +
                    0.13819 * (temp / 1000) ** 3 -
                    26.42221 / (temp / 1000) ** 2
                },
                {
                  temp: Infinity,
                  formula: () => 106.306
                }
              ]
            },
            {
              name: 'Ammonia',
              formula: 'NH₃',
              defaultPercent: 0,
              molarMass: 17.03,
              specificHeat: [
                {
                  temp: 100,
                  formula: () => 33.284
                },
                {
                  temp: 298.15,
                  formula: (temp) => 0.0000735664 * temp ** 2 - 0.0173399 * temp + 34.2823
                },
                {
                  temp: 1400,
                  formula: (temp) =>
                    19.99563 +
                    49.77119 * (temp / 1000) -
                    15.37599 * (temp / 1000) ** 2 +
                    1.921168 * (temp / 1000) ** 3 +
                    0.189174 / (temp / 1000) ** 2
                },
                {
                  temp: 6000,
                  formula: (temp) =>
                    52.02427 +
                    18.48801 * (temp / 1000) -
                    3.765128 * (temp / 1000) ** 2 +
                    0.248541 * (temp / 1000) ** 3 -
                    12.45799 / (temp / 1000) ** 2
                },
                {
                  temp: Infinity,
                  formula: () => 80.751
                }
              ]
            },
            {
              name: 'Hydrogen Deuteride',
              formula: 'HD',
              defaultPercent: 0,
              molarMass: 3.02204,
              specificHeat: [
                {
                  temp: 100,
                  formula: () => 29.288
                },
                {
                  temp: 298.15,
                  formula: (temp) => 0.0000056637 * temp ** 2 - 0.00269911 * temp + 29.5013
                },
                {
                  temp: 1000,
                  formula: (temp) =>
                    31.24992 -
                    7.58919 * (temp / 1000) +
                    9.011375 * (temp / 1000) ** 2 -
                    1.914415 * (temp / 1000) ** 3 -
                    0.047793 / (temp / 1000) ** 2
                },
                {
                  temp: 6000,
                  formula: (temp) =>
                    28.22296 +
                    4.575371 * (temp / 1000) -
                    0.551669 * (temp / 1000) ** 2 +
                    0.031038 * (temp / 1000) ** 3 -
                    1.732276 / (temp / 1000) ** 2
                },
                {
                  temp: Infinity,
                  formula: () => 42.339
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
