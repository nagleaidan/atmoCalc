<template>
  <BInputGroup>
    <template #prepend v-if="name">
      <BInputGroupText>{{ name }}</BInputGroupText>
    </template>
    <BFormInput type="number" v-model="model" @change="$emit('change')" />
    <template #append v-if="unit">
      <BInputGroupText>{{ unit }}</BInputGroupText>
    </template>
  </BInputGroup>
</template>

<script setup lang="ts">
defineProps<{ name: string; unit?: string }>()
defineEmits(['change'])
const model = defineModel()
</script>

<style lang="scss" scoped></style>
