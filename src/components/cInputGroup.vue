<template>
  <BInputGroup>
    <template #prepend v-if="name">
      <BInputGroupText>{{ name }}</BInputGroupText>
    </template>
    <BFormInput type="number" v-model="model" @change="$emit('change')" class="text-end" />
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

<style lang="scss" scoped>
input {
  padding-inline-end: 0;
}
</style>
