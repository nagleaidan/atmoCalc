<template>
  <h2>{{ formDefinition.title }}</h2>
  <h6>{{ formDefinition.description }}</h6>
  <h6 v-if="formDefinition.link">
    <a :href="formDefinition.link.href">{{ formDefinition.link.name }}</a>
  </h6>
  <h6 v-if="formDefinition.description2">{{ formDefinition.description2 }}</h6>
  <div v-for="formItem in formDefinition.form" :key="formItem.label">
    <h5 v-if="formItem.label" class="form-label mt-2">{{ formItem.label }}:</h5>
    <h6 v-if="formItem.description" class="form-label mt-2">{{ formItem.description }}:</h6>
    <div v-for="input in formItem.inputs" :key="input.id" class="mt-2">
      <div v-if="input.group" class="border p-2">
        <p class="form-label fst-italic fw-light">
          Only one of these {{ input.group.length }} is needed, if more than one is provided enter
          all
        </p>
        <div v-for="subInput in input.group" :key="subInput.id" class="mt-2">
          <CInputGroup :name="subInput.name" :unit="subInput.unit" />
        </div>
      </div>
      <CInputGroup :name="input.name" :unit="input.unit" v-else />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { FormDefinition } from '@/types/form'

defineProps<{ formDefinition: FormDefinition }>()
</script>

<style lang="scss" scoped></style>
