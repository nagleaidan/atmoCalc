<template>
  <h2>{{ formDefinition.title }}</h2>
  <h6>{{ formDefinition.description }}</h6>
  <h6 v-if="formDefinition.link">
    <a :href="formDefinition.link.href">{{ formDefinition.link.name }}</a>
  </h6>
  <h6 v-if="formDefinition.description2">{{ formDefinition.description2 }}</h6>
  <div v-for="formItem in formDefinition.form" :key="formItem.label">
    <h5 v-if="formItem.label" class="form-label mt-2">{{ formItem.label }}:</h5>
    <h6 v-if="formItem.description" class="form-label mt-2">{{ formItem.description }}</h6>
    <div v-for="input in formItem.inputs" :key="input.id" class="mt-2">
      <div v-if="input.group" class="border p-2">
        <p class="form-label fst-italic fw-light">
          Only one of these {{ input.group.length }} is needed, if more than one is provided enter
          all
        </p>
        <div v-for="subInput in input.group" :key="subInput.id" class="mt-2">
          <CInputGroup
            :name="subInput.name"
            :unit="subInput.unit"
            @change="$emit('formDataChanged', formData)"
          />
        </div>
      </div>
      <div v-else-if="input.table">
        <BTableSimple small responsive>
          <BThead head-variant="dark">
            <BTr>
              <BTh class="text-center">Gas Species</BTh>
              <BTh class="text-center">Formula</BTh>
              <BTh class="text-center">% by volume</BTh>
              <BTh class="text-center">M (g/mol)</BTh>
              <BTh class="text-center">Cp° (J/mol-K)</BTh>
            </BTr>
          </BThead>
          <BTbody>
            <BTr v-for="row in input.table" :key="row.name">
              <BTd>{{ row.name }}</BTd>
              <BTd>{{ row.formula }}</BTd>
              <BTd>
                <BInputGroup append="%">
                  <BFormInput type="number" @change="$emit('formDataChanged', formData)" />
                </BInputGroup>
              </BTd>
              <BTd>{{ row.molarMass.toFixed(2) }}</BTd>
              <BTd>
                <div v-if="Number.isFinite(row.specificHeat)">
                  {{ (row.specificHeat as number).toFixed(2) }}
                </div>
                <div v-else>
                  {{
                    (row.specificHeat as TempTableRow[])
                      .find((row) => currentTemp < row.temp)
                      ?.formula(currentTemp)
                      .toFixed(2)
                  }}
                </div>
              </BTd>
            </BTr>
          </BTbody>
          <BTfoot>
            <BTr>
              <BTh colspan="2">Total (must equal 100%)</BTh>
              <!-- TODO: make this shit work -->
              <BTd colspan="3"> 100.00%</BTd>
            </BTr>
          </BTfoot>
        </BTableSimple>
      </div>
      <CInputGroup
        :name="input.name"
        :unit="input.unit"
        v-else
        v-model="formData[input.id]"
        @change="$emit('formDataChanged', formData)"
      />
    </div>
  </div>
  {{ formData }}
  <button @click="console.log(formData)">test</button>
</template>

<script setup lang="ts">
// the type `TempTableRow` is used, but in the html section so eslint gets confused
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { FormDefinition, TempTableRow, formDataType } from '@/types/form'
import { computed } from 'vue'

const props = defineProps<{ formDefinition: FormDefinition }>()
const emit = defineEmits<{ formDataChanged: [value: formDataType] }>()
// TODO: current temp needs to be a real number
const currentTemp = 194.445484211496
const formData = computed(() =>
  Object.fromEntries(
    props.formDefinition.form
      .flatMap((i) => i.inputs)
      .flatMap((i) => i.group ?? i.table ?? i)
      .map((i) => [i.id, i.defaultValue])
  )
)
// force an emit after form data is built to initialize parent component
emit('formDataChanged', formData.value)
</script>

<style lang="scss" scoped></style>
