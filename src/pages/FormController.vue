<template>
  <div class="container-xxl">
    <div class="content-wrapper">
      <BFormRadioGroup
        v-model="buttonSelected"
        button-variant="outline-primary"
        size="lg"
        name="radios-btn-outline"
        buttons
        class="mb-2"
      >
        <BFormRadio v-for="option in buttonsOptions" :key="option.value" :value="option.value">
          <span v-b-tooltip="{ title: option.tooltip, delay: 500 }"> {{ option.text }}</span>
        </BFormRadio>
      </BFormRadioGroup>
      <div class="row row-cols-1 row-cols-lg-2 g-4">
        <div class="col">
          <BCard>
            <!-- TODO: current temp needs to be a real number -->
            <CForm :form-definition="optionSelected.config" currentTemp="194.445484211496" />
          </BCard>
        </div>
        <div class="col">
          <BCard>{{ buttonSelected }}{{ optionSelected }}</BCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type CForm from '@/components/cForm.vue'
import { earthDefinition } from '@/configs/earth'
import { gasDefinition } from '@/configs/gas'
import { lockedDefinition } from '@/configs/locked'
import { otherDefinition } from '@/configs/other'
import { starDefinition } from '@/configs/star'
import type { AtmoOption, AtmoOptionConfig } from '@/types/form'
import { computed, ref, type Ref, type ComputedRef } from 'vue'

const buttonsOptions: AtmoOptionConfig[] = [
  {
    text: 'Star',
    value: 'star',
    tooltip: 'Stellar atmospheres, consisting primarily the chromosphere',
    config: starDefinition
  },
  {
    text: 'Gas Giant',
    value: 'gas',
    tooltip:
      'Hydrogen-helium atmospheres for large gaseous planets, including gas giants and ice giants',
    config: gasDefinition
  },
  {
    text: 'Earth-like',
    value: 'earth',
    tooltip:
      'Nitrogen-oxygen atmospheres for celestial bodies located within the habitable zone of their parent star',
    config: earthDefinition
  },
  {
    text: 'Other',
    value: 'other',
    tooltip:
      'Atmospheres not falling into the any other group; can vary greatly in composition, pressure and temperature',
    config: otherDefinition
  },
  {
    text: 'Tidally Locked',
    value: 'locked',
    tooltip: 'Similar to "Other" but for planets that are tidally locked to their parent star',
    config: lockedDefinition
  }
]
const buttonSelected: Ref<AtmoOption> = ref('gas')
const optionSelected: ComputedRef<AtmoOptionConfig> = computed(
  () => buttonsOptions.find((option) => option.value === buttonSelected.value) ?? buttonsOptions[0]
)
</script>

<style lang="scss" scoped></style>
