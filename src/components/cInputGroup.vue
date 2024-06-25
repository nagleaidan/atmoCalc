<template>
  <BInputGroup>
    <template #prepend v-if="name">
      <BInputGroupText>{{ name }}</BInputGroupText>
    </template>
    <BFormInput type="number" />
    <template #append v-if="unit">
      <BInputGroupText>{{ unit }}</BInputGroupText>
    </template>
  </BInputGroup>
</template>

<script setup lang="ts">
defineProps<{ name: string; unit?: string }>()
</script>

<style lang="scss" scoped></style>
